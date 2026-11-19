import React from "react";

/**
 * CRT phosphor dot-matrix & analog static channel-switch effect matched seamlessly
 * to the pale blue-grey CRT screen glass palette.
 */
export default function BlueScreenTransition({ active, channelInfo }) {
  if (!active) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-40 overflow-hidden rounded-[inherit] animate-crt-switch"
      aria-hidden="true"
    >
      {/* Curved pale blue-grey CRT tube matched to screen background */}
      <div className="absolute inset-0 crt-grey-phosphor" />

      {/* Subtle animated analog static snow */}
      <div className="absolute inset-0 crt-static-snow opacity-75" />

      {/* Phosphor dot matrix + aperture grille texture */}
      <div className="absolute inset-0 crt-phosphor-dots opacity-85" />
      <div className="absolute inset-0 crt-phosphor-grille opacity-80" />

      {/* Sweeping white glass CRT refresh highlight beam */}
      <div
        className="absolute inset-x-0 h-28 animate-crt-sweep"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.55) 50%, transparent 100%)",
        }}
      />

      {/* Retro VCR / TV On-Screen Display (OSD) readout in crisp crimson & slate ink */}
      <div className="relative z-10 flex h-full flex-col justify-between px-10 py-10 sm:px-14 sm:py-12 animate-crt-osd">
        <div className="flex items-start justify-between">
          <div className="space-y-1 drop-shadow-[0_1px_6px_rgba(255,255,255,0.85)]">
            <div className="font-osd text-2xl sm:text-4xl tracking-widest leading-none text-[#9e0b0f]">
              {channelInfo?.osdCode || "AV-1"} &nbsp;●&nbsp; VIDEO
            </div>
            <div className="font-osd text-xl sm:text-3xl tracking-wider text-[#1c2834]">
              {channelInfo?.osdTitle || "TUNING CHANNEL..."}
            </div>
          </div>
          <div className="font-osd text-lg sm:text-2xl tracking-widest text-[#2a3b4c] drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]">
            SIGNAL 60Hz
          </div>
        </div>

        <div className="flex items-end justify-between font-osd text-base sm:text-xl tracking-widest text-[#263544] drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]">
          <span className="inline-flex items-center gap-2.5">
            <img
              src="/logo.jpg"
              alt=""
              className="h-7 w-7 rounded-md border border-[#1c2834]/30 object-cover opacity-90 shadow-xs"
            />
            <span>GROUP 3 · ART APPRECIATION ARCHIVE</span>
          </span>
          <span className="animate-pulse text-[#9e0b0f]">TUNING ▓▓▓▓▓░</span>
        </div>
      </div>

      {/* Matching curved CRT glass edge shadow */}
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow:
            "inset 0 0 58px rgba(10, 18, 28, 0.58), inset 0 0 18px rgba(5, 10, 16, 0.62)",
        }}
      />
    </div>
  );
}
