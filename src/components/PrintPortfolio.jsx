import React from "react";
import { ALL_SLIDES, PORTFOLIO_INTRO, PART_CHANNELS } from "../data/portfolioData";
import { GROUP_INFO, GROUP_MEMBERS } from "../data/membersData";
import { REFERENCE_CATEGORIES } from "../data/referencesData";

/**
 * Clean white-paper printable layout (only rendered during window.print() / Export PDF).
 */
export default function PrintPortfolio() {
  return (
    <div className="hidden print:block bg-white text-[#18222c] p-8 space-y-10">
      {/* Cover Page */}
      <section className="break-after-page py-16 text-center space-y-4 border-b-2 border-[#9e0b0f]">
        <img
          src="/logo.jpg"
          alt="Group 3 Logo"
          className="h-16 w-16 mx-auto rounded-xl border border-[#9e0b0f]/25 object-cover shadow-xs"
        />
        <div className="font-mono-retro text-xs uppercase tracking-widest text-[#9e0b0f]">
          {GROUP_INFO.course} · Final Performance Task · {GROUP_INFO.groupName}
        </div>
        <h1 className="font-display text-4xl font-bold text-[#9e0b0f]">
          Portfolio 2026
        </h1>
        <h2 className="font-display text-2xl font-bold max-w-2xl mx-auto">
          {GROUP_INFO.title}
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto pt-4">
          {PORTFOLIO_INTRO.lead}
        </p>
        <div className="pt-8 text-left max-w-xl mx-auto">
          <h3 className="font-mono-retro text-xs font-bold uppercase text-[#9e0b0f] mb-2">
            Group 3 Members &amp; Roles
          </h3>
          <ul className="space-y-1 text-xs">
            {GROUP_MEMBERS.map((m, i) => (
              <li key={m.id}>
                <strong>{i + 1}. {m.name}</strong> — {m.role} ({m.contribution})
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="break-after-page space-y-4">
        <h2 className="font-display text-2xl font-bold text-[#9e0b0f]">
          Table of Contents &amp; Curatorial Introduction
        </h2>
        {PORTFOLIO_INTRO.paragraphs.map((p, i) => (
          <p key={i} className="text-xs leading-relaxed text-slate-700">{p}</p>
        ))}
        <div className="grid grid-cols-1 gap-3 pt-2">
          {PART_CHANNELS.map((part) => (
            <div key={part.id} className="border border-slate-200 rounded-lg p-3">
              <div className="font-bold text-sm">
                {part.fullTitle} ({part.slideRange})
              </div>
              <p className="text-xs text-slate-600">{part.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All 30 Content Slides */}
      {ALL_SLIDES.map((slide) => (
        <section key={slide.id} className="break-after-page space-y-3 py-2">
          <div className="flex justify-between items-baseline border-b border-slate-300 pb-1">
            <span className="font-mono-retro text-[10px] font-bold text-[#9e0b0f]">
              {slide.kicker}
            </span>
            <span className="font-mono-retro text-[10px] text-slate-500">
              SLIDE {String(slide.slideNumber).padStart(2, "0")} / 30
            </span>
          </div>
          <h2 className="font-display text-xl font-bold">{slide.title}</h2>
          <p className="text-xs italic text-[#8b1115]">{slide.subtitle}</p>
          <p className="text-xs leading-relaxed text-slate-800">{slide.summary}</p>

          {slide.sections && (
            <div className="grid grid-cols-2 gap-3 pt-1">
              {slide.sections.map((sec, idx) => (
                <div key={idx} className="border border-slate-200 rounded p-2.5">
                  <div className="text-[10px] font-mono-retro font-bold text-[#9e0b0f]">
                    {sec.badge}
                  </div>
                  <div className="font-bold text-xs">{sec.heading}</div>
                  <p className="text-[11px] text-slate-700 mt-1">{sec.body}</p>
                </div>
              ))}
            </div>
          )}

          {slide.artworks && slide.artworks.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-2">
              {slide.artworks.map((a, idx) => (
                <div key={idx} className="border border-slate-200 rounded p-1.5">
                  <img src={a.image} alt={a.title} className="h-28 w-full object-cover rounded-xs" />
                  <div className="text-[10px] font-bold mt-1">{a.title}</div>
                  <div className="text-[9px] text-slate-600">{a.artist} ({a.year})</div>
                </div>
              ))}
            </div>
          )}

          {slide.keyTakeaway && (
            <p className="text-[11px] italic border-l-2 border-[#9e0b0f] pl-2.5 text-slate-700 pt-1">
              <strong>Takeaway:</strong> {slide.keyTakeaway}
            </p>
          )}
        </section>
      ))}

      {/* References */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold text-[#9e0b0f]">
          References &amp; AI Use Disclosure
        </h2>
        {REFERENCE_CATEGORIES.map((cat) => (
          <div key={cat.category} className="space-y-1">
            <h3 className="font-bold text-sm">{cat.category}</h3>
            <ul className="space-y-1 text-[11px] text-slate-700">
              {cat.entries.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border border-slate-300 rounded p-3 text-xs">
          <strong>Originality &amp; AI Disclosure:</strong> {GROUP_INFO.aiDisclosure}
        </div>
      </section>
    </div>
  );
}
