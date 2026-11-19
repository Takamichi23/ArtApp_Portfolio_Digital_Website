import React from "react";
import { GROUP_INFO, GROUP_MEMBERS } from "../data/membersData";
import { Users, Calendar, Award, Sparkles, ArrowLeft, Code2 } from "lucide-react";

export default function AboutUsView({ onTuneChannel }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8 space-y-6">
      {/* Group Banner */}
      <div className="rounded-2xl border border-[#9e0b0f]/20 bg-[#f7f4ee]/94 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#9e0b0f] px-3 py-1 text-[11px] font-mono-retro font-bold tracking-widest text-white uppercase">
            <Users className="h-3.5 w-3.5" />
            CH-99 · About Us · {GROUP_INFO.groupName}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono-retro text-xs text-[#4a5764]">
            <Calendar className="h-3.5 w-3.5 text-[#9e0b0f]" />
            Submission Target: {GROUP_INFO.submissionDate}
          </span>
        </div>

        <div className="flex items-center gap-3.5">
          <img
            src="/logo.jpg"
            alt="Group 3 Studio Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl border border-[#9e0b0f]/25 object-cover shadow-sm"
          />
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18222c] leading-tight">
              Meet {GROUP_INFO.groupName} — Curators &amp; Creators
            </h1>
          </div>
        </div>
        <p className="mt-1.5 text-xs sm:text-sm text-[#404e5b] max-w-3xl leading-relaxed">
          <strong className="text-[#18222c]">{GROUP_INFO.title}</strong> is a collaborative{" "}
          {GROUP_INFO.course} final digital portfolio developed by all{" "}
          <strong>{GROUP_INFO.totalMembers} members</strong> of {GROUP_INFO.groupName}. Every member contributed research, visual curation, critical analysis, or technical craftsmanship across all five parts.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono-retro">
          <span className="rounded-md bg-[#18222c]/8 px-2.5 py-1 text-[#18222c]">
            COURSE: {GROUP_INFO.course}
          </span>
          <span className="rounded-md bg-[#18222c]/8 px-2.5 py-1 text-[#18222c]">
            TEAM SIZE: {GROUP_INFO.totalMembers} MEMBERS
          </span>
          <span className="rounded-md bg-[#9e0b0f]/12 px-2.5 py-1 text-[#8c0c10] font-bold">
            FINAL PERFORMANCE TASK (100 PTS)
          </span>
        </div>
      </div>

      {/* 10 Member Roster Grid */}
      <div className="grid gap-3.5 sm:grid-cols-2">
        {GROUP_MEMBERS.map((member, index) => (
          <article
            key={member.id}
            className="flex flex-col justify-between rounded-2xl border border-[#1d2a36]/14 bg-[#faf8f4]/94 p-4 sm:p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono-retro text-xs font-bold text-white shadow-xs"
                    style={{ backgroundColor: member.badgeColor }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-sm sm:text-base font-bold text-[#18222c] leading-snug">
                    {member.name}
                  </h2>
                </div>
              </div>

              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#18222c]/7 px-2.5 py-0.5 text-[11px] font-semibold text-[#2d3a47]">
                  <Award className="h-3 w-3 text-[#9e0b0f]" />
                  <span>{member.role}</span>
                </span>
                {member.isDeveloper && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#9e0b0f] px-2.5 py-0.5 text-[10px] font-mono-retro font-bold uppercase tracking-wider text-white shadow-xs">
                    <Code2 className="h-3 w-3" />
                    <span>Developer</span>
                  </span>
                )}
              </div>

              <p className="mt-2.5 text-xs text-[#414f5c] leading-relaxed">
                {member.contribution}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Note on collaborative accountability */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#1d2a36]/12 bg-[#f1f5f9]/90 px-5 py-4 text-xs text-[#334155]">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#9e0b0f] shrink-0" />
          <span>
            All 10 Group 3 members are formally acknowledged per Format &amp; Submission Requirement #6.
          </span>
        </div>
        <button
          type="button"
          onClick={() => onTuneChannel("home")}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#18222c] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#9e0b0f] transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Return to Cover</span>
        </button>
      </div>
    </div>
  );
}
