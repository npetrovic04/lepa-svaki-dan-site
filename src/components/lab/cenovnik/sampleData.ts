// Shared seed data for the cenovnik layout demos — pulled & lightly trimmed
// from the real cenovnik so the previews show plausible content.

export type DemoService = {
  name: string;
  description?: string;
  price: string;
  location: "nb" | "bw" | "both";
};

export type DemoGroup = { title: string; services: DemoService[] };

export const DEMO_GROUPS: DemoGroup[] = [
  {
    title: "Higijenski tretmani",
    services: [
      { name: "Higijenski tretman lica 1", description: "Klasičan piling, čišćenje, maska", price: "51€", location: "both" },
      { name: "Higijenski tretman + Fitopiling", price: "89€", location: "bw" },
      { name: "Higijenski tretman lica 2", description: "Hemijski piling, čišćenje, maska", price: "68€", location: "nb" },
      { name: "Higijenski tretman + PRX piling", price: "98€", location: "both" },
    ],
  },
  {
    title: "Biološki tretmani",
    services: [
      { name: "Biološki tretman lica 1", description: "Piling, masaža, serum, maska", price: "55€", location: "both" },
      { name: "Biološki tretman lica 2", description: "Hemijski piling, mezoporacija, maska", price: "81€", location: "nb" },
      { name: "REVIVE & RADIATE", description: "Biorevitalizujući piling + masaža", price: "102€", location: "both" },
      { name: "SENSI SKIN", description: "Za osetljivu kožu", price: "62€", location: "bw" },
    ],
  },
  {
    title: "Anti-aging protokoli",
    services: [
      { name: "Profhilo bio-remodeling", price: "260€", location: "both" },
      { name: "Dermapen anti-aging", description: "Lice, vrat, dekolte", price: "180€", location: "both" },
      { name: "Venus Lift & Glow", price: "120€", location: "bw" },
      { name: "Myolift", price: "70€", location: "nb" },
    ],
  },
];
