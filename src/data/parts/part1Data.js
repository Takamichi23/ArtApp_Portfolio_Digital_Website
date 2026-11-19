export const PART1_SLIDES = [
  {
    id: "p1-s1",
    partId: "part1",
    slideNumber: 1,
    kicker: "PART 1 · UNDERSTANDING ART",
    title: "Defining Art Across Philosophical Perspectives",
    subtitle: "From classical mimesis to contemporary cultural discourse",
    summary:
      "Art is the deliberate, creative expression of human thought, emotion, imagination, and lived experience across painting, sculpture, architecture, music, dance, literature, film, and digital media (adapted from Dewey, 1934; Tolstoy, 1897). Across history, thinkers have reframed what makes an artwork meaningful.",
    sections: [
      {
        badge: "Classical",
        heading: "Imitation & Truth (Plato & Aristotle)",
        body: "Plato viewed art as mimesis—an imitation of physical reality—focusing on craft and harmony. Aristotle expanded this view, arguing that art imitates life to uncover universal human truths and moral insight.",
      },
      {
        badge: "Expressive",
        heading: "Emotional Communication (Leo Tolstoy)",
        body: "Tolstoy proposed that authentic art transmits sincere human emotion from artist to audience, forging empathy through shared feeling rather than mere technical copying.",
      },
      {
        badge: "Experiential",
        heading: "Art as Lived Encounter (John Dewey)",
        body: "Dewey argued that art does not reside solely inside a physical object; instead, art happens in the active dialogue and personal aesthetic experience between the artwork and its viewer.",
      },
      {
        badge: "Contemporary",
        heading: "Culture, Context & Innovation",
        body: "Today, art encompasses conceptual, digital, participatory, and interdisciplinary forms whose meanings are continuously shaped by culture, technology, power, and audience dialogue.",
      },
    ],
    table: {
      headers: ["Perspective", "Core Purpose of Art", "Primary Focus", "Key Thinkers"],
      rows: [
        ["Classical", "Imitate reality & cultivate beauty", "Technique, harmony, proportion", "Plato, Aristotle"],
        ["Expressive", "Communicate genuine emotion & ideas", "Feelings, imagination, sincerity", "Leo Tolstoy"],
        ["Experiential", "Generate meaningful human encounters", "Viewer interaction & interpretation", "John Dewey"],
        ["Contemporary", "Question, critique, & innovate", "Concepts, identity, technology, society", "Contemporary theorists & artists"],
      ],
    },
    artworks: [
      {
        image: "/artworks/school-of-athens.jpg",
        title: "The School of Athens",
        artist: "Raphael (Raffaello Sanzio)",
        year: "1509–1511",
        medium: "Fresco, Apostolic Palace, Vatican City",
        caption: "Plato (pointing upward to ideal Forms) and Aristotle (gesturing to the lived earth) embody the classical debate on art and reality.",
        source: "Wikimedia Commons (Public Domain)",
      },
    ],
    keyTakeaway:
      "Defining art is not static—it bridges timeless craft, human emotion, participatory experience, and evolving cultural realities.",
  },
  {
    id: "p1-s2",
    partId: "part1",
    slideNumber: 2,
    kicker: "PART 1 · UNDERSTANDING ART",
    title: "Nature & Fundamental Assumptions of Art",
    subtitle: "What qualities define art, and why does every civilization create it?",
    summary:
      "Understanding art begins with recognizing its enduring nature—human, creative, subjective, and dynamic—alongside four core assumptions that explain why art persists across every era and society.",
    sections: [
      {
        badge: "Nature 01",
        heading: "Art is Human Expression",
        body: "Art channels human joys, grief, hopes, and convictions into tangible form. Unlike natural scenery, art carries intentional human authorship.",
        example: "Example: Juan Luna transforming colonial anguish into dramatic painted narrative.",
      },
      {
        badge: "Nature 02",
        heading: "Art is Creative",
        body: "Art emerges from imagination, originality, and disciplined skill, turning raw pigment, sound, fiber, or code into novel visual and sensory meaning.",
        example: "Example: Designing an original Bikolano woven motif or composing an original song.",
      },
      {
        badge: "Nature 03",
        heading: "Art is Subjective",
        body: "No two viewers bring identical memories or beliefs to an artwork; meaning unfolds through personal lens and cultural background.",
        example: "Example: One viewer reads Van Gogh's swirling sky as turbulent anxiety, another as radiant cosmic hope.",
      },
      {
        badge: "Nature 04",
        heading: "Art is Dynamic",
        body: "Art evolves alongside society and technology—expanding from cave murals and clay jars to cinema, digital illustration, VR, and AI-assisted media.",
        example: "Example: Traditional handwoven patterns reimagined in contemporary architecture and digital art.",
      },
    ],
    assumptions: [
      {
        label: "01. Art is Universal",
        detail: "Present in every culture and epoch of human history, uniting humanity through shared creative impulse.",
      },
      {
        label: "02. Art is Cultural",
        detail: "Rooted in the beliefs, languages, rituals, values, and collective identity of the society that shapes it.",
      },
      {
        label: "03. Art is Experienced",
        detail: "Requires direct engagement—seeing, hearing, or participating—because passive description can never replace personal encounter.",
      },
      {
        label: "04. Art is Expression",
        detail: "Serves as a vital conduit through which artists voice inner emotions, imagination, and critical ideas.",
      },
    ],
    artworks: [
      {
        image: "/artworks/starry-night.jpg",
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        medium: "Oil on canvas, Museum of Modern Art (MoMA)",
        caption: "Demonstrates subjective expression and emotional resonance—transforming an observed night sky into turbulent, poetic movement.",
        source: "Wikimedia Commons / Google Art Project (Public Domain)",
      },
      {
        image: "/artworks/manunggul-jar.jpg",
        title: "Manunggul Jar",
        artist: "Early Philippine Artisans (Tabon Caves, Palawan)",
        year: "ca. 890–710 BCE",
        medium: "Earthenware with incised scroll designs & hematite",
        caption: "Proves art is universal and cultural: a secondary burial vessel encoding ancient Filipino beliefs in the soul's voyage to the afterlife.",
        source: "Wikimedia Commons / National Museum of the Philippines",
      },
    ],
    keyTakeaway:
      "Because art is simultaneously universal and deeply cultural, engaging with an artwork invites us to experience both our shared humanity and unique local identities.",
  },
  {
    id: "p1-s3",
    partId: "part1",
    slideNumber: 3,
    kicker: "PART 1 · UNDERSTANDING ART",
    title: "Functions & Philosophies of Art",
    subtitle: "What art accomplishes in human life—and how Plato, Aristotle, and Kant judge its value",
    summary:
      "Every artwork operates through one or more interlocking functions—personal, social, or physical—while classical and Enlightenment philosophies illuminate how we assess imitation, emotional catharsis, and pure aesthetic beauty.",
    sections: [
      {
        badge: "Personal Function",
        heading: "Individual Self-Expression & Reflection",
        body: "Serves the private emotional needs of the artist or viewer—catharsis after loss, self-discovery, joy, contemplation, or playful creativity.",
        example: "Example: Keeping an illustrated visual journal or painting personal grief into color.",
      },
      {
        badge: "Social Function",
        heading: "Community, Heritage & Critique",
        body: "Addresses collective experience: preserving cultural memory, celebrating festivals, rallying solidarity, and confronting social or environmental injustice.",
        example: "Example: Public murals advocating climate action or community festivals honoring shared devotion.",
      },
      {
        badge: "Physical Function",
        heading: "Utility & Craft in Daily Living",
        body: "Integrates aesthetic artistry into functional objects—architecture, woven banig mats, clay burnay jars, abaca bags, clothing, and furniture.",
        example: "Example: A handwoven banig offers intricate geometric beauty while serving as a breathable sleeping mat.",
      },
    ],
    table: {
      headers: ["Philosopher", "Core Thesis", "Signature Concept", "Illustrative Lens"],
      rows: [
        [
          "Plato (ca. 380 BCE)",
          "Physical reality imitates ideal Forms; art imitates physical objects ('imitation of an imitation').",
          "Mimesis (Imitation)",
          "Ideal Form → Physical Chair → Painted Chair",
        ],
        [
          "Aristotle (ca. 335 BCE)",
          "Art imitates human action constructively, teaching wisdom and clarifying powerful emotions.",
          "Mimesis & Catharsis",
          "Tragic drama cleanses pity and fear, deepening moral empathy",
        ],
        [
          "Immanuel Kant (1790)",
          "True beauty is judged freely without utilitarian desire or material ownership.",
          "Disinterested Pleasure & Aesthetic Judgment",
          "Admiring a painting's radiance simply for its beauty, not practical gain",
        ],
      ],
    },
    artworks: [
      {
        image: "/artworks/banig.jpg",
        title: "Traditional Handwoven Banig Mat",
        artist: "Philippine Traditional Weavers",
        year: "Living Heritage Craft",
        medium: "Dried pandan / tikog / buri plant fibers",
        caption: "Exemplifies Physical Function—harmonizing everyday utility, regional livelihood, and visual rhythm.",
        source: "Wikimedia Commons",
      },
    ],
    keyTakeaway:
      "A single artwork often bridges multiple functions at once: a historic cathedral or indigenous textile can be physically useful, socially unifying, and personally transcendent.",
  },
  {
    id: "p1-s4",
    partId: "part1",
    slideNumber: 4,
    kicker: "PART 1 · UNDERSTANDING ART",
    title: "Subject vs. Content in Artwork Analysis",
    subtitle: "Looking beyond 'What do I see?' to uncover 'What does it mean?'",
    summary:
      "Critical art appreciation distinguishes between an artwork's Subject—its literal, visible figures, objects, or forms—and its Content—the deeper themes, emotions, cultural codes, and messages communicated beneath the surface.",
    sections: [
      {
        badge: "Subject",
        heading: "The Visible & Identifiable ('What do I see?')",
        body: "Refers to the recognizable person, landscape, historical scene, still-life object, or non-representational shapes depicted directly on the surface.",
        example: "In Amorsolo's Harvest (1930): sunlit farmers gathering golden stalks of rice in rural fields.",
      },
      {
        badge: "Content",
        heading: "The Interpreted Meaning ('What does it communicate?')",
        body: "Encompasses the conceptual depth, emotional tone, historical allegory, and social commentary conveyed—often open to rich, layered interpretations.",
        example: "In Harvest (1930): dignity of Filipino agricultural labor, community cooperation (bayanihan), and rural pride amid rapid urbanization.",
      },
    ],
    widget: "subject-content",
    artworks: [
      {
        image: "/artworks/amorsolo-harvest.jpg",
        title: "Harvest",
        artist: "Fernando Cueto Amorsolo",
        year: "1930",
        medium: "Oil on canvas",
        caption: "Subject: Rural Filipino farmers harvesting golden palay under tropical sunlight. Content: Resilience, dignity of labor, and idyllic national heritage.",
        source: "Wikimedia Commons (Public Domain)",
      },
      {
        image: "/artworks/spoliarium.jpg",
        title: "Spoliarium",
        artist: "Juan Novicio Luna",
        year: "1884",
        medium: "Oil on canvas (4.22 m × 7.675 m), National Museum of Fine Arts, Manila",
        caption: "Subject: Fallen Roman gladiators dragged into a dim basement arena. Content: Colonial oppression, sacrifice, and veiled Filipino yearning for dignity and liberty.",
        source: "Wikimedia Commons (Public Domain)",
      },
    ],
    keyTakeaway:
      "Identifying the subject is only the threshold of looking; uncovering the content reveals why an artwork endures across generations.",
  },
  {
    id: "p1-s5",
    partId: "part1",
    slideNumber: 5,
    kicker: "PART 1 · UNDERSTANDING ART",
    title: "The Seven Elements of Art",
    subtitle: "The fundamental visual building blocks artists orchestrate to communicate meaning",
    summary:
      "Just as language relies on vocabulary, visual art is constructed from seven core elements: Line, Shape, Form, Color, Value, Texture, and Space. Click each element below to examine how artists deploy it.",
    widget: "elements-explorer",
    artworks: [
      {
        image: "/artworks/kandinsky-comp8.jpg",
        title: "Composition VIII",
        artist: "Wassily Kandinsky",
        year: "1923",
        medium: "Oil on canvas, Solomon R. Guggenheim Museum",
        caption: "A masterclass in pure visual elements—intersecting diagonal lines, geometric shapes, color temperature contrasts, and open negative space.",
        source: "Wikimedia Commons (Public Domain)",
      },
      {
        image: "/artworks/mona-lisa.jpg",
        title: "Mona Lisa (La Gioconda)",
        artist: "Leonardo da Vinci",
        year: "ca. 1503–1519",
        medium: "Oil on poplar panel, Musée du Louvre",
        caption: "Illustrates masterful tonal Value (sfumato modeling), implied 3D Form, soft fabric Texture, and atmospheric Space receding into misty peaks.",
        source: "Wikimedia Commons / C2RMF (Public Domain)",
      },
    ],
    keyTakeaway:
      "Elements are never neutral decorations: diagonal lines inject urgency, warm colors radiate vitality, and subtle value gradations sculpt lifelike three-dimensional volume.",
  },
  {
    id: "p1-s6",
    partId: "part1",
    slideNumber: 6,
    kicker: "PART 1 · UNDERSTANDING ART",
    title: "Principles of Design, Rule of Thirds & Artist vs. Artisan",
    subtitle: "How visual elements are arranged—and who shapes fine versus functional art",
    summary:
      "If Elements of Art are what artists use, Principles of Design are how they organize them into coherent, compelling compositions. Alongside visual structure, art appreciation honors both expressive Fine Artists and master Traditional Artisans.",
    sections: [
      {
        badge: "Design Principles",
        heading: "10 Organizing Guidelines of Composition",
        body: "Balance (symmetrical/asymmetrical stability), Emphasis (focal anchor), Contrast (visual difference), Movement (guiding the gaze), Pattern (organized repetition), Rhythm (flowing visual beat), Unity (cohesive whole), Variety (preventing monotony), Proportion (size relationships), and Harmony (pleasing agreement).",
      },
      {
        badge: "Artist vs. Artisan",
        heading: "Two Complementary Creative Callings",
        body: "Artists primarily pursue aesthetic expression, conceptual exploration, and emotional provocation across fine arts (e.g., Juan Luna, Fernando Amorsolo). Artisans master specialized craft traditions to create functional, ceremonial, or decorative works—textiles, pottery, metalwork, and baskets (e.g., Tina Maristela-Ocampo & GAMABA masters). Both rely on deep creativity and skill, and their roles frequently overlap.",
      },
    ],
    widget: "rule-of-thirds",
    table: {
      headers: ["Dimension", "Artist", "Artisan"],
      rows: [
        ["Primary Emphasis", "Artistic expression, conceptual & emotional exploration", "Specialized craftsmanship & mastery of craft heritage"],
        ["Typical Output", "Paintings, fine sculptures, cinema, conceptual installations", "Handwoven textiles, burnay pottery, baskets, jewelry, brassware"],
        ["Relation to Function", "Often indirectly functional (aesthetic contemplation)", "Directly functional, decorative, ceremonial, or livelihood-driven"],
        ["Shared Ground", "Both exercise creative decision-making, material fluency, and cultural stewardship", "Often overlap—traditional artisans are true cultural artists"],
      ],
    },
    keyTakeaway:
      "Great composition balances structure with expressive freedom—just as a thriving culture values both museum fine artists and everyday community artisans.",
  },
];
