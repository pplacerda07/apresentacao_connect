"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative overflow-hidden bg-white px-6">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, #FF8000 0%, transparent 50%)',
        transform: 'translateY(30%)'
      }} />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-barlow-condensed font-black text-fluid-h1 text-dark uppercase mb-6"
        >
          Pronto para vender mais todos os dias?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted text-xl mb-12 max-w-lg"
        >
          Não deixe mais nenhum lead esfriar no seu WhatsApp. A mudança começa hoje.
        </motion.p>

        <motion.a
          href="https://wa.me/556793374370?text=Quero%20contratar%20o%20sistema!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange text-white font-bold text-xl px-10 py-5 rounded-full shadow-2xl shadow-orange/30 hover:bg-orange-dark transition-colors mb-8 inline-block"
        >
          Quero meus 15 dias grátis
        </motion.a>

        <motion.a
          href="https://wa.me/556793374370?text=Quero%20contratar%20o%20sistema!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 text-dark font-medium hover:text-orange transition-colors"
        >
          Falar com um especialista <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      <div className="absolute bottom-10 text-center text-muted/50 text-sm font-bold tracking-widest uppercase z-10">
        ConnectCar System © 2026
      </div>
    </div>
  );
}
