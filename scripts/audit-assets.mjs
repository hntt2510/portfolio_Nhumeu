import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataModule = await import(pathToFileURL(path.join(root, "app/data/artworks.ts")).href);
const artistModule = await import(pathToFileURL(path.join(root, "app/data/artist.ts")).href);

const { artworks, aboutCuration, homepageCuration, practiceGroups } = dataModule;
const { artist } = artistModule;
const canonicalFolders = ["artist", "artworks", "details", "process"];
const errors = [];
const warnings = [];
const referencedPaths = new Set();

function print(message = "") {
  process.stdout.write(`${message}\n`);
}

function publicPathFromAsset(assetPath) {
  if (typeof assetPath !== "string" || !assetPath.startsWith("/assets/")) return null;
  return path.join(root, "public", assetPath.slice(1));
}

function relativeAssetPath(assetPath) {
  return assetPath.replace(/^\/assets\//, "");
}

function addReference(assetPath, label, required = true) {
  if (!assetPath) return;
  const filePath = publicPathFromAsset(assetPath);
  if (!filePath) {
    errors.push(`${label}: asset path must start with /assets/: ${String(assetPath)}`);
    return;
  }
  const relativePath = relativeAssetPath(assetPath);
  referencedPaths.add(relativePath);
  return { filePath, relativePath, required };
}

async function readDimensions(filePath) {
  const buffer = await fs.readFile(filePath);

  if (buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20), format: "png" };
  }

  if (buffer.length >= 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buffer.toString("ascii", 12, 16);
    if (chunk === "VP8X" && buffer.length >= 30) {
      const width = 1 + buffer[24] + (buffer[25] << 8) + (buffer[26] << 16);
      const height = 1 + buffer[27] + (buffer[28] << 8) + (buffer[29] << 16);
      return { width, height, format: "webp" };
    }
    if (chunk === "VP8 " && buffer.length >= 30) {
      const signature = buffer.subarray(23, 26);
      if (signature.equals(Buffer.from([0x9d, 0x01, 0x2a]))) {
        return { width: buffer.readUInt16LE(26), height: buffer.readUInt16LE(28), format: "webp" };
      }
    }
    if (chunk === "VP8L" && buffer.length >= 25 && buffer[20] === 0x2f) {
      const width = 1 + (buffer[21] | ((buffer[22] & 0x3f) << 8));
      const height = 1 + ((buffer[22] >> 6) | (buffer[23] << 2) | ((buffer[24] & 0xf) << 10));
      return { width, height, format: "webp" };
    }
  }

  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      offset += 2;
      if (marker === 0xd8 || marker === 0xd9) continue;
      if (offset + 2 > buffer.length) break;
      const segmentLength = buffer.readUInt16BE(offset);
      const isSof = (marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf);
      if (isSof && offset + 7 <= buffer.length) {
        return { width: buffer.readUInt16BE(offset + 5), height: buffer.readUInt16BE(offset + 3), format: "jpeg" };
      }
      offset += segmentLength;
    }
  }

  throw new Error("unsupported or unreadable image format");
}

