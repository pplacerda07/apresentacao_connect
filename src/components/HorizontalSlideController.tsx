"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SlideControllerProps {
  slides: React.FC<any>[];
}

export default function HorizontalSlideController({ slides }: SlideControllerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent native scroll
      e.preventDefault();

      if (isScrolling) return;

      const threshold = 30; // sensitivity
      if (Math.abs(e.deltaY) > threshold) {
        setIsScrolling(true);
        if (e.deltaY > 0) {
          goToNext();
        } else {
          goToPrev();
        }

        // Lock scrolling for a short duration to prevent double jumps
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goToNext, goToPrev, isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goToNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch Swipe navigation
  let touchStartY = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext(); // Swipe up = next
      else goToPrev(); // Swipe down = prev
    }
  };

  const ActiveSlide = slides[currentSlide];
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div 
      className="relative w-full h-[100dvh] bg-light overflow-hidden text-dark"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Logo — canto superior esquerdo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logodosistema.png"
        alt="ConnectCar System"
        style={{
          position: "absolute",
          top: "20px",
          left: "24px",
          height: "108px",
          width: "auto",
          objectFit: "contain",
          zIndex: 70,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Marca d'água centralizada — acima dos slides, blend sutil */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logodosistema.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(280px, 38vw, 560px)",
          opacity: 0.08,
          filter: "grayscale(100%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 20,
        }}
      />

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-dark/5 z-50">
        <motion.div
          className="h-full bg-orange"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={{
            enter: (dir: number) => ({
              x: dir > 0 ? "100vw" : "-100vw",
              opacity: 0,
              scale: 0.95
            }),
            center: {
              x: 0,
              opacity: 1,
              scale: 1
            },
            exit: (dir: number) => ({
              x: dir < 0 ? "100vw" : "-100vw",
              opacity: 0,
              scale: 0.95
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="w-full h-full overflow-hidden">
            <ActiveSlide />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
