"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";

export default function ROISection() {
  const [startCount, setStartCount] = useState(false);

  return (
    <section className="w-full py-32 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">O Cálculo que muda tudo</span>
          <h2 className="font-barlow-condensed font-black text-fluid-h2 text-dark uppercase">
            Não é custo. É retorno.
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center py-16 px-6 rounded-3xl bg-dark text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setStartCount(true)}
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-6">
              Com ticket médio de R$ 4K, <strong className="text-white">1 venda extra por mês</strong> paga:
            </p>
            
            <div className="flex items-end gap-2 text-orange mb-6">
              <span className="font-barlow-condensed font-black text-[8rem] md:text-[12rem] leading-none tracking-tighter">
                {startCount ? <CountUp start={0} end={7} duration={3} useEasing /> : "0"}
              </span>
              <span className="font-barlow-condensed font-black text-6xl md:text-8xl mb-4 md:mb-8">×</span>
            </div>
            
            <p className="text-2xl tracking-widest uppercase font-bold text-white/90">
              O Investimento do Sistema
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
