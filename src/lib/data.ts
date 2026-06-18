// Lumiera slike preuzete sa framerusercontent.com CDN — lokalne kopije u /public/lumiera-assets/
// Logo preuzet sa lepasvakidan.rs
export const images = {
  // Hero slike (2000×1333 — portrait/atmosphere)
  hero: "/lumiera-assets/hero1.png",
  hero2: "/lumiera-assets/hero2.png",
  hero3: "/lumiera-assets/hero3.jpg",

  // CTA banda — tamna atmosferska fotografija
  ctaBg: "/lumiera-assets/cta-bg.png",

  // Portret (2000px visina) — za Manifest sekciju
  portraitDr: "/lumiera-assets/portrait.png",

  // Tretmani — horizontalni carousel
  treatmentProfhilo:  "/lumiera-assets/UERW22sh1kIYLi7iLSLwZnqeI.jpg",
  treatmentVenus:     "/lumiera-assets/FUuEVpCZfxYHuVoaO9hjkXCU.jpg",
  treatmentDermapen:  "/lumiera-assets/Ta7t8pysLYXQc3he12H4MyZJTvc.jpg",
  treatmentFillers:   "/lumiera-assets/pe83T6PELURtsEzQGkeaYxCs.jpg",
  treatmentExtra1:    "/lumiera-assets/IaX7ZXWdw5qPYtkJS8Sq1Sc6rnI.jpg",
  treatmentExtra2:    "/lumiera-assets/OqFkZuVHVnp4ArqA4V16epS8rI.jpg",
  treatmentExtra3:    "/lumiera-assets/6A4hwz0YtJyXUrK6Q18S0t4sHU.jpg",

  // Vertikale usluga
  verticalFace:      "/lumiera-assets/bagflKECl0OlKPITxBmh1mKh28.jpg",
  verticalBody:      "/lumiera-assets/mEmiU48keF7dcTjtamv05pvaQw.jpg",
  verticalEsthetic:  "/lumiera-assets/u9FefZpSEACCgSMmzhjeEIuqCyM.jpg",
  verticalLaser:     "/lumiera-assets/Sy4d00VTr7VlVZUArsPX7X5UZHo.jpg",
  verticalProtocols: "/lumiera-assets/KRIrBpbu1a5iQAOj429U6Y09Ij8.jpg",

  // Lokacije
  locationNoviBeograd: "/lumiera-assets/NwD75Uua7WKDmBcDGC6jVH3tpQ.jpg",
  locationWaterfront:  "/lumiera-assets/Ai3t6jdxsPY5sVHfSYRFtfzuY.jpg",

  // Filozofija / about
  about: "/lumiera-assets/lSGem8njRX7qxj97u0MdoumZY.jpg",
  aboutRight: "/lumiera-assets/about-right.png",

  // Testimonial — landscape (2000×919)
  testimonial: "/lumiera-assets/FwuhHYOXRwVLdFxvgCh33culsjI.jpg",

  // Dekorativni SVG elementi
  flowerLarge: "/lumiera-assets/flower-large.svg",
};

export const brand = {
  name: "Lepa Svaki Dan",
  tagline: "Beauty & Wellbeing Concept",
  manifest:
    "Oaza lepote i uživanja na mestu koje spaja moderne aparaturne tretmane i estetske procedure sa klasičnom negom — u cilju očuvanja vaše lepote.",
  phonePrimary: "+381 64 8239 439",
  phoneWaterfront: "+381 66 177 117",
  email: "office@lepasvakidan.rs",
  whatsapp: "381648239439",
};

export const stats = [
  { value: "15+", label: "godina prakse dr Tamare Vujačić" },
  { value: "2", label: "koncepta u Beogradu" },
  { value: "40+", label: "tretmana i protokola" },
  { value: "1.000+", label: "klijenata godišnje" },
];

export const navLinks = [
  { href: "#tretmani", label: "Tretmani" },
  { href: "#koncepti", label: "Koncepti" },
  { href: "#put", label: "Vaš put" },
  { href: "#lokacije", label: "Lokacije" },
];

export const signatureTreatments = [
  {
    eyebrow: "Protokol · Glow & Go",
    title: "Glow & Go",
    description:
      "Brzi protokol sjaja koji kombinuje dubinsko čišćenje, Venus Glow i biorevitalizaciju — savršen pre važnog događaja.",
    result: "Blistava, hidrirana koža odmah po tretmanu.",
    sessions: "1 tretman",
    duration: "75 minuta",
    price: "po dogovoru",
    image: images.treatmentProfhilo,
    location: "beauty" as const,
  },
  {
    eyebrow: "Aparaturni tretman tela",
    title: "Venus Legacy",
    description:
      "Neinvazivno zatezanje i remodelacija — kombinacija RF energije i pulsnih magnetnih polja koja podstiče sopstveni kolagen.",
    result: "Zategnutije, glatkije telo bez perioda oporavka.",
    sessions: "6 tretmana",
    duration: "45 minuta",
    price: "od 80 €",
    image: images.treatmentVenus,
    location: "both" as const,
  },
  {
    eyebrow: "Mikroubodi za obnovu kože",
    title: "Dermapen",
    description:
      "Kontrolisana mikrostimulacija kože koja pokreće prirodnu obnovu kolagena — vidljivo glatkija tekstura i ujednačen ton.",
    result: "Suzene pore, smanjeni tragovi od akni, sjajna koža.",
    sessions: "4 tretmana",
    duration: "60 minuta",
    price: "po dogovoru",
    image: images.treatmentDermapen,
    location: "beauty" as const,
  },
  {
    eyebrow: "Laserska epilacija",
    title: "Laserska epilacija",
    description:
      "Venus Velocity diodni laser — najsavremenija tehnologija za trajno uklanjanje dlačica na svim tipovima kože.",
    result: "Trajna redukcija dlačica već posle prvog tretmana.",
    sessions: "paket 6+1",
    duration: "od 20 minuta",
    price: "od 16 €",
    image: images.treatmentFillers,
    location: "wellbeing" as const,
  },
];

