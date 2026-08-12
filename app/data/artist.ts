export type ArtistRecord = {
  year?: string;
  title: string;
  institution?: string;
  location?: string;
  venue?: string;
  organization?: string;
};

export type ArtistContact = {
  email?: string;
  instagram?: string;
  website?: string;
};

export type ArtistProfile = {
  name: string;
  role: string;
  practices: string[];
  portrait?: string;
  statement?: string;
  biography?: string;
  education?: ArtistRecord[];
  exhibitions?: ArtistRecord[];
  awards?: ArtistRecord[];
  contact?: ArtistContact;
};

export const artist: ArtistProfile = {
  name: "Phan Thị Ý Như",
  role: "Visual Artist",
  practices: ["Oil", "Silk", "Lacquer", "Mixed Media"],
};
