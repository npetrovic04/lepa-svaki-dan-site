// Stock fotografije sa Unsplash CDN. Zamenuti AI-generated ili pravim
// snimcima klinike kad bude dostupno.
function img(id: string, w = 1920) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;
}

export const images = {
  hero: img("1600334089648-b0d9d3028eb2"),
  ctaBg: img("1515377905703-c4788e51af15"),
  portraitDr: img("1644289172092-2de79b425d6f", 1200),
  treatmentProfhilo: img("1570172619644-dfd03ed5d881", 1200),
  treatmentVenus: img("1696841212541-449ca29397cc", 1200),
  treatmentDermapen: img("1487412947147-5cebf100ffc2", 1200),
  treatmentFillers: img("1620733723572-11c53f73a416", 1200),
  verticalFace: img("1576426863848-c21f53c60b19", 1400),
  verticalBody: img("1556228720-195a672e8a03", 1400),
  verticalEsthetic: img("1622618991746-fe6004db3a47", 1400),
  verticalLaser: img("1555820585-c5ae44394b79", 1400),
  verticalProtocols: img("1544843776-7c98a52e08a4", 1400),
  locationNoviBeograd: img("1544161515-4ab6ce6db874", 1400),
  locationWaterfront: img("1639162906614-0603b0ae95fd", 1400),
};

export const brand = {
  name: "Lepa Svaki Dan",
  tagline: "Beauty & Wellbeing Concept",
  manifest:
    "Spajamo savremenu estetsku medicinu sa starim ritualom nege. Bez žurbe, bez šablona — samo plan koji odgovara vašoj koži i vašem ritmu.",
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
    eyebrow: "Bioremodelacija",
    title: "Profhilo",
    description:
      "Hijaluronski bioremodulator koji vraća čvrstinu i sjaj koži bez efekta filera. Rezultat se gradi tokom šest nedelja.",
    result: "Vidljiva tonusna podloga lica i vrata, prirodno blistavilo.",
    sessions: "2 tretmana",
    duration: "30 minuta",
    price: "300 €",
    image: images.treatmentProfhilo,
    location: "beauty" as const,
  },
  {
    eyebrow: "Radiofrekvencija + RF magnet",
    title: "Venus Legacy",
    description:
      "Neinvazivno zatezanje i remodelacija — kombinacija RF energije i pulsnih magnetnih polja koja podstiče sopstveni kolagen.",
    result: "Zategnutiji oval lica i konture tela bez perioda oporavka.",
    sessions: "6 tretmana",
    duration: "45 minuta",
    price: "od 80 €",
    image: images.treatmentVenus,
    location: "both" as const,
  },
  {
    eyebrow: "Mikroubodi za kolagen",
    title: "Dermapen + PRX",
    description:
      "Kontrolisana mikrostimulacija u kombinaciji sa biorevitalizujućim pilingom — najbrži put do glatkije teksture i jednoličnog tona.",
    result: "Suzene pore, smanjeni ožiljci od akni, ravnomerna koža.",
    sessions: "4 tretmana",
    duration: "60 minuta",
    price: "107 €",
    image: images.treatmentDermapen,
    location: "beauty" as const,
  },
  {
    eyebrow: "Estetska medicina",
    title: "Whole Face Approach",
    description:
      "Pregled, plan i kombinacija botoksa, hijaluronskih filera i biostimulatora — vođeno principom diskretnog rezultata.",
    result:
      "Odmoran, prirodan izraz lica — prepoznajete sebe, ali bolju verziju.",
    sessions: "3+1 paket",
    duration: "60 minuta",
    price: "850 €",
    image: images.treatmentFillers,
    location: "beauty" as const,
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

export const testimonial = {
  quote:
    "Posle prvog laser tretmana mogla sam slobodno da kažem — pogled u ogledalo se promenio. Niko ne zna šta sam uradila, a svi primete da nešto sija.",
  attribution: "M. P.",
  context: "Klijent · Glow&Go protokol",
};

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
