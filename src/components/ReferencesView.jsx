import React from "react";
import { REFERENCE_CATEGORIES } from "../data/referencesData";
import { GROUP_INFO } from "../data/membersData";
import { BookMarked, ShieldCheck, ArrowLeft } from "lucide-react";

export default function ReferencesView({ onTuneChannel }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-8 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-[#1d2a36]/15 bg-[#f7f4ee]/92 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#334155] px-3 py-1 text-[11px] font-mono-retro font-bold tracking-widest text-white uppercase">
            <BookMarked className="h-3.5 w-3.5" />
            CH-98 · References &amp; Attributions
          </span>
          <span className="font-mono-retro text-[11px] text-[#4b5866]">
            Excluded from 20–40 Slide Count · APA 7th Edition
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18222c]">
          References, Artwork Credits &amp; Originality Statement
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-[#43515f]">
          Credible academic books, official Philippine cultural statutes, NCCA and National Museum archives, and Wikimedia Commons public-domain museum reproductions supporting Group 3&apos;s portfolio.
        </p>
      </div>

      {/* Categorized References */}
      <div className="space-y-4">
        {REFERENCE_CATEGORIES.map((group) => (
          <section
            key={group.category}
            className="rounded-2xl border border-[#1d2a36]/12 bg-[#faf8f4]/92 p-5 shadow-sm"
          >
            <h2 className="font-display text-base sm:text-lg font-bold text-[#8c0c10] border-b border-[#8c0c10]/15 pb-2 mb-3">
              {group.category}
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#26323e] leading-relaxed">
              {group.entries.map((entry, idx) => (
                <li
                  key={idx}
                  className="pl-5 -indent-5 break-words"
                >
                  {entry}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Required AI Use & Originality Disclosure (Format Requirement #5) */}
      <div className="rounded-2xl border border-[#285884]/30 bg-[#eef4f9]/95 p-5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono-retro font-bold uppercase tracking-wider text-[#1e4366] mb-2">
          <ShieldCheck className="h-4 w-4" />
          <span>Originality &amp; AI Use Disclosure (Format Requirement #5)</span>
        </div>
        <p className="text-xs sm:text-sm text-[#273849] leading-relaxed">
          {GROUP_INFO.aiDisclosure}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => onTuneChannel("toc")}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#1d2a36]/20 bg-white/75 px-4 py-2 text-xs font-semibold text-[#1d2a36] hover:bg-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Channel Guide</span>
        </button>
        <button
          type="button"
          onClick={() => onTuneChannel("about")}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#9e0b0f] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7c0a0a]"
        >
          <span>View Group 3 Members (About Us)</span>
        </button>
      </div>
    </div>
  );
}
