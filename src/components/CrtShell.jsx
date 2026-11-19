import React from "react";
import { CHANNELS } from "../data/portfolioData";
import BlueScreenTransition from "./BlueScreenTransition";
import { Tv, Printer, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Balanced, tasteful SVG Pillow-Curved CRT Bezel Overlay.
 * Subtle outward bow along all four edges with clean rounded corners — no heavy double-bezel moat.
 */
function CurvedCrtMaskOverlay() {
  const pillowPath = `
    M 54 20
    Q 500 5 946 20
    Q 982 22 985 56
    Q 996 325 985 594
    Q 982 628 946 630
    Q 500 645 54 630
    Q 18 628 15 594
    Q 4 325 15 56
    Q 18 22 54 20
    Z
  `;

  return (
    <svg
      viewBox="0 0 1000 650"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-50 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crtRimShade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#141112" />
          <stop offset="50%" stopColor="#0b0a0b" />
          <stop offset="100%" stopColor="#1c1819" />
        </linearGradient>
        <linearGradient id="crtGlassHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.36)" />
          <stop offset="35%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="70%" stopColor="rgba(0,0,0,0.16)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
        </linearGradient>
      </defs>

      <path fill="url(#crtRimShade)" fillRule="evenodd" d={`M 0 0 H 1000 V 650 H 0 Z ${pillowPath}`} />
      <path fill="none" stroke="rgba(0,0,0,0.52)" strokeWidth="5.5" d={pillowPath} />
      <path fill="none" stroke="url(#crtGlassHighlight)" strokeWidth="2.5" d={pillowPath} />
    </svg>
  );
}

/**
 * Balanced Vintage Crimson CRT Television Frame: noticeable retro casing,
 * gentle authentic curved CRT glass, seamless floating top nav, and slim hardware chin.
 */
export default function CrtShell({
  activeChannelId,
  onSelectChannel,
  onCycleChannel,
  transitioning,
  transitionTarget,
  scanlinesOn,
  onToggleScanlines,
  slideNav,
  children,
}) {
  return (
    <div className="no-print tv-studio-backdrop flex h-screen w-screen flex-col items-center justify-center p-2 sm:p-3.5 md:p-5 overflow-hidden">
      {/* Sculpted Vintage Crimson CRT Television Cabinet — refined proportions */}
      <div className="crt-tv-outer relative flex h-full w-full max-w-[1360px] flex-col rounded-[2rem] sm:rounded-[2.6rem] px-3 pt-3 pb-2.5 sm:px-5 sm:pt-4 sm:pb-3 md:px-6 md:pt-4.5 md:pb-3.5">
        {/* Middle Row: Subtle Side Vents + Recessed Curved Screen */}
        <div className="flex flex-1 min-h-0 items-stretch gap-2 md:gap-2.5">
          {/* Slim subtle left cabinet vent ribs on wide desktops */}
          <div className="hidden xl:flex w-2.5 flex-col justify-center gap-1.5 py-16 opacity-50 select-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="h-1 w-full rounded-full bg-black/55 shadow-[0_1px_0_rgba(255,190,180,0.16)]"
              />
            ))}
          </div>

          {/* Clean Matte Charcoal CRT Bezel Shroud */}
          <div className="crt-bezel-recess relative flex flex-1 min-h-0 flex-col p-1.5 sm:p-2 md:p-2.5">
            {/* Gently Curved Convex CRT Glass Viewport */}
            <div className="crt-screen-glass relative flex flex-1 min-h-0 flex-col">
              {/* Tasteful Pillow Curved CRT Mask Overlay */}
              <CurvedCrtMaskOverlay />

              {/* Analog dust, convex glass glare & toggleable scanlines */}
              <div className="crt-analog-grain absolute inset-0 z-20" />
              <div className="crt-glass-glare absolute inset-0 z-20" />
              {scanlinesOn && (
                <div className="crt-scanlines-subtle absolute inset-0 z-20" />
              )}

              {/* Monochrome Grey CRT Static / Phosphor Channel-Switch Overlay */}
              <BlueScreenTransition
                active={transitioning}
                channelInfo={transitionTarget}
              />

              {/* TOP NAVIGATION BAR — Floats cleanly directly on the pale blue-grey glass with breathing room below the curved rim */}
              <header className="relative z-30 shrink-0 bg-gradient-to-b from-[#cbd9e6]/88 via-[#cbd9e6]/55 to-transparent px-6 pt-6 pb-2 sm:px-10 sm:pt-8 sm:pb-2.5">
                <nav
                  aria-label="Portfolio TV Channels"
                  className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:gap-x-1.5 md:gap-x-2"
                >
                  <button
                    type="button"
                    onClick={() => onSelectChannel("home")}
                    className="mr-1 inline-flex cursor-pointer items-center rounded-md border border-[#9e0b0f]/25 bg-white/60 p-0.5 shadow-xs transition hover:scale-105 hover:border-[#9e0b0f]/60"
                    title="Group 3 Home"
                  >
                    <img
                      src="/logo.jpg"
                      alt="Group 3 Logo"
                      className="h-5 w-5 sm:h-6 sm:w-6 rounded-[4px] object-cover"
                    />
                  </button>
                  {CHANNELS.map((ch) => {
                    const isActive = activeChannelId === ch.id;
                    const isAbout = ch.id === "about";
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => onSelectChannel(ch.id)}
                        className={`group relative cursor-pointer rounded px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-mono-retro font-bold tracking-[0.13em] uppercase transition-all ${
                          isActive
                            ? "bg-[#9e0b0f] text-[#f5f8fb] shadow-sm"
                            : isAbout
                            ? "border border-[#9e0b0f]/45 bg-[#9e0b0f]/10 text-[#8f0c0f] hover:bg-[#9e0b0f] hover:text-white"
                            : "text-[#8e171a]/82 hover:bg-[#9e0b0f]/12 hover:text-[#7a090c]"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          {isActive && (
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ffe867] animate-pulse" />
                          )}
                          {ch.navLabel}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </header>

              {/* Main Scrollable CRT Screen Content */}
              <main
                id="crt-content-scroll"
                className="crt-scroll relative z-10 flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3 sm:px-6 pb-5"
              >
                <div
                  key={`${activeChannelId}-${slideNav?.currentSlideNumber ?? "view"}`}
                  className="flex min-h-full flex-col animate-content-reveal"
                >
                  {children}
                </div>
              </main>
            </div>
          </div>

          {/* Slim subtle right cabinet vent ribs on wide desktops */}
          <div className="hidden xl:flex w-2.5 flex-col justify-center gap-1.5 py-16 opacity-50 select-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="h-1 w-full rounded-full bg-black/55 shadow-[0_1px_0_rgba(255,190,180,0.16)]"
              />
            ))}
          </div>
        </div>

        {/* Sleek Vintage TV Front Control Chin */}
        <footer className="mt-2 sm:mt-2.5 flex flex-wrap items-center justify-between gap-2.5 rounded-xl border border-black/40 bg-gradient-to-b from-[#2b0b0d]/85 to-[#170607]/95 px-3.5 py-1.5 sm:px-5 sm:py-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7),0_1px_0_rgba(255,190,180,0.14)] select-none">
          {/* Left: Compact Speaker Grille + Power LED */}
          <div className="flex items-center gap-2.5">
            <div
              className="tv-speaker-grille hidden sm:block h-5 w-16 md:w-20 rounded-sm border border-black/40"
              aria-hidden="true"
            />
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full border border-black/50 transition-all ${
                  transitioning
                    ? "bg-[#e5e7eb] shadow-[0_0_8px_#f8fafc]"
                    : "bg-[#4ade80] shadow-[0_0_7px_#4ade80]"
                }`}
              />
              <span className="font-mono-retro text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#f3d6d6]/85">
                {transitioning ? "TUNING" : "ON AIR"}
              </span>
            </div>
          </div>

          {/* Center: Embossed Brand Badge OR Slide Switcher */}
          {slideNav ? (
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-2 py-0.5 shadow-inner">
              <button
                type="button"
                onClick={slideNav.onPrev}
                disabled={!slideNav.hasPrev}
                className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono-retro font-bold text-white/90 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
                title="Previous Slide (Left Arrow)"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span>PREV</span>
              </button>
              <span className="font-osd text-base sm:text-lg tracking-wider text-[#f3e5b5] px-1">
                SLIDE {String(slideNav.currentSlideNumber).padStart(2, "0")} / 30
              </span>
              <button
                type="button"
                onClick={slideNav.onNext}
                disabled={!slideNav.hasNext}
                className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono-retro font-bold text-white/90 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
                title="Next Slide (Right Arrow)"
              >
                <span>NEXT</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-md border border-[#ffd8d2]/15 bg-black/35 px-3 py-0.5 text-center shadow-inner">
              <img
                src="/logo.jpg"
                alt="Group 3 Emblem"
                className="h-4 w-4 rounded-[3px] object-cover opacity-90"
              />
              <span className="font-mono-retro text-[10px] font-bold tracking-[0.24em] uppercase text-[#f0d8d8]/80">
                GROUP 3 · PORTFOLIO 2026
              </span>
            </div>
          )}

          {/* Right: Rotary CH Dial + CRT Toggle + PDF Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={onCycleChannel}
              className="group flex cursor-pointer items-center gap-1.5 text-[10px] font-mono-retro text-[#f0d8d8]/80 hover:text-white"
              title="Click rotary dial to tune next channel"
            >
              <span className="tv-dial-knob relative flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 group-hover:rotate-45 group-active:rotate-90">
                <span className="h-2 w-[2px] -translate-y-1 rounded-full bg-[#e5e7eb]" />
              </span>
              <span className="hidden sm:inline tracking-wider">CH</span>
            </button>

            <button
              type="button"
              onClick={onToggleScanlines}
              className={`inline-flex cursor-pointer items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono-retro tracking-wider transition ${
                scanlinesOn
                  ? "border-white/30 bg-white/15 text-white shadow-inner"
                  : "border-white/12 bg-black/35 text-white/60 hover:text-white"
              }`}
              title="Toggle subtle CRT scanlines"
            >
              <Tv className="h-3 w-3" />
              <span className="hidden sm:inline">CRT {scanlinesOn ? "ON" : "OFF"}</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-white/15 bg-black/35 px-2 py-0.5 text-[10px] font-mono-retro tracking-wider text-white/80 transition hover:bg-white/15 hover:text-white"
              title="Export or Print Portfolio as PDF"
            >
              <Printer className="h-3 w-3" />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
