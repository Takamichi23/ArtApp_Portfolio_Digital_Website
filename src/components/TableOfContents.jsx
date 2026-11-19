import React from "react";
import { PART_CHANNELS, ALL_SLIDES, PORTFOLIO_INTRO } from "../data/portfolioData";
import { Tv, ArrowRight, Compass, Layers, CheckCircle2 } from "lucide-react";

export default function TableOfContents({ onJumpToSlide, onTuneChannel }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8 space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-[#1d2a36]/15 bg-[#f7f4ee]/90 p-5 sm:p-7 shadow-sm backdrop-blur-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#9e0b0f] px-3 py-1 text-[11px] font-mono-retro font-bold tracking-widest text-white uppercase">
            <Tv className="h-3.5 w-3.5" />
            Channel Guide &amp; Introduction
          </span>
          <span className="font-mono-retro text-xs text-[#4b5866]">
            30 Content Slides · Excluding Cover, TOC &amp; References
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18222c] leading-tight">
          {PORTFOLIO_INTRO.heading}
        </h1>
        <p className="mt-2 text-sm sm:text-base font-medium text-[#7c0a0a]">
          {PORTFOLIO_INTRO.lead}
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-[#313e4b] leading-relaxed">
          {PORTFOLIO_INTRO.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Navigation Guide Box */}
        <div className="mt-5 rounded-xl border border-[#1d2a36]/12 bg-[#edf2f6]/80 p-4">
          <div className="flex items-center gap-2 text-xs font-mono-retro font-bold uppercase tracking-wider text-[#1f2c38] mb-2">
            <Compass className="h-4 w-4 text-[#9e0b0f]" />
            <span>How to Explore This CRT Digital Portfolio</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {PORTFOLIO_INTRO.howToUse.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#374552]">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#6f8554]" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table of Contents: 5 Channel Cards */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#18222c] flex items-center gap-2">
            <Layers className="h-5 w-5 text-[#9e0b0f]" />
            <span>Table of Contents — Five Broadcast Channels</span>
          </h2>
          <button
            type="button"
            onClick={() => onTuneChannel("references")}
            className="cursor-pointer font-mono-retro text-xs font-bold text-[#9e0b0f] underline-offset-4 hover:underline"
          >
            Jump to APA References →
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PART_CHANNELS.map((part) => {
            const partSlides = ALL_SLIDES.filter((s) => s.partId === part.id);
            return (
              <div
                key={part.id}
                className="flex flex-col justify-between rounded-2xl border border-[#1d2a36]/15 bg-[#f8f6f1]/92 p-5 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className="tape-strip inline-block rounded-[2px] px-3 py-1 text-[11px] font-mono-retro font-bold uppercase tracking-wider"
                      style={{ backgroundColor: part.color, color: part.textColor }}
                    >
                      {part.osdCode} · {part.slideRange}
                    </span>
                    <button
                      type="button"
                      onClick={() => onTuneChannel(part.id)}
                      className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#9e0b0f] hover:underline"
                    >
                      <span>Tune In</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#18222c]">
                    {part.fullTitle}
                  </h3>
                  <p className="mt-1 text-xs text-[#455361] leading-relaxed">
                    {part.description}
                  </p>

                  {/* Individual Slide Direct Links */}
                  <ul className="mt-3.5 space-y-1.5 border-t border-[#1d2a36]/10 pt-3">
                    {partSlides.map((slide) => (
                      <li key={slide.id}>
                        <button
                          type="button"
                          onClick={() => onJumpToSlide(part.id, slide.slideNumber)}
                          className="group flex w-full cursor-pointer items-baseline gap-2 rounded-lg px-2 py-1 text-left text-xs text-[#26323e] transition hover:bg-[#9e0b0f]/10 hover:text-[#84090c]"
                        >
                          <span className="font-mono-retro text-[10px] font-bold text-[#9e0b0f] shrink-0">
                            {String(slide.slideNumber).padStart(2, "0")}
                          </span>
                          <span className="truncate font-medium group-hover:underline">
                            {slide.title}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