async function auditReference(reference, label, { declaredRatio, required = true } = {}) {
  const entry = addReference(reference, label, required);
  if (!entry) return;

  try {
    const stats = await fs.stat(entry.filePath);
    if (!stats.isFile()) throw new Error("path is not a file");
    const dimensions = await readDimensions(entry.filePath);
    const ratio = dimensions.width / dimensions.height;
    const ratioText = ratio.toFixed(6);
    print(`${entry.relativePath}\n  ${dimensions.width} × ${dimensions.height}\n  ratio: ${ratioText}`);
    if (declaredRatio !== undefined && Math.abs(declaredRatio - ratio) > 0.001) {
      errors.push(`${label}: declared aspectRatio ${declaredRatio} differs from file ratio ${ratioText}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const prefix = required ? "missing or unreadable" : "optional missing or unreadable";
    if (required) errors.push(`${label}: ${prefix} (${entry.relativePath}; ${message})`);
    else warnings.push(`${label}: ${prefix} (${entry.relativePath}; ${message})`);
  }
}

function validateArtworkRecord(artwork, index) {
  const label = `artworks[${index}]`;
  for (const field of ["id", "title", "image", "aspectRatio"]) {
    if (artwork?.[field] === undefined || artwork?.[field] === "") errors.push(`${label}: missing required field ${field}`);
  }
  if (artwork?.image) addReference(artwork.image, `${label}.image`);
  if (artwork?.detailFocus) {
    const { x, y, zoom } = artwork.detailFocus;
    if (![x, y, zoom].every((value) => typeof value === "number" && Number.isFinite(value))) errors.push(`${label}.detailFocus: x, y and zoom must be finite numbers`);
    if (x < 0 || x > 100 || y < 0 || y > 100 || zoom < 1) errors.push(`${label}.detailFocus: x/y must be 0–100 and zoom must be >= 1`);
  }
  if (artwork?.details) artwork.details.forEach((asset, assetIndex) => addReference(asset.image, `${label}.details[${assetIndex}]`));
  if (artwork?.process) artwork.process.forEach((asset, assetIndex) => addReference(asset.image, `${label}.process[${assetIndex}]`));
}

function validateIds(ids, label) {
  for (const id of ids) {
    if (!artworks.some((artwork) => artwork.id === id)) errors.push(`${label}: invalid artwork ID "${id}"`);
  }
}

async function listUnusedAssets() {
  for (const folder of canonicalFolders) {
    const directory = path.join(root, "public/assets", folder);
    let entries = [];
    try {
      entries = await fs.readdir(directory, { withFileTypes: true });
    } catch {
      warnings.push(`canonical folder missing: public/assets/${folder}`);
      continue;
    }
    const files = entries.filter((entry) => entry.isFile() && !entry.name.startsWith("."));
    const invalidNames = files.filter((file) => {
      const prefix = folder === "artist" ? "at" : folder === "artworks" ? "pic" : folder === "details" ? "detail" : "process";
      return !new RegExp(`^${prefix}_\\d+\\.(?:webp|jpe?g|png)$`, "i").test(file.name);
    }).map((file) => `${folder}/${file.name}`);
    if (invalidNames.length) errors.push(`invalid asset names in ${folder}: ${invalidNames.join(", ")}`);
    const unused = files.map((file) => `${folder}/${file.name}`).filter((assetPath) => !referencedPaths.has(assetPath));
    if (unused.length) print(`unused assets in ${folder}: ${unused.join(", ")}`);
  }
}

print("CONTENT AUDIT");
print("=============");

const ids = artworks.map((artwork) => artwork.id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) errors.push(`duplicate artwork IDs: ${[...new Set(duplicateIds)].join(", ")}`);

const artworkPaths = artworks.flatMap((artwork) => [artwork.image, ...(artwork.details ?? []).map((asset) => asset.image), ...(artwork.process ?? []).map((asset) => asset.image)]).filter(Boolean);
const duplicatePaths = artworkPaths.filter((assetPath, index) => artworkPaths.indexOf(assetPath) !== index);
if (duplicatePaths.length) warnings.push(`duplicate referenced asset paths: ${[...new Set(duplicatePaths)].join(", ")}`);

artworks.forEach(validateArtworkRecord);
validateIds([homepageCuration.opening, homepageCuration.featured, homepageCuration.contrast, ...homepageCuration.sequence, ...homepageCuration.archive], "homepage curation");
validateIds([aboutCuration.artworkPause], "about curation");
practiceGroups.forEach((group) => validateIds([group.artworkId], `practice group ${group.medium}`));

print("\nARTWORK METADATA");
print("----------------");
for (const artwork of artworks) {
  const status = artwork.provisional ? "PROVISIONAL" : "VERIFIED";
  print(`${artwork.id}  ${status}`);
  print(`  id: ${artwork.id ? "✓" : "✗"}  title: ${artwork.title ? "✓" : "✗"}`);
  print(`  image: ${artwork.image ? "✓" : "✗"}  aspectRatio: ${artwork.aspectRatio !== undefined ? "✓" : "✗"}`);
  for (const field of ["year", "medium", "dimensions", "series"]) print(`  ${field}: ${artwork[field] !== undefined ? "✓" : "?"}`);
  await auditReference(artwork.image, `${artwork.id}.image`, { declaredRatio: artwork.aspectRatio });
  for (const asset of artwork.details ?? []) await auditReference(asset.image, `${artwork.id}.detail`, { declaredRatio: asset.aspectRatio });
  for (const asset of artwork.process ?? []) await auditReference(asset.image, `${artwork.id}.process`, { declaredRatio: asset.aspectRatio });
}

if (artist.portrait) await auditReference(artist.portrait, "artist.portrait", { required: false });
await listUnusedAssets();

if (warnings.length) {
  print("\nINFO");
  warnings.forEach((warning) => print(`? ${warning}`));
}
if (errors.length) {
  print("\nERRORS");
  errors.forEach((error) => print(`✗ ${error}`));
  process.exitCode = 1;
} else {
  print("\nPASS: content and asset audit completed");
}
