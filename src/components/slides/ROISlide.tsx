"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

export default function ROISlide() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    // start count automatically when the slide mounts
    const t = setTimeout(() => setStartCount(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-white">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">O Cálculo que muda tudo</span>
          <h2 className="font-barlow-condensed font-black text-fluid-h2 text-dark uppercase">
            Não é custo. É retorno.
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center py-16 px-6 rounded-3xl bg-dark text-white relative overflow-hidden shadow-2xl shadow-dark/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xl md:text-3xl text-white/80 font-medium mb-6">
              Com ticket médio de R$ 4K, <strong className="text-white">1 venda extra por mês</strong> paga:
            </p>
            
            <div className="flex items-end gap-2 text-orange mb-6">
              <span className="font-barlow-condensed font-black text-[8rem] md:text-[15rem] leading-none tracking-tighter">
                {startCount ? <CountUp start={0} end={7} duration={3} useEasing /> : "0"}
              </span>
              <span className="font-barlow-condensed font-black text-6xl md:text-9xl mb-4 md:mb-12">×</span>
            </div>
            
            <p className="text-2xl md:text-3xl tracking-widest uppercase font-bold text-white/90">
              O Investimento do Sistema
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
