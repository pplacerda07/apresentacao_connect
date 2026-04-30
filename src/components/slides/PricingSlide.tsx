"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-light">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">Investimento</span>
          <h2 className="font-barlow-condensed font-black text-fluid-h2 text-dark uppercase">
            Simples. Sem surpresa.
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Plano Mensal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm p-8 rounded-3xl bg-white border border-dark/10 shadow-lg shadow-dark/5"
          >
            <h3 className="font-bold text-2xl text-dark mb-2">Plano Mensal</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-2xl font-bold text-dark">R$</span>
              <span className="font-barlow-condensed font-black text-6xl text-dark leading-none">570</span>
              <span className="text-muted pb-1">/mês</span>
            </div>

            <ul className="space-y-4 mb-8">
              {["15 dias grátis", "Todos os módulos nativos", "Suporte 24h"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-dark/80">
                  <Check className="w-5 h-5 text-muted flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 rounded-full border-2 border-dark/10 text-dark font-bold hover:bg-dark/5 transition-colors">
              Assinar Mensal
            </button>
          </motion.div>

          {/* Plano Anual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-sm p-8 rounded-3xl bg-dark text-white shadow-2xl relative transform md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-orange/30">
              Recomendado
            </div>

            <h3 className="font-bold text-2xl text-white mb-2 mt-2">Plano Anual</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-2xl font-bold text-orange">R$</span>
              <span className="font-barlow-condensed font-black text-6xl text-orange leading-none">380</span>
              <span className="text-white/60 pb-1">/mês</span>
            </div>
            <p className="text-sm text-white/50 mb-8">Equivalente a R$ 4.560/ano</p>

            <ul className="space-y-4 mb-8">
              {["Tudo do plano mensal", "Economia de R$ 1.380/ano", "Treinamento personalizado"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 text-orange flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-full bg-orange hover:bg-orange-dark text-white font-bold transition-colors shadow-lg shadow-orange/20">
              Assinar Anual
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
