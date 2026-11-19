import React, { useState } from "react";
import { Grid3X3, Eye, Sparkles, Compass, CheckCircle2 } from "lucide-react";

/* 1. SLIDE 4 — Interactive Subject vs. Content Flip Cards */
function SubjectContentWidget() {
  const examples = [
    {
      id: "farmer",
      subject: "A Filipino farmer harvesting golden rice in a sunlit field",
      content: "Dignity of agricultural labor, resilience, rural pride, and the quiet beauty of Filipino livelihood.",
    },
    {
      id: "family",
      subject: "A Filipino family sharing a meal together around one table",
      content: "Close kinship, gratitude, intergenerational belonging, and the sacredness of everyday togetherness.",
    },
    {
      id: "mother",
      subject: "A mother cradling her young child closely",
      content: "Unconditional love, protection, vulnerability, and nurturing strength.",
    },
    {
      id: "forest",
      subject: "A cleared, scarred forest with fallen trunks and smoke",
      content: "Urgent ecological warning, human responsibility, and grief over environmental destruction.",
    },
  ];
  const [revealed, setRevealed] = useState({ farmer: true });

  const toggle = (id) => setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="rounded-2xl border border-[#9e0b0f]/20 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#9e0b0f] flex items-center gap-1.5">
          <Eye className="h-3.5 w-3.5" />
          Interactive Lens: Click Any Card to Uncover Interpreted Content
        </span>
        <span className="text-[11px] text-[#52606d]">Subject = Visible · Content = Meaning</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {examples.map((ex) => {
          const isOpen = !!revealed[ex.id];
          return (
            <button
              key={ex.id}
              type="button"
              onClick={() => toggle(ex.id)}
              className={`cursor-pointer rounded-xl border p-3.5 text-left transition-all ${
                isOpen
                  ? "border-[#9e0b0f]/45 bg-[#fff8eb] shadow-xs"
                  : "border-[#1d2a36]/15 bg-white/80 hover:border-[#9e0b0f]/35"
              }`}
            >
              <div className="text-[10px] font-mono-retro font-bold uppercase tracking-widest text-[#4b5866]">
                Subject (&quot;What do I see?&quot;)
              </div>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#18222c]">
                {ex.subject}
              </p>
              <div className="mt-2.5 border-t border-dashed border-[#1d2a36]/15 pt-2">
                {isOpen ? (
                  <>
                    <div className="text-[10px] font-mono-retro font-bold uppercase tracking-widest text-[#9e0b0f]">
                      Interpreted Content (&quot;What does it mean?&quot;)
                    </div>
                    <p className="mt-1 text-xs text-[#3a2822] leading-relaxed">{ex.content}</p>
                  </>
                ) : (
                  <span className="text-[11px] font-mono-retro font-bold text-[#9e0b0f]">
                    + Tap to reveal deeper Content
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* 2. SLIDE 5 — Interactive Seven Elements of Art Explorer */
function ElementsExplorerWidget() {
  const elements = [
    {
      name: "Line",
      tag: "Mark connecting two points",
      desc: "Lines steer emotion and movement: horizontal lines evoke calm stability; vertical lines convey strength; diagonals surge with energy; curves feel gentle; zigzags spark tension.",
      example: "Sweeping curved outlines in Hokusai's wave or architectural verticals in Chartres Cathedral.",
      visual: (
        <svg viewBox="0 0 180 72" className="w-full h-16">
          <line x1="10" y1="14" x2="54" y2="14" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          <line x1="72" y1="60" x2="104" y2="12" stroke="#9e0b0f" strokeWidth="3" strokeLinecap="round" />
          <path d="M115 54 Q130 10 146 40 T172 18" fill="none" stroke="#285884" strokeWidth="3" strokeLinecap="round" />
          <polyline points="12,58 24,38 36,58 48,38 60,58" fill="none" stroke="#728955" strokeWidth="2.8" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Shape",
      tag: "Enclosed 2D area (height & width)",
      desc: "Divided into Geometric shapes (circles, squares, triangles—order and precision) and Organic shapes (leaves, clouds, flowers, human silhouettes—natural vitality).",
      example: "Geometric triangles and circles in Kandinsky's Composition VIII vs. organic leaves in Okir.",
      visual: (
        <svg viewBox="0 0 180 72" className="w-full h-16">
          <circle cx="34" cy="36" r="20" fill="#f4e541" stroke="#1e293b" strokeWidth="2" />
          <polygon points="88,15 66,56 110,56" fill="#eb679d" stroke="#1e293b" strokeWidth="2" />
          <path d="M126 48 C118 24 148 10 162 28 C174 44 152 64 134 56 Z" fill="#728955" stroke="#1e293b" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Form",
      tag: "3D volume (height, width & depth)",
      desc: "Physical three-dimensional objects (sculptures, architecture, cubes, spheres) or the illusion of depth created on a 2D surface using shading and highlights.",
      example: "Ifugao wooden Bulul sculptures, Terracotta warriors, and Da Vinci's modeled portraiture.",
      visual: (
        <svg viewBox="0 0 180 72" className="w-full h-16">
          <defs>
            <radialGradient id="sphereGrad" cx="35%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="55%" stopColor="#c2410c" />
              <stop offset="100%" stopColor="#431407" />
            </radialGradient>
          </defs>
          <circle cx="54" cy="36" r="23" fill="url(#sphereGrad)" />
          <polygon points="105,24 133,14 158,24 130,34" fill="#d4e0ea" stroke="#1e293b" strokeWidth="1.5" />
          <polygon points="105,24 130,34 130,60 105,50" fill="#7c93a8" stroke="#1e293b" strokeWidth="1.5" />
          <polygon points="158,24 130,34 130,60 158,50" fill="#475c70" stroke="#1e293b" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "Color",
      tag: "Light interacting with surfaces",
      desc: "Primary (Red, Yellow, Blue) and Secondary (Orange, Green, Violet) hues shape mood. Warm colors radiate energy and sunlight; cool colors evoke tranquility and distance.",
      example: "Amorsolo's sunlit golden yellows vs. Van Gogh's cobalt-blue nocturnal sky.",
      visual: (
        <div className="flex h-16 items-center justify-center gap-2 px-2">
          {["#dc2626", "#f59e0b", "#facc15", "#16a34a", "#2563eb", "#7c3aed"].map((hex) => (
            <span
              key={hex}
              className="h-10 w-10 rounded-full border border-black/15 shadow-xs"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      ),
    },
    {
      name: "Value",
      tag: "Lightness or darkness of a tone",
      desc: "Gradations from pure white through grays to deep black create highlights, dramatic shadows (chiaroscuro/tenebrism), three-dimensional depth, and focal emphasis.",
      example: "Caravaggio's theatrical shafts of light cutting across dark Baroque shadows.",
      visual: (
        <div className="grid h-14 grid-cols-6 overflow-hidden rounded-lg border border-black/15">
          {["#f8fafc", "#cbd5e1", "#94a3b8", "#475569", "#1e293b", "#020617"].map((v) => (
            <div key={v} style={{ backgroundColor: v }} />
          ))}
        </div>
      ),
    },
    {
      name: "Texture",
      tag: "How a surface feels or appears to feel",
      desc: "Actual texture can be physically touched (rough volcanic stone on Daraga Church, crisp abaca sinamay); Implied texture creates visual tactile illusion on flat canvas (tree bark, velvet).",
      example: "Thick impasto ridges in Van Gogh's paintings vs. tactile woven fibers of T'nalak.",
      visual: (
        <div className="grid grid-cols-2 gap-3 h-14">
          <div
            className="rounded-lg border border-black/15 flex items-center justify-center text-[11px] font-mono-retro font-bold text-[#3b2f26]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #d6c3a5 0 4px, #c2aa86 4px 8px)",
            }}
          >
            ROUGH / WOVEN
          </div>
          <div
            className="rounded-lg border border-black/15 flex items-center justify-center text-[11px] font-mono-retro font-bold text-[#1e3a5f]"
            style={{
              background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #f8fafc 100%)",
            }}
          >
            SMOOTH / GLOSS
          </div>
        </div>
      ),
    },
    {
      name: "Space",
      tag: "Area around, between, or within objects",
      desc: "Positive space is occupied by the primary subject; Negative space is the breathing area surrounding it—essential in Song Dynasty ink scrolls and Zen minimalism.",
      example: "Misty open sky framing towering cliffs in Fan Kuan's landscape.",
      visual: (
        <div className="flex h-14 items-center justify-between rounded-lg border border-black/15 bg-[#e2eaf1] px-5">
          <span className="text-[10px] font-mono-retro text-[#475569]">Negative Space</span>
          <div className="h-9 w-16 rounded-md bg-[#9e0b0f] flex items-center justify-center text-[10px] font-mono-retro text-white font-bold">
            Positive
          </div>
          <span className="text-[10px] font-mono-retro text-[#475569]">Negative Space</span>
        </div>
      ),
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const current = elements[activeIdx];

  return (
    <div className="rounded-2xl border border-[#1d2a36]/15 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {elements.map((el, i) => (
          <button
            key={el.name}
            type="button"
            onClick={() => setActiveIdx(i)}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-mono-retro font-bold transition ${
              i === activeIdx
                ? "bg-[#9e0b0f] text-white shadow-xs"
                : "bg-[#1d2a36]/8 text-[#243240] hover:bg-[#9e0b0f]/15"
            }`}
          >
            {i + 1}. {el.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-5 items-center rounded-xl border border-[#1d2a36]/12 bg-white/85 p-4">
        <div className="sm:col-span-2">{current.visual}</div>
        <div className="sm:col-span-3 space-y-1.5">
          <div className="flex items-baseline gap-2">
            <h4 className="font-display text-lg font-bold text-[#18222c]">{current.name}</h4>
            <span className="text-[11px] font-mono-retro text-[#9e0b0f]">{current.tag}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#313e4b] leading-relaxed">{current.desc}</p>
          <p className="text-[11px] text-[#52606d] italic">
            <strong>Application:</strong> {current.example}
          </p>
        </div>
      </div>
    </div>
  );
}

/* 3. SLIDE 6 — Interactive Rule of Thirds Grid Sandbox */
function RuleOfThirdsWidget() {
  const [showGrid, setShowGrid] = useState(true);
  const [sampleIdx, setSampleIdx] = useState(0);
  const samples = [
    {
      title: "The Great Wave off Kanagawa (Hokusai)",
      src: "/artworks/great-wave.jpg",
      note: "Notice how the cresting wave claw and distant Mount Fuji align dynamically near the intersecting Rule of Thirds power points rather than sitting statically dead-center.",
    },
    {
      title: "Mayon Volcano, Albay (Bicol Landscape)",
      src: "/artworks/mayon.jpg",
      note: "Placing the horizon along the lower third and the volcanic summit near an upper intersection builds balance and dramatic visual breathing room.",
    },
  ];
  const sample = samples[sampleIdx];

  return (
    <div className="rounded-2xl border border-[#1d2a36]/15 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Grid3X3 className="h-4 w-4 text-[#9e0b0f]" />
          <span className="font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#18222c]">
            Interactive Rule of Thirds Composition Overlay
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSampleIdx((prev) => (prev === 0 ? 1 : 0))}
            className="cursor-pointer rounded-full border border-[#1d2a36]/20 bg-white px-3 py-1 text-[11px] font-semibold text-[#18222c] hover:bg-[#edf2f6]"
          >
            Switch Artwork
          </button>
          <button
            type="button"
            onClick={() => setShowGrid((g) => !g)}
            className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-mono-retro font-bold transition ${
              showGrid ? "bg-[#9e0b0f] text-white" : "bg-[#1d2a36]/12 text-[#1d2a36]"
            }`}
          >
            Grid: {showGrid ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5 items-center">
        <div className="relative md:col-span-3 overflow-hidden rounded-xl border border-black/15 aspect-[16/10] bg-slate-900">
          <img
            src={sample.src}
            alt={sample.title}
            className="h-full w-full object-cover"
          />
          {showGrid && (
            <div className="pointer-events-none absolute inset-0">
              {/* Two vertical & two horizontal third lines */}
              <div className="absolute left-1/3 top-0 bottom-0 w-[1.5px] bg-[#ffe867]/85 shadow-[0_0_4px_black]" />
              <div className="absolute left-2/3 top-0 bottom-0 w-[1.5px] bg-[#ffe867]/85 shadow-[0_0_4px_black]" />
              <div className="absolute top-1/3 left-0 right-0 h-[1.5px] bg-[#ffe867]/85 shadow-[0_0_4px_black]" />
              <div className="absolute top-2/3 left-0 right-0 h-[1.5px] bg-[#ffe867]/85 shadow-[0_0_4px_black]" />
              {/* Four power points */}
              {[
                ["33.33%", "33.33%"],
                ["66.66%", "33.33%"],
                ["33.33%", "66.66%"],
                ["66.66%", "66.66%"],
              ].map(([left, top], i) => (
                <span
                  key={i}
                  className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#ef4444] shadow-[0_0_8px_rgba(0,0,0,0.85)]"
                  style={{ left, top }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-2 space-y-2">
          <h4 className="font-display text-base font-bold text-[#18222c]">{sample.title}</h4>
          <p className="text-xs text-[#374552] leading-relaxed">{sample.note}</p>
          <p className="rounded-lg bg-[#9e0b0f]/8 p-2.5 text-[11px] text-[#7c0a0a]">
            <strong>Remember:</strong> The Rule of Thirds is a flexible compositional guideline—artists may also intentionally center subjects to project symmetry, solemnity, or monumental power.
          </p>
        </div>
      </div>
    </div>
  );
}

/* 4. SLIDE 7 — Interactive Western Art Timeline Explorer */
function WesternTimelineWidget() {
  const eras = [
    {
      period: "Classical Antiquity",
      years: "ca. 500 BCE – 400 CE",
      context: "Athenian democracy & Roman Empire",
      hallmark: "Mathematical harmony, ideal anatomy, Doric/Ionic orders, civic marble temples.",
      artists: "Phidias, Polykleitos, Iktinos & Kallikrates",
    },
    {
      period: "Medieval & Gothic",
      years: "ca. 500 – 1400 CE",
      context: "Rise of Christianity, monasteries & cathedral cities",
      hallmark: "Pointed arches, flying buttresses, jewel-like stained glass, sacred symbolism.",
      artists: "Master Masons of Chartres, Giotto (Proto-Renaissance)",
    },
    {
      period: "Renaissance",
      years: "ca. 1400 – 1600",
      context: "Humanism, scientific inquiry, printing press & Medici patronage",
      hallmark: "Linear perspective, anatomical naturalism, sfumato, balanced harmony.",
      artists: "Leonardo da Vinci, Michelangelo, Raphael",
    },
    {
      period: "Baroque",
      years: "ca. 1600 – 1750",
      context: "Catholic Counter-Reformation & European royal courts",
      hallmark: "Dramatic chiaroscuro/tenebrism, sweeping diagonals, emotional theater.",
      artists: "Caravaggio, Bernini, Artemisia Gentileschi, Rembrandt",
    },
    {
      period: "Neoclassicism, Romanticism & Realism",
      years: "ca. 1750 – 1870",
      context: "Enlightenment, political revolutions & industrial class struggles",
      hallmark: "Civic austerity → impassioned drama → unidealized dignity of ordinary laborers.",
      artists: "Jacques-Louis David, Eugène Delacroix, Gustave Courbet, Jean-François Millet",
    },
    {
      period: "Impressionism → Modernism",
      years: "ca. 1870 – 1950",
      context: "Photography's arrival, urbanization, psychoanalysis & World Wars",
      hallmark: "En plein air optical light, expressive impasto, Cubist fragmentation, pure abstraction.",
      artists: "Claude Monet, Vincent van Gogh, Pablo Picasso, Wassily Kandinsky",
    },
  ];

  const [selected, setSelected] = useState(0);
  const era = eras[selected];

  return (
    <div className="rounded-2xl border border-[#6f8554]/30 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs">
      <div className="font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#4d6136] mb-3">
        Interactive Western Art Timeline — Select an Era
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {eras.map((item, idx) => (
          <button
            key={item.period}
            type="button"
            onClick={() => setSelected(idx)}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              idx === selected
                ? "bg-[#6f8554] text-white shadow-xs"
                : "bg-[#6f8554]/12 text-[#2d3b1e] hover:bg-[#6f8554]/22"
            }`}
          >
            {idx + 1}. {item.period}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-[#6f8554]/25 bg-white/90 p-4 grid gap-3 sm:grid-cols-3">
        <div>
          <div className="text-[10px] font-mono-retro font-bold uppercase text-[#6f8554]">
            Era &amp; Span
          </div>
          <div className="font-display text-base font-bold text-[#18222c] mt-0.5">
            {era.period}
          </div>
          <div className="text-xs font-mono-retro text-[#52606d]">{era.years}</div>
          <div className="mt-2 text-xs text-[#313e4b]">
            <strong>Context:</strong> {era.context}
          </div>
        </div>
        <div className="sm:col-span-2 space-y-2 border-t sm:border-t-0 sm:border-l border-[#1d2a36]/10 pt-2 sm:pt-0 sm:pl-4">
          <div className="text-xs sm:text-sm text-[#243240] leading-relaxed">
            <strong>Stylistic Hallmarks:</strong> {era.hallmark}
          </div>
          <div className="text-xs text-[#4b5866]">
            <strong>Notable Figures:</strong> {era.artists}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. SLIDE 16 — Interactive Asian Art Comparison Matrix */
function AsianComparisonWidget() {
  const [focus, setFocus] = useState("all");
  const rows = [
    {
      aspect: "Main Influences",
      china: "Confucianism, Daoism, Buddhism & imperial traditions",
      japan: "Indigenous Shinto, Zen Buddhism, nature & later Western exchange",
      india: "Hinduism, Buddhism, Jainism, Mughal Islam & regional cultures",
    },
    {
      aspect: "Common Themes",
      china: "Cosmic harmony, misty mountains, philosophy, ancestral respect",
      japan: "Simplicity, seasonal change, asymmetry, fleeting impermanence",
      india: "Spirituality, divine mythology, devotional storytelling & meditation",
    },
    {
      aspect: "Major Art Forms",
      china: "Ink scroll painting, calligraphy, blue-and-white porcelain, pagodas",
      japan: "Ukiyo-e woodblock prints, Zen rock gardens, tea ceramics, origami",
      india: "Sacred sculpture, rock-cut cave murals, stupas, temples & marble mausoleums",
    },
    {
      aspect: "Signature Masterworks",
      china: "Travelers Among Mountains and Streams, Terracotta Army, Ming Porcelain",
      japan: "The Great Wave off Kanagawa, Ryōan-ji Garden, Mount Fuji Prints",
      india: "Taj Mahal, Bodhisattva Padmapani (Ajanta), Great Stupa at Sanchi",
    },
  ];

  const filters = [
    { id: "all", label: "Compare All Three" },
    { id: "china", label: "Highlight Chinese Art" },
    { id: "japan", label: "Highlight Japanese Art" },
    { id: "india", label: "Highlight Indian Art" },
  ];

  return (
    <div className="rounded-2xl border border-[#c84b7e]/25 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#9d275a]">
          Interactive Comparative Matrix — Asian Art Traditions
        </span>
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFocus(f.id)}
              className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                focus === f.id
                  ? "bg-[#c84b7e] text-white"
                  : "bg-[#c84b7e]/10 text-[#6e1c40] hover:bg-[#c84b7e]/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#1d2a36]/12 bg-white">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#18222c] text-white font-mono-retro text-[11px]">
              <th className="p-2.5">Aspect</th>
              <th className={`p-2.5 ${focus === "china" ? "bg-[#9e0b0f]" : ""}`}>Chinese Art</th>
              <th className={`p-2.5 ${focus === "japan" ? "bg-[#285884]" : ""}`}>Japanese Art</th>
              <th className={`p-2.5 ${focus === "india" ? "bg-[#b45309]" : ""}`}>Indian Art</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1d2a36]/10">
            {rows.map((r) => (
              <tr key={r.aspect}>
                <td className="p-2.5 font-bold text-[#18222c] bg-[#f8fafc]">{r.aspect}</td>
                <td
                  className={`p-2.5 transition ${
                    focus === "china"
                      ? "bg-[#fff1f2] font-medium text-[#18222c]"
                      : focus === "all"
                      ? "text-[#334155]"
                      : "opacity-45 text-[#475569]"
                  }`}
                >
                  {r.china}
                </td>
                <td
                  className={`p-2.5 transition ${
                    focus === "japan"
                      ? "bg-[#eff6ff] font-medium text-[#18222c]"
                      : focus === "all"
                      ? "text-[#334155]"
                      : "opacity-45 text-[#475569]"
                  }`}
                >
                  {r.japan}
                </td>
                <td
                  className={`p-2.5 transition ${
                    focus === "india"
                      ? "bg-[#fffbeb] font-medium text-[#18222c]"
                      : focus === "all"
                      ? "text-[#334155]"
                      : "opacity-45 text-[#475569]"
                  }`}
                >
                  {r.india}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* 6. SLIDE 17 — Interactive 7-Question Guide to Appreciating Indigenous Art */
function IndigenousAppreciationWidget() {
  const questions = [
    { q: "WHO?", prompt: "Who created the artwork?", tnalak: "T'boli women master weavers ('Dreamweavers') such as GAMABA laureate Lang Dulay." },
    { q: "WHAT?", prompt: "What materials, techniques, & symbols are used?", tnalak: "Hand-stripped abaca fibers resist-dyed (ikat) with natural roots (k'nalum black, loko red) into sacred geometric patterns." },
    { q: "WHERE?", prompt: "Where does the tradition originate?", tnalak: "Lake Sebu and the highlands of South Cotabato, Mindanao." },
    { q: "WHEN?", prompt: "When & how has it been practiced?", tnalak: "Passed down orally and by hand across centuries; weavers observe ritual respect and patience throughout months of looming." },
    { q: "WHY?", prompt: "Why was the artwork created?", tnalak: "Used in sacred ceremonies—births, weddings, peace pacts, and community rites—not originally made as mass-market decor." },
    { q: "HOW?", prompt: "How does it connect to community beliefs & ecology?", tnalak: "Honors Fu Dalu (spirit of the abaca) while linking forest stewardship, women's leadership, and sustainable livelihood." },
    { q: "MEANING?", prompt: "What cultural meaning does it communicate?", tnalak: "Collective memory, spiritual harmony, and ancestral identity woven into every thread." },
  ];
  const [idx, setIdx] = useState(0);
  const active = questions[idx];

  return (
    <div className="rounded-2xl border border-[#9e0b0f]/20 bg-[#faf7f0]/95 p-4 shadow-xs">
      <div className="flex items-center gap-2 text-[11px] font-mono-retro font-bold uppercase tracking-wider text-[#9e0b0f] mb-2.5">
        <Compass className="h-3.5 w-3.5" />
        <span>How to Respectfully Appreciate Indigenous Art (Applied to T&apos;boli T&apos;nalak)</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {questions.map((item, i) => (
          <button
            key={item.q}
            type="button"
            onClick={() => setIdx(i)}
            className={`cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-mono-retro font-bold transition ${
              i === idx ? "bg-[#9e0b0f] text-white" : "bg-[#1d2a36]/8 text-[#243240] hover:bg-[#9e0b0f]/15"
            }`}
          >
            {item.q}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-[#1d2a36]/12 bg-white/90 p-3.5">
        <div className="text-xs font-bold text-[#18222c]">{active.prompt}</div>
        <p className="mt-1 text-xs text-[#3a4856] leading-relaxed">{active.tnalak}</p>
      </div>
    </div>
  );
}

/* 7. SLIDE 23 — Interactive Bikolano Festival Interconnection Web */
function FestivalWebWidget() {
  const nodes = [
    { form: "Music", role: "Hymns to Ina ('Resuene Vibrante'), marching brass bands, percussive drums & liturgical choirs." },
    { form: "Dance", role: "Bikolano Pantomina courtship grace, street-dance storytelling & Ibalong warrior choreography." },
    { form: "Applied Arts", role: "Handwoven abaca & sinamay costumes, floral arches, embroidered mantles & artisanal masks." },
    { form: "Visual Arts", role: "Illuminated pagoda barge design, devotional banners, painted murals & vibrant floats." },
    { form: "Literature", role: "Chanted novenas, Ibalong epic legends, Bikolano prayers, rawitdawit & celebratory verses." },
    { form: "Theater", role: "Dramatized mythic battles of Handiong and Bantong staged in open city streets and plazas." },
    { form: "Architecture", role: "Peñafrancia Basilica Minore, Naga Metropolitan Cathedral, riverfront bridges & civic plazas." },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <div className="rounded-2xl border border-[#7c0a0a]/25 bg-[#faf7f0]/95 p-4 shadow-xs">
      <div className="flex items-center gap-2 text-[11px] font-mono-retro font-bold uppercase tracking-wider text-[#7c0a0a] mb-2.5">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Art Forms Are Connected — Inside a Living Bikolano Festival</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {nodes.map((n, i) => (
          <button
            key={n.form}
            type="button"
            onClick={() => setSelected(i)}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition ${
              i === selected
                ? "bg-[#7c0a0a] text-white shadow-xs"
                : "bg-[#7c0a0a]/10 text-[#5c0808] hover:bg-[#7c0a0a]/20"
            }`}
          >
            {n.form}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-[#7c0a0a]/15 bg-white/90 p-3.5 flex items-start gap-3">
        <span className="rounded-lg bg-[#7c0a0a] px-2.5 py-1 font-mono-retro text-xs font-bold text-white shrink-0">
          {nodes[selected].form}
        </span>
        <p className="text-xs sm:text-sm text-[#2d3945] leading-relaxed">
          {nodes[selected].role}
        </p>
      </div>
    </div>
  );
}

/* 8. SLIDE 28 — Interactive 8-Stage Creative Production Process */
function ProductionProcessWidget() {
  const stages = [
    { step: "01", name: "Idea / Concept", desc: "Artist identifies a core message, emotion, personal story, heritage theme, or urgent social problem (e.g., Philippine climate resilience)." },
    { step: "02", name: "Research & Exploration", desc: "Investigates references through observation, community interviews, historical reading, visual brainstorming, and exploratory sketches." },
    { step: "03", name: "Planning", desc: "Determines composition, color palette, scale, measurements, support surface, media, and step-by-step techniques." },
    { step: "04", name: "Preparation", desc: "Gathers raw tools, pigments, clay, abaca fibers, software assets, studio space, and safety equipment before starting." },
    { step: "05", name: "Execution", desc: "Applies chosen media and techniques—layering acrylics, carving wood, looming threads, or rendering digital frames." },
    { step: "06", name: "Evaluation", desc: "Steps back critically: Does the composition communicate clearly? Is the medium working? What feels disjointed?" },
    { step: "07", name: "Refinement", desc: "Revises proportions, sharpens contrast, adds or removes visual clutter, and polishes craftsmanship." },
    { step: "08", name: "Presentation", desc: "Shares the finished artwork with its audience through museum exhibition, street mural, theater performance, film screening, or digital portfolio." },
  ];
  const [stepIdx, setStepIdx] = useState(0);
  const current = stages[stepIdx];

  return (
    <div className="rounded-2xl border border-[#285884]/25 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs space-y-3">
      <div className="font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#285884]">
        Interactive 8-Stage Artistic Production Process (Non-Linear &amp; Iterative)
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {stages.map((s, i) => (
          <button
            key={s.step}
            type="button"
            onClick={() => setStepIdx(i)}
            className={`cursor-pointer rounded-lg px-2.5 py-2 text-left text-[11px] font-semibold transition ${
              i === stepIdx
                ? "bg-[#285884] text-white shadow-xs"
                : "bg-[#285884]/10 text-[#1d3f5e] hover:bg-[#285884]/20"
            }`}
          >
            <span className="font-mono-retro opacity-75 mr-1">{s.step}</span>
            {s.name}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-[#285884]/20 bg-white/90 p-4 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-[#285884] shrink-0 mt-0.5" />
        <div>
          <div className="font-display text-sm sm:text-base font-bold text-[#18222c]">
            Stage {current.step}: {current.name}
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#313e4b] leading-relaxed">{current.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* 9. SLIDE 29 — Interactive 4-Step Art Critique Lens */
function FourStepCritiqueWidget() {
  const cases = [
    {
      id: "okir",
      title: "Maranao Okir Woodcarving & Sarimanok",
      image: "/artworks/okir-art.jpg",
      steps: [
        {
          label: "1. Description ('What do you see?')",
          text: "Intricate relief carving filled with flowing S-curves, stylized fern spirals (pako rabong), leaf scrolls, and vibrant painted or burnished surface patterns across wood and architectural beams.",
        },
        {
          label: "2. Analysis ('How did the artist create it?')",
          text: "Curved lines and repeated botanical motifs establish continuous visual Rhythm and Pattern; symmetrical and radial Balance anchor decorative unity while carved hollows generate crisp shadow Contrast.",
        },
        {
          label: "3. Interpretation ('What is its meaning?')",
          text: "Embodies Maranao nobility, living harmony with lush nature, Islamic aesthetic grace, and ancestral continuity across generations.",
        },
        {
          label: "4. Evaluation ('Is it effective? Why?')",
          text: "Highly effective: extraordinary technical woodcarving precision seamlessly unites ceremonial identity, architectural beauty, and enduring contemporary inspiration.",
        },
      ],
    },
    {
      id: "spoliarium",
      title: "Spoliarium by Juan Luna (1884)",
      image: "/artworks/spoliarium.jpg",
      steps: [
        {
          label: "1. Description ('What do you see?')",
          text: "A colossal oil painting depicting Roman attendants hauling bloodied fallen gladiators across a stone basement floor while onlookers gaze from shadows on the left and a mourning woman crouches on the right.",
        },
        {
          label: "2. Analysis ('How did the artist create it?')",
          text: "Strong diagonal lines pull the eye along the dragged bodies; stark Baroque value Contrast (tenebrism) and crimson accents focus Emphasis on human suffering amidst oppressive architectural Scale.",
        },
        {
          label: "3. Interpretation ('What is its meaning?')",
          text: "Beyond ancient Rome, Rizal and Filipino nationalists read the painting as a searing allegory of colonial brutality, quiet mourning, and unspoken resistance.",
        },
        {
          label: "4. Evaluation ('Is it effective? Why?')",
          text: "A landmark masterpiece: its theatrical mastery of Western academic craft powerfully awakens moral empathy and enduring Philippine historical consciousness.",
        },
      ],
    },
  ];

  const [caseIdx, setCaseIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const activeCase = cases[caseIdx];

  return (
    <div className="rounded-2xl border border-[#285884]/25 bg-[#faf7f0]/95 p-4 sm:p-5 shadow-xs space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#285884]">
          Interactive 4-Step Art Critique Walkthrough
        </span>
        <div className="flex gap-1.5">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setCaseIdx(i);
                setStepIdx(0);
              }}
              className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                i === caseIdx
                  ? "bg-[#9e0b0f] text-white"
                  : "bg-[#1d2a36]/10 text-[#18222c] hover:bg-[#9e0b0f]/15"
              }`}
            >
              {c.id === "okir" ? "Critique: Maranao Okir" : "Critique: Spoliarium"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5 items-start">
        <div className="md:col-span-2 overflow-hidden rounded-xl border border-black/15 bg-black/5">
          <img
            src={activeCase.image}
            alt={activeCase.title}
            className="h-44 w-full object-cover"
          />
          <div className="bg-white/95 px-3 py-2 text-xs font-bold text-[#18222c]">
            {activeCase.title}
          </div>
        </div>

        <div className="md:col-span-3 space-y-2.5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {["1. Describe", "2. Analyze", "3. Interpret", "4. Evaluate"].map((lbl, i) => (
              <button
                key={lbl}
                type="button"
                onClick={() => setStepIdx(i)}
                className={`cursor-pointer rounded-lg px-2 py-1.5 text-[11px] font-mono-retro font-bold transition ${
                  i === stepIdx
                    ? "bg-[#285884] text-white shadow-xs"
                    : "bg-[#285884]/10 text-[#1d3f5e] hover:bg-[#285884]/20"
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-[#285884]/20 bg-white/92 p-4">
            <div className="text-xs font-mono-retro font-bold text-[#285884] uppercase">
              {activeCase.steps[stepIdx].label}
            </div>
            <p className="mt-1.5 text-xs sm:text-sm text-[#243240] leading-relaxed">
              {activeCase.steps[stepIdx].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveWidget({ type }) {
  switch (type) {
    case "subject-content":
      return <SubjectContentWidget />;
    case "elements-explorer":
      return <ElementsExplorerWidget />;
    case "rule-of-thirds":
      return <RuleOfThirdsWidget />;
    case "western-timeline":
      return <WesternTimelineWidget />;
    case "asian-comparison":
      return <AsianComparisonWidget />;
    case "indigenous-appreciation":
      return <IndigenousAppreciationWidget />;
    case "festival-web":
      return <FestivalWebWidget />;
    case "production-process":
      return <ProductionProcessWidget />;
    case "four-step-critique":
      return <FourStepCritiqueWidget />;
    default:
      return null;
  }
}
