import React, { useState } from "react";
import InteractiveWidget from "./InteractiveWidgets";
import { PART_CHANNELS } from "../data/portfolioData";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Quote,
  Sparkles,
} from "lucide-react";

export default function SlideViewer({
  slide,
  partSlides,
  onSelectSlideNumber,
  onPrevSlide,
  onNextSlide,
  hasPrev,
  hasNext,
  onGoReferences,
}) {
  const [lightboxArt, setLightboxArt] = useState(null);
  const partMeta = PART_CHANNELS.find((p) => p.id === slide.partId);

  return (
    <div className="mx-auto max-w-5xl px-4 py-5 sm:px-8 sm:py-7 space-y-5">
      {/* Top Slide Header Card */}
      <div className="rounded-2xl border border-[#1d2a36]/15 bg-[#f8f5ef]/92 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span
            className="tape-strip inline-block rounded-[2px] px-3 py-0.5 text-[10px] sm:text-[11px] font-mono-retro font-bold uppercase tracking-wider"
            style={{
              backgroundColor: partMeta?.color || "#9e0b0f",
              color: partMeta?.textColor || "#ffffff",
            }}
          >
            {slide.kicker}
          </span>
          <span className="font-mono-retro text-[11px] font-bold text-[#4a5765]">
            SLIDE {String(slide.slideNumber).padStart(2, "0")} OF 30
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18222c] leading-tight">
          {slide.title}
        </h1>
        <p className="mt-1 text-xs sm:text-sm font-semibold text-[#8b1115]">
          {slide.subtitle}
        </p>
        <p className="mt-3 text-xs sm:text-sm text-[#2c3947] leading-relaxed">
          {slide.summary}
        </p>

        {/* In-part quick slide pills */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[#1d2a36]/10 pt-3">
          <span className="text-[10px] font-mono-retro uppercase tracking-wider text-[#52606d] mr-1">
            {partMeta?.osdCode} Slides:
          </span>
          {partSlides.map((s) => {
            const active = s.slideNumber === slide.slideNumber;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectSlideNumber(s.slideNumber)}
                className={`cursor-pointer rounded-md px-2 py-0.5 font-mono-retro text-[11px] font-bold transition ${
                  active
                    ? "bg-[#9e0b0f] text-white shadow-xs"
                    : "bg-[#1d2a36]/8 text-[#313e4b] hover:bg-[#9e0b0f]/18"
                }`}
                title={s.title}
              >
                {String(s.slideNumber).padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Study Widget (if present on this slide) */}
      {slide.widget && <InteractiveWidget type={slide.widget} />}

      {/* Concept Cards Grid */}
      {slide.sections && slide.sections.length > 0 && (
        <div
          className={`grid gap-3.5 ${
            slide.sections.length === 1
              ? "grid-cols-1"
              : slide.sections.length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2"
          }`}
        >
          {slide.sections.map((sec, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-[#1d2a36]/12 bg-[#fbf9f5]/94 p-4 sm:p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                {sec.badge && (
                  <span className="inline-block rounded bg-[#9e0b0f]/10 px-2 py-0.5 text-[10px] font-mono-retro font-bold uppercase tracking-wider text-[#8e0d11] mb-2">
                    {sec.badge}
                  </span>
                )}
                <h2 className="font-display text-base sm:text-lg font-bold text-[#18222c] leading-snug">
                  {sec.heading}
                </h2>
                <p className="mt-2 text-xs sm:text-[13px] text-[#334150] leading-relaxed">
                  {sec.body}
                </p>
              </div>
              {sec.example && (
                <p className="mt-3 rounded-lg bg-[#edf2f6]/90 px-3 py-2 text-[11px] text-[#2c3b4a] border-l-2 border-[#9e0b0f]">
                  {sec.example}
                </p>
              )}
            </article>
          ))}
        </div>
      )}

      {/* Special Assumptions Grid (Slide 2) */}
      {slide.assumptions && (
        <div className="rounded-2xl border border-[#9e0b0f]/20 bg-[#fffaf2]/95 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-1.5 font-mono-retro text-[11px] font-bold uppercase tracking-wider text-[#9e0b0f] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Four Fundamental Assumptions of Art</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {slide.assumptions.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#9e0b0f]/15 bg-white p-3"
              >
                <div className="font-mono-retro text-xs font-bold text-[#8c0c10]">
                  {item.label}
                </div>
                <p className="mt-1 text-xs text-[#374552] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comparison Table (if present) */}
      {slide.table && (
        <div className="overflow-x-auto rounded-2xl border border-[#1d2a36]/15 bg-white/95 shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#18222c] text-white font-mono-retro text-[11px]">
                {slide.table.headers.map((h) => (
                  <th key={h} className="p-3 font-bold tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1d2a36]/10">
              {slide.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#f6f8fa]">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`p-3 align-top leading-relaxed ${
                        cIdx === 0
                          ? "font-bold text-[#18222c] bg-[#f8fafc]/70"
                          : "text-[#334150]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Museum Artwork Gallery */}
      {slide.artworks && slide.artworks.length > 0 && (
        <div
          className={`grid gap-4 ${
            slide.artworks.length === 1
              ? "grid-cols-1 max-w-2xl mx-auto"
              : slide.artworks.length === 2
              ? "sm:grid-cols-2"
              : slide.artworks.length === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2"
          }`}
        >
          {slide.artworks.map((art, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-2xl border border-[#1d2a36]/15 bg-[#fbf9f5]/96 shadow-sm flex flex-col"
            >
              <button
                type="button"
                onClick={() => setLightboxArt(art)}
                className="relative block w-full cursor-zoom-in overflow-hidden bg-[#1a222b] aspect-[16/10]"
                title="Click to inspect full artwork"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono-retro text-white opacity-90 transition group-hover:bg-[#9e0b0f]">
                  <ZoomIn className="h-3 w-3" />
                  Inspect
                </span>
              </button>

              <figcaption className="flex flex-1 flex-col justify-between p-3.5 space-y-1.5">
                <div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#18222c] leading-snug">
                    {art.title}
                  </div>
                  <div className="text-[11px] font-medium text-[#8b1115]">
                    {art.artist} · {art.year}
                  </div>
                  <div className="text-[10px] font-mono-retro text-[#586775] mt-0.5">
                    {art.medium}
                  </div>
                  <p className="mt-2 text-xs text-[#313e4b] leading-relaxed">
                    {art.caption}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#1d2a36]/8 text-[10px] text-[#64748b]">
                  Source: {art.source}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Curatorial Takeaway Callout */}
      {slide.keyTakeaway && (
        <div className="flex items-start gap-3 rounded-2xl border border-[#9e0b0f]/25 bg-[#18222c]/92 px-5 py-4 text-[#f1f5f9] shadow-sm">
          <Quote className="h-5 w-5 text-[#f4e541] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm italic leading-relaxed">
            <strong className="not-italic font-mono-retro text-[11px] uppercase tracking-wider text-[#f4e541] mr-2">
              Curatorial Takeaway:
            </strong>
            {slide.keyTakeaway}
          </p>
        </div>
      )}

      {/* Bottom Sequential Slide Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 pb-2">
        <button
          type="button"
          onClick={onPrevSlide}
          disabled={!hasPrev}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#1d2a36]/20 bg-white/80 px-4 py-2 text-xs font-semibold text-[#18222c] shadow-xs transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous Slide</span>
        </button>

        {hasNext ? (
          <button
            type="button"
            onClick={onNextSlide}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#9e0b0f] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#7c0a0a]"
          >
            <span>Next Slide ({String(slide.slideNumber + 1).padStart(2, "0")} / 30)</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onGoReferences}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#285884] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1e4366]"
          >
            <span>Proceed to References &amp; AI Disclosure</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Full-Resolution Artwork Lightbox Modal */}
      {lightboxArt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-xs"
          onClick={() => setLightboxArt(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxArt.title}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#12161c] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxArt(null)}
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-black/70 p-2 text-white hover:bg-[#9e0b0f]"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="bg-black flex items-center justify-center p-2 sm:p-4">
              <img
                src={lightboxArt.image}
                alt={lightboxArt.title}
                className="max-h-[58vh] w-auto rounded-lg object-contain"
              />
            </div>
            <div className="p-5 space-y-1.5">
              <h3 className="font-display text-xl font-bold">{lightboxArt.title}</h3>
              <p className="text-sm text-[#f4e541]">
                {lightboxArt.artist} · {lightboxArt.year}
              </p>
              <p className="text-xs font-mono-retro text-slate-300">{lightboxArt.medium}</p>
              <p className="pt-2 text-sm text-slate-200 leading-relaxed">{lightboxArt.caption}</p>
              <p className="pt-2 text-[11px] text-slate-400">
                Attribution: {lightboxArt.source}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
