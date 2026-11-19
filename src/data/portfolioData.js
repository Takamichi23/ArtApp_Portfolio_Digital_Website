import { PART1_SLIDES } from "./parts/part1Data.js";
import { PART2_SLIDES } from "./parts/part2Data.js";
import { PART3_SLIDES } from "./parts/part3Data.js";
import { PART4_SLIDES } from "./parts/part4Data.js";
import { PART5_SLIDES } from "./parts/part5Data.js";

export const CHANNELS = [
  {
    id: "home",
    navLabel: "HOME",
    osdCode: "CH-00",
    osdTitle: "PORTFOLIO 2026 // COVER",
    color: "#9e0b0f",
    textColor: "#ffffff",
  },
  {
    id: "toc",
    navLabel: "TOC",
    osdCode: "GUIDE",
    osdTitle: "TABLE OF CONTENTS & INTRO",
    color: "#334155",
    textColor: "#ffffff",
  },
  {
    id: "part1",
    navLabel: "PT. 1",
    shortTitle: "understanding art",
    fullTitle: "Part 1: Understanding Art",
    osdCode: "CH-01",
    osdTitle: "PART 1 // UNDERSTANDING ART",
    color: "#f4e541",
    textColor: "#1f1d0d",
    slideRange: "Slides 01–06",
    description:
      "Definitions, perspectives, nature & assumptions, functions & philosophies, subject vs. content, elements, principles & Rule of Thirds.",
  },
  {
    id: "part2",
    navLabel: "PT. 2",
    shortTitle: "western art",
    fullTitle: "Part 2: Western Art Traditions",
    osdCode: "CH-02",
    osdTitle: "PART 2 // WESTERN ART TRADITIONS",
    color: "#728955",
    textColor: "#ffffff",
    slideRange: "Slides 07–12",
    description:
      "Classical Antiquity through Medieval, Renaissance, Baroque, Neoclassicism, Romanticism, Realism, Impressionism & Modernism.",
  },
  {
    id: "part3",
    navLabel: "PT. 3",
    shortTitle: "asian & ph art",
    fullTitle: "Part 3: Asian and Philippine Art",
    osdCode: "CH-03",
    osdTitle: "PART 3 // ASIAN & PHILIPPINE ART",
    color: "#eb679d",
    textColor: "#ffffff",
    slideRange: "Slides 13–18",
    description:
      "Chinese, Japanese & Indian art traditions, comparative analysis, Philippine indigenous crafts, GAMABA masters & Asian influences.",
  },
  {
    id: "part4",
    navLabel: "PT. 4",
    shortTitle: "bikolano heritage",
    fullTitle: "Part 4: Philippine & Bikolano Heritage",
    osdCode: "CH-04",
    osdTitle: "PART 4 // BIKOLANO CULTURAL HERITAGE",
    color: "#7c0a0a",
    textColor: "#ffffff",
    slideRange: "Slides 19–25",
    description:
      "Visual, literary, performing & applied arts of the Philippines and Bicol—Pancho Piano, Ibalong, Pantomina, Abaca, landmarks & RA 10066.",
  },
  {
    id: "part5",
    navLabel: "PT. 5",
    shortTitle: "contemporary art",
    fullTitle: "Part 5: Contemporary Art & Innovation",
    osdCode: "CH-05",
    osdTitle: "PART 5 // CONTEMPORARY & INNOVATION",
    color: "#285884",
    textColor: "#ffffff",
    slideRange: "Slides 26–30",
    description:
      "Contemporary forms, Indigenous/Christian/Muslim/Okir roots, appropriation, improvisation, 8-stage workflow, 4-step critique & social change.",
  },
  {
    id: "references",
    navLabel: "REFS",
    osdCode: "CH-98",
    osdTitle: "REFERENCES & AI DISCLOSURE",
    color: "#475569",
    textColor: "#ffffff",
  },
  {
    id: "about",
    navLabel: "ABOUT US",
    osdCode: "CH-99",
    osdTitle: "GROUP 3 // 10 MEMBERS",
    color: "#9e0b0f",
    textColor: "#ffffff",
  },
];

export const PART_CHANNELS = CHANNELS.filter((c) => c.id.startsWith("part"));

export const ALL_SLIDES = [
  ...PART1_SLIDES,
  ...PART2_SLIDES,
  ...PART3_SLIDES,
  ...PART4_SLIDES,
  ...PART5_SLIDES,
];

export const PORTFOLIO_INTRO = {
  heading: "Curatorial Introduction",
  lead: "Welcome to Group 3's Digital Art Appreciation Portfolio—tuned like a vintage archival broadcast spanning centuries of human imagination.",
  paragraphs: [
    "Throughout this semester, we discovered that art is far more than framed objects behind museum glass. Art is a living human language: a philosophical question in Athens, an ink mist rising over Song Dynasty peaks, a T'boli dream woven into abaca, a Bikolano dove dance courting in Sorsogon, and a contemporary mural challenging social complacency.",
    "Structured across five clearly labeled parts (30 curated content slides, excluding this preface and our APA references), this interactive digital portfolio integrates foundational aesthetic theory, Western art movements, Asian and indigenous Philippine traditions, our cherished Bikolano cultural heritage, and contemporary artistic innovation.",
  ],
  howToUse: [
    "Click any top CRT navigation tab or colored tape label to tune channels with an authentic retro blue-screen transition.",
    "Use the Previous / Next channel controls or your keyboard Left/Right arrow keys to browse all 30 content slides sequentially.",
    "Click any artwork image to open the full-resolution museum lightbox with artist, medium, and source attribution.",
    "Explore interactive modules inside key slides—including Subject vs. Content cards, Elements Explorer, Rule of Thirds overlay, and the 4-Step Art Critique.",
  ],
};
