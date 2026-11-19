import React from "react";
import { PART_CHANNELS } from "../data/portfolioData";
import { BookOpen, Users, ArrowRight } from "lucide-react";

/**
 * Tactile scalloped vintage 2-hole craft button replacing the second 'o' in "portfolio",
 * modeled directly on Reference Image 1.
 */
function VintageCraftButton() {
  return (
    <span
      className="relative inline-flex items-center justify-center align-middle select-none mx-[-0.04em] sm:mx-[-0.02em]"
      style={{ width: "0.95em", height: "0.95em", transform: "translateY(0.05em)" }}
      aria-label="o"
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-[2px_4px_5px_rgba(40,18,12,0.38)] transition-transform duration-300 hover:rotate-12"
      >
        <defs>
          <radialGradient id="btnBase" cx="42%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fdf8ef" />
            <stop offset="48%" stopColor="#eadbc4" />
            <stop offset="82%" stopColor="#cbb292" />
            <stop offset="100%" stopColor="#a68967" />
          </radialGradient>
          <radialGradient id="btnWell" cx="55%" cy="58%" r="55%">
            <stop offset="0%" stopColor="#f8efe2" />
            <stop offset="60%" stopColor="#dfd0b8" />
            <stop offset="100%" stopColor="#b99c7b" />
          </radialGradient>
          <linearGradient id="threadAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d94e1f" />
            <stop offset="50%" stopColor="#f07829" />
            <stop offset="100%" stopColor="#a92f10" />
          </linearGradient>
        </defs>

        {/* 6-lobed scalloped vintage sewing button silhouette */}
        <path
          d="M60 8 C72 8 80 18 89 19 C99 20 109 30 107 42 C105 51 114 60 107 72 C102 82 103 94 92 100 C82 105 74 102 64 111 C54 116 42 107 34 103 C23 99 14 90 16 78 C17 69 7 60 14 48 C19 38 17 25 28 20 C38 15 48 8 60 8 Z"
          fill="url(#btnBase)"
          stroke="#b99d7c"
          strokeWidth="1.5"
        />

        {/* Recessed circular inner dish */}
        <circle
          cx="60"
          cy="60"
          r="29"
          fill="url(#btnWell)"
          stroke="#bfa484"
          strokeWidth="1.8"
        />
        <circle
          cx="60"
          cy="60"
          r="27"
          fill="none"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.2"
        />

        {/* Tiny burnt-orange stitch thread accent peeking on the left like Image 1 */}
        <path
          d="M15 47 C23 45 31 46 37 49"
          stroke="url(#threadAccent)"
          strokeWidth="5.5"
          strokeLinecap="round"
          opacity="0.88"
        />

        {/* Two crisp buttonholes */}
        <circle cx="49.5" cy="60" r="5.3" fill="#4f4841" />
        <circle cx="49.5" cy="60" r="3.9" fill="#899aa8" />
        <circle cx="70.5" cy="60" r="5.3" fill="#4f4841" />
        <circle cx="70.5" cy="60" r="3.9" fill="#899aa8" />
      </svg>
    </span>
  );
}

export default function CoverHero({ onTuneChannel }) {
  return (
    <div className="my-auto flex w-full flex-col items-center px-4 py-3 sm:px-6 sm:py-4 text-center">
      {/* Subtle archival broadcast tag with Group 3 logo */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#9e0b0f]/25 bg-white/55 pl-1.5 pr-3.5 py-1 text-[10px] sm:text-[11px] font-mono-retro tracking-widest uppercase text-[#7c0a0a] backdrop-blur-xs shadow-xs">
        <img
          src="/logo.jpg"
          alt="Group 3 Logo"
          className="h-5 w-5 rounded-full object-cover ring-1 ring-[#9e0b0f]/30"
        />
        <span>Art Appreciation · Final Digital Portfolio · Group 3</span>
      </div>

      {/* Reference Image 1 signature 'portfolio 2026' hero wordmark */}
      <div className="relative select-none mt-4 mb-2 sm:mt-5 sm:mb-2">
        <h1
          className="font-logo hero-wordmark relative inline-flex items-baseline font-semibold leading-none tracking-tight"
          style={{ fontSize: "clamp(3.1rem, 8.2vw, 5.9rem)" }}
        >
          <span className="inline-block -rotate-2">p</span>
          <span className="inline-block rotate-1">o</span>
          <span className="inline-block -rotate-1">r</span>
          <span className="inline-block rotate-1">t</span>
          <span className="inline-block -rotate-2 mr-[-0.04em]">f</span>
          <VintageCraftButton />
          <span className="inline-block rotate-1 ml-[-0.03em]">l</span>
          <span className="inline-block -rotate-1">i</span>
          <span className="relative inline-block rotate-2">
            o
            <span
              className="font-logo absolute -top-[0.38em] right-[-0.1em] font-bold tracking-normal text-[#a60a0d]"
              style={{ fontSize: "0.26em" }}
            >
              2026
            </span>
          </span>
        </h1>
      </div>

      {/* Full required academic portfolio title */}
      <p className="font-display mt-2 max-w-2xl text-base sm:text-xl md:text-2xl font-semibold text-[#1f2933] leading-snug">
        A Journey Through Art: From Western Art to Philippine and Bikolano Cultural Heritage
      </p>

      {/* Reference Image 1 signature vibrant paper/tape label strips (all 5 neatly on 1 row on desktop) */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl">
        {PART_CHANNELS.map((part, idx) => (
          <button
            key={part.id}
            type="button"
            onClick={() => onTuneChannel(part.id)}
            className="tape-strip cursor-pointer px-3.5 py-1.5 text-xs sm:text-[13px] font-medium tracking-wide rounded-[2px] focus:outline-none focus:ring-2 focus:ring-[#9e0b0f]"
            style={{
              backgroundColor: part.color,
              color: part.textColor,
              transform: `rotate(${idx % 2 === 0 ? -0.5 : 0.5}deg)`,
            }}
            title={`Tune to ${part.fullTitle} (${part.slideRange})`}
          >
            {part.shortTitle}
          </button>
        ))}
      </div>

      {/* Quick navigation actions */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => onTuneChannel("toc")}
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#9e0b0f] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#7c0a0a] hover:shadow-lg"
        >
          <BookOpen className="h-4 w-4" />
          <span>Table of Contents &amp; Intro</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <button
          type="button"
          onClick={() => onTuneChannel("part1")}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#1f2933]/25 bg-white/60 px-5 py-2 text-xs sm:text-sm font-semibold text-[#1f2933] backdrop-blur-xs transition-all hover:bg-white/90"
        >
          <span>Start Slide 01 / 30</span>
        </button>

        <button
          type="button"
          onClick={() => onTuneChannel("about")}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#9e0b0f]/30 bg-[#9e0b0f]/8 px-5 py-2 text-xs sm:text-sm font-semibold text-[#84090c] transition-all hover:bg-[#9e0b0f]/15"
        >
          <Users className="h-4 w-4" />
          <span>About Us (Group 3)</span>
        </button>
      </div>

      {/* Concise meta bar */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[10px] sm:text-[11px] font-mono-retro text-[#3a4856]">
        <span>5 PARTS · 30 CONTENT SLIDES</span>
        <span className="hidden sm:inline">•</span>
        <span>51 VERIFIED ARCHIVE IMAGES</span>
        <span className="hidden sm:inline">•</span>
        <span>CLICK TOP NAV FOR CRT CHANNEL SWITCH</span>
      </div>
    </div>
  );
}