export const verticals = [
  {
    title: "Tretmani lica",
    summary:
      "Higijenski i biološki tretmani, pilinzi, Venus Glow, Dermapen, Myolift.",
    count: "18 tretmana",
    image: images.verticalFace,
    location: "beauty" as const,
  },
  {
    title: "Tretmani tela",
    summary: "Venus Legacy, presoterapija, anticelulit protokoli, masaže.",
    count: "12 tretmana",
    image: images.verticalBody,
    location: "wellbeing" as const,
  },
  {
    title: "Estetske procedure",
    summary: "Botox, hijaluron, PRP, Profhilo, biostimulatori, mezoniti.",
    count: "22 procedure",
    image: images.verticalEsthetic,
    location: "beauty" as const,
  },
  {
    title: "Laserska epilacija",
    summary: "Venus Velocity diodni laser. Pojedinačno ili 6+1 paketi.",
    count: "od 16 €",
    image: images.verticalLaser,
    location: "wellbeing" as const,
  },
  {
    title: "Posebni protokoli",
    summary:
      "Instant Glow, Wedding Ready, New Mum Recharge, Summer Body — paketi za rezultat.",
    count: "10 paketa",
    image: images.verticalProtocols,
    location: "both" as const,
  },
];

export const sharedServices = [
  "Venus Legacy",
  "Posebni protokoli",
  "Konsultacije",
];

export const concepts = [
  {
    slug: "beauty",
    concept: "Beauty Concept",
    name: "Novi Beograd",
    location: "Trešnjinog cveta 1ž",
    description:
      "Naša matična lokacija — centar za estetsku medicinu, tretmane lica i laserske procedure. Tim lekara specijalista i kozmetičara sa aparaturom najvišeg ranga.",
    services: [
      "Estetska medicina",
      "Tretmani lica",
      "Laserska dermatologija",
      "Candela Nordlys laser",
      "Venus Legacy",
      "Hijaluronski fileri",
      "Botulinum toksin",
      "Dermapen & pilinzi",
    ],
    phone: brand.phonePrimary,
    map: "https://maps.google.com/?q=Tre%C5%A1njinog+cveta+1%C5%BE+Novi+Beograd",
    image: images.locationNoviBeograd,
  },
  {
    slug: "wellbeing",
    concept: "Wellbeing Concept",
    name: "Belgrade Waterfront",
    location: "Hercegovačka 17",
    description:
      "Lokacija usmerena na celokupan wellbeing — tretmani tela, laserska epilacija, endokrinologija i infuzije. Posebni aparati i specijalisti koji rade isključivo ovde.",
    services: [
      "Tretmani tela",
      "Laserska epilacija",
      "Presoterapija Ballancer Pro",
      "Med Contour",
      "AWT Storz",
      "Endokrinologija",
      "Infuzije",
      "Rast kose",
    ],
    phone: brand.phoneWaterfront,
    map: "https://maps.google.com/?q=Hercegova%C4%8Dka+17+Beograd",
    image: images.locationWaterfront,
  },
];

export const journey = [
  {
    step: "01",
    title: "Konsultacija",
    body: "Razgovor sa dr Tamarom ili glavnim terapeutom — analiza kože, anamneza, očekivanja.",
  },
  {
    step: "02",
    title: "Lični plan",
    body: "Plan tretmana sa jasnim ciljem, predviđenim brojem seansi i investicijom.",
  },
  {
    step: "03",
    title: "Tretman",
    body: "Sat vremena u tihom prostoru, sa proverenom aparatkom i preparatima.",
  },
  {
    step: "04",
    title: "Follow-up",
    body: "Provera rezultata posle 7–14 dana. Plan kućne nege koji štiti investiciju.",
  },
];

export const testimonials = [
  {
    quote:
      "Samo da javnem, da posle prvog laser tretmana za uklanjanje dlačica, rezultat je šokantan.",
    attribution: "Nada",
    context: "Laserska epilacija",
    emoji: "😍",
  },
  {
    quote:
      "Samo da javim, da ste ulepšali dan jednoj mami. Posle vašeg tretmana osećam se fenomenalno. Veliki pozdrav za sve.",
    attribution: "Tea",
    context: "New mum recharge protokol",
    emoji: "❤️",
  },
  {
    quote:
      "Već posle 2. Legacy tretmana vidim razliku u izgledu nogu. Jedva čekam ostale!",
    attribution: "Jelena",
    context: "Venus Legacy · Kick start diet",
    emoji: "🥰",
  },
];

// backwards compat
export const testimonial = testimonials[0];

export const locations = [
  {
    name: "Novi Beograd",
    concept: "Beauty Concept",
    address: "Trešnjinog cveta 1ž",
    phone: brand.phonePrimary,
    hours: "Pon – Pet 9—21h · Sub 9—17h",
    image: images.locationNoviBeograd,
    map: "https://maps.google.com/?q=Tre%C5%A1njinog+cveta+1%C5%BE+Novi+Beograd",
  },
  {
    name: "Belgrade Waterfront",
    concept: "Wellbeing Concept",
    address: "Hercegovačka 17",
    phone: brand.phoneWaterfront,
    hours: "Pon – Pet 9—21h · Sub 9—17h",
    image: images.locationWaterfront,
    map: "https://maps.google.com/?q=Hercegova%C4%8Dka+17+Beograd",
  },
];
