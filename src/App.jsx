import React, { useState, useRef, useEffect, useCallback } from "react";
import { CHANNELS, ALL_SLIDES } from "./data/portfolioData";
import CrtShell from "./components/CrtShell";
import CoverHero from "./components/CoverHero";
import TableOfContents from "./components/TableOfContents";
import SlideViewer from "./components/SlideViewer";
import ReferencesView from "./components/ReferencesView";
import AboutUsView from "./components/AboutUsView";
import PrintPortfolio from "./components/PrintPortfolio";

export default function App() {
  const [activeChannel, setActiveChannel] = useState("home");
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState(null);
  const [scanlinesOn, setScanlinesOn] = useState(true);

  const swapTimerRef = useRef(null);
  const endTimerRef = useRef(null);

  const scrollScreenTop = () => {
    const el = document.getElementById("crt-content-scroll");
    if (el) el.scrollTo({ top: 0, behavior: "instant" });
  };

  /**
   * Triggers the glowing blue CRT phosphor TV channel-switch effect (Reference Image 2)
   * whenever the user clicks a top nav link, cover strip, TOC item, or switches parts.
   */
  const tuneToChannel = useCallback((targetChannelId, optionalSlideNumber = null) => {
    const channelMeta =
      CHANNELS.find((c) => c.id === targetChannelId) || CHANNELS[0];

    // Clear any in-flight timers if user clicks rapidly
    if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
    if (endTimerRef.current) clearTimeout(endTimerRef.current);

    setTransitionTarget(channelMeta);
    setTransitioning(true);

    // Swap screen content right while blue phosphor CRT covers 100% of screen
    swapTimerRef.current = setTimeout(() => {
      setActiveChannel(targetChannelId);
      if (targetChannelId.startsWith("part")) {
        if (optionalSlideNumber !== null) {
          setCurrentSlideNumber(optionalSlideNumber);
        } else {
          const firstInPart = ALL_SLIDES.find((s) => s.partId === targetChannelId);
          if (firstInPart) setCurrentSlideNumber(firstInPart.slideNumber);
        }
      }
      scrollScreenTop();
    }, 260);

    // Complete blue CRT channel switch animation
    endTimerRef.current = setTimeout(() => {
      setTransitioning(false);
    }, 690);
  }, []);

  useEffect(() => {
    return () => {
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      if (endTimerRef.current) clearTimeout(endTimerRef.current);
    };
  }, []);

  const isPartView = activeChannel.startsWith("part");
  const activeSlide =
    ALL_SLIDES.find((s) => s.slideNumber === currentSlideNumber) || ALL_SLIDES[0];
  const partSlides = ALL_SLIDES.filter((s) => s.partId === activeSlide.partId);

  const goToSlideNumber = useCallback(
    (nextNumber) => {
      const target = ALL_SLIDES.find((s) => s.slideNumber === nextNumber);
      if (!target) return;
      // Trigger the full blue CRT TV channel-switch effect whenever crossing to a new Part
      if (target.partId !== activeChannel) {
        tuneToChannel(target.partId, target.slideNumber);
      } else {
        setCurrentSlideNumber(target.slideNumber);
        scrollScreenTop();
      }
    },
    [activeChannel, tuneToChannel]
  );

  const handlePrevSlide = useCallback(() => {
    if (currentSlideNumber > 1) goToSlideNumber(currentSlideNumber - 1);
  }, [currentSlideNumber, goToSlideNumber]);

  const handleNextSlide = useCallback(() => {
    if (currentSlideNumber < ALL_SLIDES.length) {
      goToSlideNumber(currentSlideNumber + 1);
    }
  }, [currentSlideNumber, goToSlideNumber]);

  // Keyboard Arrow Navigation when browsing slides
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isPartView || transitioning) return;
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPartView, transitioning, handleNextSlide, handlePrevSlide]);

  const slideNav = isPartView
    ? {
        currentSlideNumber,
        hasPrev: currentSlideNumber > 1,
        hasNext: currentSlideNumber < ALL_SLIDES.length,
        onPrev: handlePrevSlide,
        onNext: handleNextSlide,
      }
    : null;

  const handleCycleChannel = useCallback(() => {
    const idx = CHANNELS.findIndex((c) => c.id === activeChannel);
    const nextChannel = CHANNELS[(idx + 1) % CHANNELS.length];
    tuneToChannel(nextChannel.id);
  }, [activeChannel, tuneToChannel]);

  return (
    <>
      <CrtShell
        activeChannelId={activeChannel}
        onSelectChannel={(id) => tuneToChannel(id)}
        onCycleChannel={handleCycleChannel}
        transitioning={transitioning}
        transitionTarget={transitionTarget}
        scanlinesOn={scanlinesOn}
        onToggleScanlines={() => setScanlinesOn((s) => !s)}
        slideNav={slideNav}
      >
        {activeChannel === "home" && (
          <CoverHero onTuneChannel={(id) => tuneToChannel(id)} />
        )}

        {activeChannel === "toc" && (
          <TableOfContents
            onJumpToSlide={(partId, slideNum) => tuneToChannel(partId, slideNum)}
            onTuneChannel={(id) => tuneToChannel(id)}
          />
        )}

        {isPartView && (
          <SlideViewer
            slide={activeSlide}
            partSlides={partSlides}
            onSelectSlideNumber={(num) => goToSlideNumber(num)}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
            hasPrev={currentSlideNumber > 1}
            hasNext={currentSlideNumber < ALL_SLIDES.length}
            onGoReferences={() => tuneToChannel("references")}
          />
        )}

        {activeChannel === "references" && (
          <ReferencesView onTuneChannel={(id) => tuneToChannel(id)} />
        )}

        {activeChannel === "about" && (
          <AboutUsView onTuneChannel={(id) => tuneToChannel(id)} />
        )}
      </CrtShell>

      {/* Clean printable PDF view for Google Classroom backup submission */}
      <PrintPortfolio />
    </>
  );
}
