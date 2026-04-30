import HorizontalSlideController from "@/components/HorizontalSlideController";

import HeroSlide from "@/components/slides/HeroSlide";
import ProblemSlide from "@/components/slides/ProblemSlide";
import KanbanSlide from "@/components/slides/KanbanSlide";
import WhatsAppSlide from "@/components/slides/WhatsAppSlide";
import EstoqueSlide from "@/components/slides/EstoqueSlide";
import PortaisSlide from "@/components/slides/PortaisSlide";
import DRESlide from "@/components/slides/DRESlide";
import NotaFiscalSlide from "@/components/slides/NotaFiscalSlide";
import ContratoSlide from "@/components/slides/ContratoSlide";
import ROISlide from "@/components/slides/ROISlide";
import PricingSlide from "@/components/slides/PricingSlide";
import CTASlide from "@/components/slides/CTASlide";

export default function Home() {
  const slides = [
    HeroSlide,
    ProblemSlide,
    KanbanSlide,
    WhatsAppSlide,
    EstoqueSlide,
    PortaisSlide,
    DRESlide,
    NotaFiscalSlide,
    ContratoSlide,
    ROISlide,
    PricingSlide,
    CTASlide
  ];

  return (
    <main className="w-full h-screen selection:bg-orange/30 selection:text-orange-dark bg-light">
      <HorizontalSlideController slides={slides} />
    </main>
  );
}
