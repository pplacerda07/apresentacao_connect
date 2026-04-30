"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative px-6 py-20 overflow-hidden bg-light">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 text-dark font-medium text-sm tracking-wide mb-8 border border-dark/10"
        >
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          O futuro da gestão automotiva chegou.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="font-barlow-condensed font-black text-fluid-h1 text-dark uppercase mb-6"
        >
          Você não precisa de mais leads.<br />
          <span className="text-orange">Você precisa de gestão.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted text-fluid-body max-w-2xl mb-12"
        >
          A falta de controle e o tempo de resposta matam suas vendas muito antes da negociação começar. Centralize tudo com o ConnectCar System.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-xl shadow-orange/20"
        >
          Teste por 15 dias grátis
        </motion.button>
      </div>

      {/* Decorative clean elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-sm font-medium"
      >
        <span className="uppercase tracking-widest text-[10px]">Role para descobrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}
