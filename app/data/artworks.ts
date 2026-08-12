export type Medium = "Oil" | "Silk" | "Lacquer" | "Mixed Media";

export type Artwork = {
  id: string;
  title: string;
  year: number;
  medium: Medium;
  dimensions: string;
  series: string;
  image: string;
  featured: boolean;
  provisional: boolean;
};

export const artworks: Artwork[] = [
  { id: "work-01", title: "Untitled I", year: 2026, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_1.webp", featured: true, provisional: true },
  { id: "work-02", title: "Study I", year: 2025, medium: "Silk", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_2.webp", featured: true, provisional: true },
  { id: "work-03", title: "Untitled II", year: 2025, medium: "Lacquer", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/artworks/pic_3.webp", featured: true, provisional: true },
  { id: "work-04", title: "Study II", year: 2024, medium: "Mixed Media", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_4.webp", featured: true, provisional: true },
  { id: "work-05", title: "Work No. 05", year: 2024, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_5.webp", featured: false, provisional: true },
  { id: "work-06", title: "Untitled III", year: 2023, medium: "Silk", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/artworks/pic_6.webp", featured: false, provisional: true },
  { id: "work-07", title: "Study III", year: 2023, medium: "Lacquer", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_7.webp", featured: false, provisional: true },
  { id: "work-08", title: "Untitled IV", year: 2022, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_8.webp", featured: false, provisional: true },
  { id: "work-09", title: "Study IV", year: 2022, medium: "Silk", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/artworks/pic_9.webp", featured: false, provisional: true },
  { id: "work-10", title: "Work No. 10", year: 2021, medium: "Lacquer", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_10.webp", featured: false, provisional: true },
  { id: "work-11", title: "Untitled V", year: 2021, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/artworks/pic_11.webp", featured: false, provisional: true },
  { id: "work-12", title: "Study V", year: 2020, medium: "Mixed Media", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/artworks/pic_12.webp", featured: false, provisional: true },
];

export const practiceGroups = [
  { medium: "Oil" as const, artworkId: "work-01" },
  { medium: "Silk" as const, artworkId: "work-02" },
  { medium: "Lacquer" as const, artworkId: "work-03" },
  { medium: "Mixed Media" as const, artworkId: "work-04" },
];
