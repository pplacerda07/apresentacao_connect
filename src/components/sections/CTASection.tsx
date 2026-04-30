"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-32 px-6 bg-white flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at center, #FF8000 0%, transparent 50%)',
        transform: 'translateY(30%)'
      }} />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-barlow-condensed font-black text-fluid-h1 text-dark uppercase mb-6"
        >
          Pronto para vender mais todos os dias?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted text-xl mb-12 max-w-lg"
        >
          Não deixe mais nenhum lead esfriar no seu WhatsApp. A mudança começa hoje.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange text-white font-bold text-xl px-10 py-5 rounded-full shadow-2xl shadow-orange/30 hover:bg-orange-dark transition-colors mb-8"
        >
          Quero meus 15 dias grátis
        </motion.button>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 text-dark font-medium hover:text-orange transition-colors"
        >
          Falar com um especialista <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      <div className="w-full mt-32 text-center text-muted/50 text-sm font-bold tracking-widest uppercase relative z-10">
        ConnectCar System © 2026
      </div>
    </section>
  );
}
