export type LocationInfo = {
  key: "nb" | "bw";
  name: string;
  subtitle: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  accent: string;
  accentSoft: string;
  accentText: string;
};

export const LOCATIONS: LocationInfo[] = [
  {
    key: "nb",
    name: "Beauty Concept",
    subtitle: "Novi Beograd",
    address: "Trešnjinog cveta 1ž",
    phone: "+381 64 823 9439",
    hours: "Pon — Sub · 9—21h",
    image: "/lumiera-assets/NwD75Uua7WKDmBcDGC6jVH3tpQ.jpg",
    accent: "#3F6E5E",
    accentSoft: "#E1ECE6",
    accentText: "#264A3D",
  },
  {
    key: "bw",
    name: "Wellbeing Concept",
    subtitle: "Belgrade Waterfront",
    address: "Hercegovačka 17",
    phone: "+381 66 177 117",
    hours: "Pon — Sub · 9—21h",
    image: "/lumiera-assets/Ai3t6jdxsPY5sVHfSYRFtfzuY.jpg",
    accent: "#5B6F94",
    accentSoft: "#E2E8F1",
    accentText: "#37466A",
  },
];
