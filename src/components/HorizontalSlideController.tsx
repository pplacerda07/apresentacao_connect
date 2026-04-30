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

  // Touch Swipe navigation — suporta gesto horizontal e vertical
  let touchStartX = 0;
  let touchStartY = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX; // positivo = swipe esquerda
    const diffY = touchStartY - touchEndY; // positivo = swipe cima
    const threshold = 40;

    const absX = Math.abs(diffX);
    const absY = Math.abs(diffY);

    if (absX < threshold && absY < threshold) return;

    if (absX >= absY) {
      // Gesto horizontal — sempre navega entre slides
      if (diffX > 0) goToNext(); // swipe para esquerda = próximo
      else goToPrev();            // swipe para direita = anterior
    } else {
      // Gesto vertical — só navega se o conteúdo interno não tem mais scroll
      const scrollable = e.currentTarget.querySelector(".slide-mobile-scale");
      if (scrollable) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 2;
        if (diffY > 0 && !atBottom) return; // ainda tem conteúdo abaixo
        if (diffY < 0 && !atTop) return;    // ainda tem conteúdo acima
      }
      if (diffY > 0) goToNext();
      else goToPrev();
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
        className="corner-logo"
        style={{
          position: "absolute",
          top: "20px",
          left: "24px",
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
          <div className="slide-mobile-scale">
            <div className="min-h-full">
              <ActiveSlide />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
