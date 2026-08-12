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
  { id: "work-01", title: "Untitled I", year: 2026, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-01.png", featured: true, provisional: true },
  { id: "work-02", title: "Study I", year: 2025, medium: "Silk", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-02.png", featured: true, provisional: true },
  { id: "work-03", title: "Untitled II", year: 2025, medium: "Lacquer", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/mock-artworks/pic-03.png", featured: true, provisional: true },
  { id: "work-04", title: "Study II", year: 2024, medium: "Mixed Media", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-04.png", featured: true, provisional: true },
  { id: "work-05", title: "Work No. 05", year: 2024, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-05.png", featured: false, provisional: true },
  { id: "work-06", title: "Untitled III", year: 2023, medium: "Silk", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/mock-artworks/pic-06.png", featured: false, provisional: true },
  { id: "work-07", title: "Study III", year: 2023, medium: "Lacquer", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-07.png", featured: false, provisional: true },
  { id: "work-08", title: "Untitled IV", year: 2022, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-08.png", featured: false, provisional: true },
  { id: "work-09", title: "Study IV", year: 2022, medium: "Silk", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/mock-artworks/pic-09.png", featured: false, provisional: true },
  { id: "work-10", title: "Work No. 10", year: 2021, medium: "Lacquer", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-10.png", featured: false, provisional: true },
  { id: "work-11", title: "Untitled V", year: 2021, medium: "Oil", dimensions: "Dimensions pending", series: "Studies", image: "/assets/mock-artworks/pic-11.png", featured: false, provisional: true },
  { id: "work-12", title: "Study V", year: 2020, medium: "Mixed Media", dimensions: "Dimensions pending", series: "Material Studies", image: "/assets/mock-artworks/pic-12.png", featured: false, provisional: true },
];

export const practiceGroups = [
  { medium: "Oil" as const, artworkId: "work-01" },
  { medium: "Silk" as const, artworkId: "work-02" },
  { medium: "Lacquer" as const, artworkId: "work-03" },
  { medium: "Mixed Media" as const, artworkId: "work-04" },
];
