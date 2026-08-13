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
  facebook?: string;
  instagram?: string;
  website?: string;
};

export type ArtistProfile = {
  name: string;
  role: string;
  practices: string[];
  born?: string;
  bornIn?: string;
  basedIn?: string;
  major?: string;
  portrait?: string;
  statement?: string;
  practice?: string;
  biography?: string;
  education?: ArtistRecord[];
  exhibitions?: ArtistRecord[];
  awards?: ArtistRecord[];
  contact?: ArtistContact;
};

export const artist: ArtistProfile = {
  name: "Phan Thị Ý Như",
  role: "Visual Artist",
  practices: ["Oil", "Lacquer"],
  born: "Born 2004",
  bornIn: "Bình Định, Vietnam",
  basedIn: "Ho Chi Minh City, Vietnam",
  major: "Painting",
  portrait: "/assets/artist/at_1.webp?v=real-v1",
  biography: "I was born in 2004 in Bình Định and am currently based in Ho Chi Minh City. I am a third-year Painting student at Ho Chi Minh City University of Fine Arts.\n\nDrawn to painting from an early age, I am currently exploring different materials and approaches in order to discover the visual language that feels most natural to my developing practice. My works often begin with close observations of everyday life and the spaces around me — familiar streets, interiors, working environments, people and fleeting moments translated through colour, surface and composition.",
  practice: "At this stage of my practice, I am paying particular attention to lacquer. Its layered process — building, covering, polishing and gradually revealing the surface — allows the image to develop through both material and time. The shifting relationship between depth, texture and reflected light offers a way of thinking through the image beyond paint alone.",
  education: [{ title: "Ho Chi Minh City University of Fine Arts", institution: "Painting", location: "Third-year student" }],
  contact: {
    facebook: "https://www.facebook.com/ynh.cuteee",
    email: "phanthiynhu12345@gmail.com",
  },
};
