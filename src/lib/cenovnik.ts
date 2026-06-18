// Cenovnik — podaci sa lepasvakidan.rs (važeće od 15.03.2026.)
// Izvor: /cenovnik/ (NB) i /beauty-wellbeing-concept/bwf-cenovnik/ (BWF)

export type Location = "nb" | "bw" | "both";

export interface Service {
  name: string;
  description?: string;
  price?: string;        // jedna cena (same za obe lokacije ili single)
  priceNB?: string;      // cena NB (samo za lasersku epilaciju)
  priceBW?: string;      // cena BWF (samo za lasersku epilaciju)
  location: Location;
  highlight?: boolean;   // 💜 akcija
  note?: string;
}

export interface ServiceGroup {
  title: string;
  services: Service[];
}

export interface PricingTab {
  id: string;
  label: string;
  groups: ServiceGroup[];
}

// ─── TAB 1: Tretmani lica ───────────────────────────────────────────────────
const tretmaniLica: PricingTab = {
  id: "lice",
  label: "Tretmani lica",
  groups: [
    {
      title: "Higijenski tretmani",
      services: [
        {
          name: "Higijenski tretman lica 1",
          description: "Klasičan piling, čišćenje, maska",
          price: "51€ / 6.000 rsd",
          location: "both",
        },
        {
          name: "Higijenski tretman + Fitopiling",
          price: "89€ / 10.500 rsd",
          location: "both",
        },
        {
          name: "Higijenski tretman lica 2",
          description: "Hemijski piling, čišćenje, maska",
          price: "68€ / 8.000 rsd",
          location: "both",
        },
        {
          name: "Higijenski tretman + PRX piling",
          price: "98€ / 11.500 rsd",
          location: "both",
        },
        {
          name: "Higijenski tretman lica 2 uz mezoporaciju",
          price: "102€ / 12.000 rsd",
          location: "both",
        },
        {
          name: "Dodatak Crystal Fiber / Egzozomi maska",
          price: "13€ / 1.600 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Biološki tretmani",
      services: [
        {
          name: "Biološki tretman lica 1",
          description: "Piling, masaža, serum/ampula, maska",
          price: "55€ / 6.500 rsd",
          location: "both",
        },
        {
          name: "Biološki tretman lica 2",
          description: "Hemijski piling, mezoporacija, masaža, maska, serum",
          price: "81€ / 9.500 rsd",
          location: "both",
        },
        {
          name: "Biološki tretman lica 2 — lice, vrat i dekolte",
          price: "102€ / 12.000 rsd",
          location: "both",
        },
        {
          name: "Biološki tretman REVIVE & RADIATE",
          description: "Biorevitalizujući hemijski piling, mezoporacija, masaža, maska",
          price: "102€ / 12.000 rsd",
          location: "both",
        },
        {
          name: "REVIVE & RADIATE — lice, vrat i dekolte",
          price: "127€ / 15.000 rsd",
          location: "both",
        },
        {
          name: "SKIN DETOX",
          description: "Venus Glow / Dermafacial dubinsko čišćenje, piling, komedoekspresija, maska",
          price: "81€ / 9.500 rsd",
          location: "both",
        },
        {
          name: "REHYDRATE",
          description: "Venus Glow/Dermafacial, biorevitalizujući piling, hijaluron mezoporacija, maska",
          price: "85€ / 10.000 rsd",
          location: "both",
        },
        {
          name: "BE AN ICON",
          description: "Piling lica, masaža lica, ramena, ruku i šaka, specijalna maska",
          price: "102€ / 12.000 rsd",
          location: "both",
        },
        {
          name: "CINDERELLA GLOW",
          description: "Face Gym masaža, hemijski piling, glow maska",
          price: "77€ / 9.000 rsd",
          location: "both",
        },
        {
          name: "SENSI SKIN — za osetljivu kožu",
          description: "Protokol za osetljivu kožu i onkološke pacijente",
          price: "68€ / 8.000 rsd",
          location: "both",
        },
        {
          name: "READY TO GLOW",
          description: "Venus Glow, drenažna masaža, Myolift, presoterapija",
          price: "85€ / 10.000 rsd",
          highlight: true,
          location: "nb",
        },
      ],
    },
    {
      title: "Venus Glow / Dermafacial",
      services: [
        {
          name: "VENUS GLOW — Squeaky Clean",
          description: "Dubinsko čišćenje pora, piling, maska i nega",
          price: "40€ / 4.700 rsd",
          location: "nb",
        },
        {
          name: "VENUS GLOW uz tretman",
          price: "30€ / 3.500 rsd",
          location: "nb",
        },
        {
          name: "FRESH UP",
          description: "Venus Glow čišćenje i fresh up protokol nege",
          price: "55€ / 6.500 rsd",
          location: "nb",
        },
        {
          name: "DERMAFACIAL — ceo protokol",
          description: "Dubinsko čišćenje, mikrodermoabrazija, Myolift, RF, ultrazvuk",
          price: "141€ / 16.500 rsd",
          location: "bw",
        },
        {
          name: "DERMAFACIAL LUX Skin Detox",
          description: "Dermafacial + hemijski piling + Crystal Fiber/Egzozomi maska",
          price: "106€ / 12.500 rsd",
          location: "bw",
        },
      ],
    },
    {
      title: "Hemijski pilinzi",
      services: [
        {
          name: "Hemijski piling I",
          price: "51€ / 6.000 rsd",
          location: "both",
        },
        {
          name: "Hemijski piling II — biorevitalizujući",
          price: "68€ / 8.000 rsd",
          location: "both",
        },
        {
          name: "Paket 4× Hemijska pilinga I",
          price: "175€ / 20.500 rsd",
          location: "both",
        },
        {
          name: "Fitopiling lica",
          description: "Uz masku i negu",
          price: "55€ / 6.500 rsd",
          location: "both",
        },
        {
          name: "Paket 4× Fitopiling",
          price: "188€ / 22.000 rsd",
          location: "both",
        },
        {
          name: "PRX biorevitalizujući hemijski piling",
          price: "68€ / 8.000 rsd",
          location: "both",
        },
        {
          name: "PRX paket 4× tretmana",
          price: "239€ / 28.000 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "PRX + Dermapen",
          price: "107€ / 12.500 rsd",
          location: "both",
        },
        {
          name: "Retinol tretman",
          price: "68€ / 8.000 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Mezoporacija",
      services: [
        {
          name: "Mezoporacija — osnovna nega",
          description: "Hemijski piling, mezoporacija, maska",
          price: "67€ / 7.800 rsd",
          location: "both",
        },
        {
          name: "Biorevitalizujuća mezoporacija",
          description: "Biorevitalizujući hemijski piling, mezoporacija, maska",
          price: "81€ / 9.500 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Dermapen",
      services: [
        {
          name: "Dermapen tretman lica",
          description: "Mikroubodi za obnovu kolagena — tekstura, pore, anti-aging",
          price: "68€ / 8.000 rsd",
          location: "nb",
        },
        {
          name: "Paket 4× Dermapen tretmana",
          price: "240€ / 28.000 rsd",
          location: "nb",
        },
        {
          name: "Dermapen anti-aging — lice, vrat, dekolte",
          price: "124€ / 14.500 rsd",
          location: "nb",
        },
        {
          name: "DERMAWORLD Dermapen — tekstura i hidratacija",
          price: "102€ / 12.000 rsd",
          location: "bw",
        },
        {
          name: "DERMAWORLD Dermapen anti-aging — lice, vrat, dekolte",
          price: "188€ / 22.000 rsd",
          location: "bw",
        },
        {
          name: "Paket 4× DERMAWORLD Dermapen",
          price: "338€ / 39.500 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "NO FILTER NEEDED",
          description: "Biorevitalizujući hemijski piling, nano Dermapen, maska sa egzozomima",
          price: "107€ / 12.500 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Venus Legacy lice",
      services: [
        {
          name: "Predeo oko očiju, podočnjaci",
          price: "17€ / 2.000 rsd",
          location: "both",
        },
        {
          name: "Gornja trećina lica — čelo i oko očiju",
          price: "35€ / 4.100 rsd",
          location: "both",
        },
        {
          name: "Donja trećina lica i podbradak",
          price: "50€ / 5.800 rsd",
          location: "both",
        },
        {
          name: "Celo lice i podbradak",
          price: "80€ / 9.400 rsd",
          location: "both",
        },
        {
          name: "Celo lice i vrat",
          price: "100€ / 11.700 rsd",
          location: "both",
        },
        {
          name: "Celo lice, vrat i dekolte",
          price: "120€ / 14.100 rsd",
          location: "both",
        },
        {
          name: "Paket 6× tretmana — celo lice i podbradak",
          price: "450€ / 52.500 rsd",
          highlight: true,
          location: "both",
        },
      ],
    },
    {
      title: "Myolift i masaže lica",
      services: [
        {
          name: "MYOLIFT tretman",
          description: "Drenaža, cirkulacija, trening mišića lica, maska",
          price: "72€ / 8.500 rsd",
          location: "nb",
        },
        {
          name: "MYOLIFT paket 6× tretmana",
          price: "400€ / 46.800 rsd",
          location: "nb",
        },
        {
          name: "FACE GYM masaža lica",
          price: "55€ / 6.500 rsd",
          location: "both",
        },
        {
          name: "FACE GYM LUX",
          description: "Face Gym masaža, piling, maska i nega + presoterapija",
          price: "77€ / 9.000 rsd",
          location: "both",
        },
        {
          name: "Face Gym paket 4× masaže",
          price: "192€ / 22.500 rsd",
          location: "both",
        },
        {
          name: "REMODELING masaža — buccal",
          price: "107€ / 12.500 rsd",
          location: "both",
        },
        {
          name: "WIDE AWAKE protokol — predeo oko očiju",
          description: "Eye Zone Classic + Venus Legacy/Myolift",
          price: "72€ / 8.500 rsd",
          location: "both",
        },
        {
          name: "WIDE AWAKE protokol 4× tretmana",
          price: "247€ / 29.000 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "EYE ZONE Classic",
          description: "Tretman predela oko očiju — drenaža, masaža, maska",
          price: "60€ / 7.000 rsd",
          location: "both",
        },
        {
          name: "VENUS LIFT & GLOW",
          description: "Energy masaža, Venus Legacy, Myolift mikrostruje, piling, maska",
          price: "115€ / 13.500 rsd",
          location: "bw",
        },
        {
          name: "VENUS LIFT & GLOW protokol 6×",
          price: "555€ / 65.000 rsd",
          highlight: true,
          location: "bw",
        },
      ],
    },
  ],
};

// ─── TAB 2: Tretmani tela ───────────────────────────────────────────────────
const tretmaniTela: PricingTab = {
  id: "telo",
  label: "Tretmani tela",
  groups: [
    {
      title: "Venus Legacy telo",
      services: [
        {
          name: "Ruke",
          price: "50€ / 5.800 rsd",
          location: "both",
        },
        {
          name: "Stomak ili zadnjica",
          price: "75€ / 8.800 rsd",
          location: "both",
        },
        {
          name: "Butine",
          price: "85€ / 9.900 rsd",
          location: "both",
        },
        {
          name: "Butine i zadnjica",
          price: "100€ / 11.700 rsd",
          location: "both",
        },
        {
          name: "Listovi",
          price: "50€ / 5.800 rsd",
          location: "both",
        },
        {
          name: "Cele noge i zadnjica",
          price: "150€ / 17.600 rsd",
          location: "both",
        },
        {
          name: "Cele noge, zadnjica i stomak",
          price: "200€ / 23.500 rsd",
          location: "both",
        },
        {
          name: "Celo telo",
          price: "210€ / 24.600 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Presoterapija ProBallancer",
      services: [
        {
          name: "ProBallancer — 1 tretman",
          price: "30€ / 3.500 rsd",
          location: "both",
        },
        {
          name: "ProBallancer uz tretman (2u1)",
          price: "20€ / 2.300 rsd",
          location: "both",
        },
        {
          name: "ProBallancer paket 5×",
          price: "125€ / 14.700 rsd",
          location: "both",
        },
        {
          name: "ProBallancer paket 10×",
          price: "200€ / 23.500 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "10 DAYS BODY MIRACLE",
          description: "Piling, drenažni krem, presoterapija, mini Face Gym + 3 dodatne presoterapije",
          price: "227€ / 26.500 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Masaže",
      services: [
        {
          name: "Masaža tela 60 min — Relax / Antistress / Terapeutska",
          price: "42€ / 4.900 rsd",
          location: "both",
        },
        {
          name: "Parcijalna masaža 30 min",
          description: "Leđa / noge / vrat, ramena, glava",
          price: "30€ / 3.500 rsd",
          location: "both",
        },
        {
          name: "Antistress 30",
          description: "Presoterapija + masaža gornjeg dela",
          price: "40€ / 4.500 rsd",
          location: "both",
        },
        {
          name: "Tailor Made 60 min",
          description: "Individualno kreirana masaža",
          price: "51€ / 6.000 rsd",
          location: "both",
        },
        {
          name: "Anticelulit masaža I — butine i stomak",
          price: "34€ / 4.000 rsd",
          location: "nb",
        },
        {
          name: "Anticelulit masaža II — celo telo",
          price: "51€ / 6.000 rsd",
          location: "nb",
        },
      ],
    },
    {
      title: "AWT — Anticelulit i preoblikovanje",
      services: [
        {
          name: "Pojedinačni tretman — manja regija",
          description: "Ruke, prednji deo stomaka, zadnjica",
          price: "47€ / 5.500 rsd",
          location: "bw",
        },
        {
          name: "Pojedinačni tretman — veća regija",
          description: "Butine i zadnjica, stomak i donji deo leđa",
          price: "72€ / 8.500 rsd",
          location: "bw",
        },
        {
          name: "Paket 7× tretmana — 15% popusta",
          price: "na upit",
          location: "bw",
        },
        {
          name: "Paket 10× tretmana — 20% popusta",
          price: "na upit",
          highlight: true,
          location: "bw",
        },
      ],
    },
    {
      title: "MedContour — Smanjenje masnih naslaga",
      services: [
        {
          name: "Ruke",
          price: "72€ / 8.500 rsd",
          location: "bw",
        },
        {
          name: "Stomak",
          price: "128€ / 15.000 rsd",
          location: "bw",
        },
        {
          name: "Butine i zadnjica",
          price: "166€ / 19.500 rsd",
          location: "bw",
        },
        {
          name: "Cele noge i guza",
          price: "213€ / 25.000 rsd",
          location: "bw",
        },
        {
          name: "Celo telo",
          price: "341€ / 40.000 rsd",
          location: "bw",
        },
        {
          name: "Paket 5+ tretmana — 15% popusta",
          price: "na upit",
          highlight: true,
          location: "bw",
        },
      ],
    },
    {
      title: "Tretmani za ciljanu negu",
      services: [
        {
          name: "KICK START DIET",
          description: "Suvo četkanje, pakovanje, limfna drenaža, presoterapija",
          price: "77€ / 9.000 rsd",
          location: "nb",
        },
        {
          name: "SILKY SMOOTH",
          description: "Nega kože — piling, pakovanje, mini masaža",
          price: "72€ / 8.500 rsd",
          location: "both",
        },
        {
          name: "LOSE GOOSE — tretman guščije kože",
          price: "34€ / 4.000 rsd",
          location: "nb",
        },
        {
          name: "FALL IN RELAXATION",
          description: "Piling, zlatno pakovanje, masaža tela i lica",
          price: "81€ / 9.500 rsd",
          location: "both",
        },
        {
          name: "LEPA SVAKI DAN protokol",
          description: "Hemijski piling tela, pakovanje, masaža, Venus Glow/Dermafacial lica",
          price: "105-106€ / 12.500 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "I CAN BUY MYSELF FLOWERS",
          description: "Piling i pakovanje tela, hemijski piling lica, masaža lica i tela",
          price: "90€ / 10.500 rsd",
          location: "both",
        },
        {
          name: "REBORN",
          description: "Venus Glow/Dermafacial, Fresh Up nega, presoterapija i masaža",
          price: "84€ / 9.800 rsd",
          location: "both",
        },
      ],
    },
  ],
};

// ─── TAB 3: Estetske procedure ──────────────────────────────────────────────
const estetskeProcedure: PricingTab = {
  id: "estetske",
  label: "Estetske procedure",
  groups: [
    {
      title: "Pregled i konsultacije",
      services: [
        {
          name: "Pregled i konsultacije",
          price: "30€ / 3.500 rsd",
          location: "both",
        },
        {
          name: "Specijalistički pregled dr Tamara Vujačić",
          price: "47€ / 5.500 rsd",
          location: "nb",
        },
      ],
    },
    {
      title: "Hijaluronski fileri",
      services: [
        {
          name: "Hijaluron 1ml",
          price: "240€ / 28.200 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Hijaluron 0.55ml — usne",
          price: "140€ / 16.400 rsd",
          location: "both",
        },
        {
          name: "Hijaluron 1ml — dr spec. Vujačić",
          price: "300€ / 35.300 rsd",
          location: "nb",
        },
        {
          name: "Hijaluronidaza — topljenje filera",
          price: "100€ / 11.700 rsd",
          location: "both",
        },
        {
          name: "WHOLE FACE APPROACH 3+1",
          description: "3ml filera + Botox ili 4ml filera",
          price: "850€ / 99.600 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "FRESH UP paket 2+1",
          description: "2ml filera + Botox ili 3ml filera",
          price: "650€ / 76.100 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Botox + Profhilo / Jalupro / LOLA / Ejal",
          price: "450€ / 53.000 rsd",
          highlight: true,
          location: "both",
        },
      ],
    },
    {
      title: "Botox tretman",
      services: [
        {
          name: "Korekcija bora — lice ili vrat I",
          price: "240€ / 28.200 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Korekcija bora — lice ili vrat II",
          price: "270€ / 31.500 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Korekcija bora — Full Face",
          price: "400€ / 35.300 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "LIP FLIP / Gummy smile Botox",
          price: "100€ / 11.700 rsd",
          location: "both",
        },
        {
          name: "Botox lice + vrat",
          price: "450€ / 53.000 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Hiperhidroza — pazuh",
          price: "400€ / 46.600 rsd",
          highlight: true,
          location: "both",
        },
      ],
    },
    {
      title: "Biorevitalizacija i skinbosteri",
      services: [
        {
          name: "Biorevitalizacija lica — Jalupro",
          price: "150€ / 17.600 rsd",
          location: "both",
        },
        {
          name: "Biorevitalizacija lice i vrat — Jalupro",
          price: "250€ / 29.300 rsd",
          location: "both",
        },
        {
          name: "PROFHILO bioremodulacija lica",
          price: "300€ / 35.300 rsd",
          location: "both",
        },
        {
          name: "PROFHILO paket 2× tretmana",
          price: "500€ / 58.600 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "PROFHILO BODY",
          price: "350€ / 41.000 rsd",
          location: "both",
        },
        {
          name: "Jalupro SuperHydro",
          price: "300€ / 35.300 rsd",
          location: "both",
        },
        {
          name: "LOLA biorevitalizacija",
          price: "250€ / 29.300 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Ejal skinbooster",
          price: "226€ / 26.500 rsd",
          location: "both",
        },
        {
          name: "HArmoniCA kolagen stimulator",
          price: "350€ / 41.000 rsd",
          location: "both",
        },
        {
          name: "Aesplla kolagen stimulator",
          price: "500€ / 58.600 rsd",
          location: "both",
        },
        {
          name: "Radiesse kolagen stimulator",
          price: "350€ / 41.000 rsd",
          location: "bw",
        },
        {
          name: "Egzozomi za lice",
          price: "300€ / 35.300 rsd",
          location: "bw",
        },
        {
          name: "Cellular Matrix (PRP + neukršteni hijaluron)",
          price: "280€ / 32.700 rsd",
          location: "bw",
        },
        {
          name: "PRP lice ili telo po regiji",
          price: "250€ / 29.300 rsd",
          location: "both",
        },
        {
          name: "PRP paket 3× tretmana",
          price: "680€ / 79.500 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Mezoterapija lica",
          price: "100€ / 11.700 rsd",
          location: "both",
        },
        {
          name: "Mezoterapija — lice, vrat i dekolte",
          price: "180€ / 21.100 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Lifting niti i mezoniti",
      services: [
        {
          name: "Aptos niti — podizanje i konturisanje lica (par niti)",
          price: "300€ / 35.300 rsd",
          location: "both",
        },
        {
          name: "Plazmalifting — celo lice ili kosa (mezoniti + PRP)",
          price: "400–500€ / 46.600–58.600 rsd",
          location: "both",
        },
        {
          name: "Mezoniti po regiji — lice ili kosa",
          price: "250€ / 29.300 rsd",
          location: "both",
        },
        {
          name: "Mezoterapija celulita — 1 tretman",
          price: "200€ / 23.500 rsd",
          location: "both",
        },
        {
          name: "Mezoterapija celulita — paket 6×",
          price: "1.000€ / 117.800 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "Lipoliza / Lemon Bottle — 10ml",
          price: "100€ / 11.700 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Dermatologija — samo BWF",
      services: [
        {
          name: "Specijalistički dermatološki pregled dr Krstić",
          price: "51€ / 6.000 rsd",
          location: "bw",
        },
        {
          name: "Specijalistički pregled sa dermoskopijom mladeža",
          price: "77€ / 8.000 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "Candela Nordlys — Rozacea, celo lice",
          price: "166€ / 19.500 rsd",
          location: "bw",
        },
        {
          name: "Candela Nordlys — Fotorejuvenacija lica",
          price: "286€ / 33.500 rsd",
          location: "bw",
        },
        {
          name: "Candela Nordlys — Fotorejuvenacija lica, vrata i dekoltea",
          price: "427€ / 50.000 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "Candela Nordlys — Tretman akni na licu",
          price: "77€ / 9.000 rsd",
          location: "bw",
        },
        {
          name: "Candela Nordlys Frax — Ožiljci od akni, celo lice",
          price: "299€ / 35.000 rsd",
          location: "bw",
        },
        {
          name: "Candela MatrixPro Sublime — Celo lice",
          price: "166€ / 19.500 rsd",
          location: "bw",
        },
        {
          name: "Candela MatrixPro Sublime — Protokol 5×",
          price: "706€ / 82.800 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "Candela MatrixPro Sublative — Celo lice",
          price: "263€ / 30.700 rsd",
          location: "bw",
        },
        {
          name: "Radiotalasno uklanjanje promena — lice (do 10)",
          price: "85€ / 10.000 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "Radiotalasno uklanjanje promena — telo (po regiji)",
          price: "51€ / 6.000 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "ND:YAG — Lečenje gljivica nokatnih ploča",
          price: "77€ / 9.000 rsd",
          location: "bw",
        },
        {
          name: "Uklanjanje proširenih kapilara na licu (jedna promena)",
          price: "81€ / 9.500 rsd",
          location: "bw",
        },
      ],
    },
    {
      title: "Infuziona suplementacija — samo BWF",
      services: [
        {
          name: "Hydromix / Hangover Detox",
          description: "Hidratacija i detoks",
          price: "85€ / 10.000 rsd",
          location: "bw",
        },
        {
          name: "Imuno Boost",
          description: "Jačanje imuniteta",
          price: "106€ / 12.500 rsd",
          location: "bw",
        },
        {
          name: "Jet Lag / Energy Boost",
          description: "Oporavak i vraćanje energije",
          price: "85€ / 10.000 rsd",
          location: "bw",
        },
        {
          name: "Beauty Glow Up",
          description: "Hidratacija i nega iznutra",
          price: "85€ / 10.000 rsd",
          location: "bw",
        },
      ],
    },
    {
      title: "Rast kose — samo BWF",
      services: [
        {
          name: "Egzozomi za rast kose — 1 tretman",
          price: "350€ / 41.000 rsd",
          location: "bw",
        },
        {
          name: "Egzozomi za rast kose — ceo protokol",
          price: "1.450€ / 170.000 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "PRP tretman kose",
          price: "250€ / 29.300 rsd",
          location: "bw",
        },
        {
          name: "PRP paket 3× tretmana — kosa",
          price: "680€ / 79.500 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "Mezoterapija kose — 1 tretman",
          price: "100€ / 11.700 rsd",
          location: "bw",
        },
        {
          name: "Mezoterapija kose — paket 3×",
          price: "255€ / 29.900 rsd",
          location: "bw",
        },
      ],
    },
  ],
};

// ─── TAB 4: Naši protokoli ──────────────────────────────────────────────────
const nasiProtokoli: PricingTab = {
  id: "protokoli",
  label: "Naši protokoli",
  groups: [
    {
      title: "GLOW & GO",
      services: [
        {
          name: "GLOW & GO 1",
          description: "Venus Glow čišćenje, energy masaža, piling, maska, ampula",
          price: "68€ / 8.000 rsd",
          location: "both",
        },
        {
          name: "GLOW & GO 1 — produženi protokol 4 nedelje",
          price: "230€ / 27.000 rsd",
          location: "both",
        },
        {
          name: "GLOW & GO 2",
          description: "Venus Glow, piling, mezoporacija, masaža lica, maska",
          price: "89€ / 10.500 rsd",
          location: "both",
        },
        {
          name: "GLOW & GO 2 — produženi protokol 4 nedelje",
          price: "303€ / 35.500 rsd",
          location: "both",
        },
        {
          name: "GLOW & GO 3",
          description: "Venus Glow, Venus tretman, piling, mezoporacija, nega",
          price: "140€ / 16.500 rsd",
          location: "both",
        },
        {
          name: "GLOW & GO 3 — produženi protokol 6 nedelja",
          description: "Uz GRATIS presoterapiju uz svaki tretman",
          price: "640€ / 75.000 rsd",
          highlight: true,
          location: "both",
        },
      ],
    },
    {
      title: "Anti-aging protokoli",
      services: [
        {
          name: "FIT IN 50's, 60's, 70's",
          description: "Energy masaža, Myolift / Venus Legacy lica i vrata, biorevitalizujući piling, maska",
          price: "134-158€ / 15.700-18.500 rsd",
          location: "both",
        },
        {
          name: "PAKET FIT IN 50's, 60's, 70's — 6 tretmana",
          price: "811€ / 95.000 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "PLUMP IT UP",
          description: "Nano Dermapen, Myolift usana, tretman okoloočne regije, Gua Sha masaža",
          price: "68€ / 8.000 rsd",
          location: "nb",
        },
        {
          name: "SPOT STOP — Antiblemish protokol",
          price: "65€ / 7.600 rsd",
          location: "nb",
        },
        {
          name: "SCULPT & SHINE",
          description: "Face Gym masaža, Sublime laser za zatezanje, hemijski piling, maska",
          price: "300€ / 35.000 rsd",
          highlight: true,
          location: "bw",
        },
        {
          name: "INSTANT GLOW UP",
          description: "Sublime laser + PROFHILO ili LOLA",
          price: "385€ / 45.000 rsd",
          highlight: true,
          location: "bw",
        },
      ],
    },
    {
      title: "Posebna stanja i prilike",
      services: [
        {
          name: "BABY GLOW — za trudnice",
          description: "Dermafacial / Venus Glow, energy masaža, poseban piling za trudnice",
          price: "72€ / 8.500 rsd",
          location: "both",
        },
        {
          name: "NEW MUM RECHARGE",
          description: "Presoterapija + Dermafacial / Venus Glow + masaža lica, vrata i dekoltea",
          price: "85€ / 10.000 rsd",
          location: "both",
        },
        {
          name: "WEDDING READY",
          description: "Venus Legacy čitavog tela, Fresh Up tretman lica, limfna drenaža, Myolift masaža",
          price: "255€ / 30.000 rsd",
          location: "both",
        },
        {
          name: "WEDDING READY — paket za 2 osobe",
          price: "428€ / 50.000 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "LIFT ME UP",
          description: "Presoterapija, piling lica, energy masaža, Gua Sha i Thera Gun",
          price: "81€ / 9.500 rsd",
          location: "both",
        },
      ],
    },
    {
      title: "Summer Body Ready protokoli",
      services: [
        {
          name: "STOMAK",
          description: "Masaža, Venus Legacy, boosteri",
          price: "364€ / 42.600 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "RUKE",
          price: "240€ / 28.200 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "BUTINE I ZADNJICA",
          price: "480€ / 56.200 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "BUTINE, STOMAK i ZADNJICA",
          price: "720€ / 84.500 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "CELE NOGE I ZADNJICA",
          price: "680€ / 79.600 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "CELE NOGE, ZADNJICA I STOMAK",
          price: "800€ / 94.400 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "CELO TELO",
          description: "Venus Legacy tela, boosteri + 6× presoterapija",
          price: "885€ / 103.700 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "QUICK FIX — Butine i zadnjica",
          description: "3× Venus Legacy, presoterapija i 6× dodatna presoterapija",
          price: "385€ / 45.000 rsd",
          highlight: true,
          location: "both",
        },
        {
          name: "QUICK FIX — Stomak, zadnjica i butine",
          price: "510€ / 60.000 rsd",
          highlight: true,
          location: "both",
        },
      ],
    },
  ],
};

// ─── TAB 5: Laserska epilacija ──────────────────────────────────────────────
// Dual-pricing — NB vs BWF
export interface LaserService {
  name: string;
  priceNB: string;
  priceBW: string;
  note?: string;
  highlight?: boolean;
}

export interface LaserGroup {
  title: string;
  services: LaserService[];
}

export const laserGroups: LaserGroup[] = [
  {
    title: "Paketi — celo telo",
    services: [
      {
        name: "Celo telo — 1 tretman",
        priceNB: "166€ / 19.400 rsd",
        priceBW: "427€ / 50.000 rsd",
      },
      {
        name: "Celo telo — 6+1 (NB) / 3 tretmana (BWF)",
        priceNB: "1.000€ / 118.000 rsd",
        priceBW: "1.088€ / 127.500 rsd",
        highlight: true,
      },
      {
        name: "Celo telo — 6 tretmana (BWF)",
        priceNB: "—",
        priceBW: "2.050€ / 240.000 rsd",
        highlight: true,
      },
      {
        name: "Essentials (potkolenice, intima, pazuh, nausnice) — 1",
        priceNB: "117€ / 13.700 rsd",
        priceBW: "—",
      },
      {
        name: "Essentials — 6+1",
        priceNB: "700€ / 82.000 rsd",
        priceBW: "—",
        highlight: true,
      },
    ],
  },
  {
    title: "Lice",
    services: [
      {
        name: "Nausnice",
        priceNB: "16€ / 1.800 rsd",
        priceBW: "20€ / 2.400 rsd",
      },
      {
        name: "Brada",
        priceNB: "24–40€ / 2.800–4.700 rsd",
        priceBW: "41€ / 4.800 rsd",
      },
      {
        name: "Podbradak",
        priceNB: "24–40€ / 2.800–4.700 rsd",
        priceBW: "48€ / 5.600 rsd",
      },
      {
        name: "Nausnice, brada i podbradak",
        priceNB: "—",
        priceBW: "90€ / 10.500 rsd",
      },
      {
        name: "Celo lice",
        priceNB: "40–56€ / 4.700–6.500 rsd",
        priceBW: "100€ / 11.700 rsd",
      },
      {
        name: "Zulufi sa obrazima",
        priceNB: "24–32€ / 2.800–3.700 rsd",
        priceBW: "20€ / 2.400 rsd",
      },
    ],
  },
  {
    title: "Telo — gornji deo",
    services: [
      {
        name: "Pazuh",
        priceNB: "40€ / 4.700 rsd",
        priceBW: "60€ / 7.000 rsd",
      },
      {
        name: "Stomak",
        priceNB: "32–40€ / 3.700–4.600 rsd",
        priceBW: "68€ / 8.000 rsd",
      },
      {
        name: "Linija stomaka",
        priceNB: "16€ / 1.800 rsd",
        priceBW: "20€ / 2.400 rsd",
      },
      {
        name: "Ruke i šake",
        priceNB: "72€ / 8.400 rsd",
        priceBW: "89€ / 10.500 rsd",
      },
      {
        name: "Pola ruku i šake",
        priceNB: "56€ / 6.500 rsd",
        priceBW: "66€ / 7.800 rsd",
      },
    ],
  },
  {
    title: "Telo — donji deo",
    services: [
      {
        name: "Prepone",
        priceNB: "72–96€ / 8.400–11.200 rsd",
        priceBW: "60€ / 7.000 rsd",
      },
      {
        name: "Intima i perianalna regija",
        priceNB: "100€ / 11.700 rsd",
        priceBW: "102€ / 12.000 rsd",
      },
      {
        name: "Natkolenice sa kolenima",
        priceNB: "96€ / 11.200 rsd",
        priceBW: "132€ / 15.500 rsd",
      },
      {
        name: "Potkolenice sa kolenima",
        priceNB: "81€ / 9.500 rsd",
        priceBW: "119€ / 14.000 rsd",
      },
      {
        name: "Cele noge, ris i prsti",
        priceNB: "128€ / 15.000 rsd",
        priceBW: "200€ / 23.500 rsd",
      },
      {
        name: "Cele noge i intima",
        priceNB: "144€ / 16.800 rsd",
        priceBW: "—",
      },
      {
        name: "Zadnjica",
        priceNB: "40€ / 4.700 rsd",
        priceBW: "—",
      },
    ],
  },
  {
    title: "Kombinacije",
    services: [
      {
        name: "Intima + pazuh",
        priceNB: "107€ / 12.500 rsd",
        priceBW: "136€ / 16.000 rsd",
      },
      {
        name: "Pazuh + potkolenice",
        priceNB: "107€ / 12.500 rsd",
        priceBW: "149€ / 17.500 rsd",
      },
      {
        name: "Potkolenice + intima",
        priceNB: "153€ / 18.000 rsd",
        priceBW: "—",
      },
      {
        name: "Intima + pazuh + potkolenice + nausnice",
        priceNB: "—",
        priceBW: "226€ / 26.500 rsd",
      },
      {
        name: "Prepone i noge",
        priceNB: "—",
        priceBW: "230€ / 27.000 rsd",
      },
    ],
  },
];

// ─── Sve tabove ─────────────────────────────────────────────────────────────
export const pricingTabs: PricingTab[] = [
  tretmaniLica,
  tretmaniTela,
  estetskeProcedure,
  nasiProtokoli,
];
