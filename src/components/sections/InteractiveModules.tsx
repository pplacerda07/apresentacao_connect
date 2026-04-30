"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const MODULES = [
  {
    id: "kanban",
    title: "Funil Kanban",
    subtitle: "Visibilidade total de cada lead.",
    features: ["Arraste e solte para avançar o lead", "Alerta de tempo sem contato", "Histórico de negociação"],
    color: "bg-orange",
    icon: "📊"
  },
  {
    id: "whatsapp",
    title: "WhatsApp Integrado",
    subtitle: "Histórico completo, sem caos.",
    features: ["Multi-atendentes no mesmo número", "Fila de distribuição automática", "Áudios e mídias salvos no CRM"],
    color: "bg-blue-600",
    icon: "💬"
  },
  {
    id: "estoque",
    title: "Gestão de Estoque",
    subtitle: "Semáforo verde, amarelo, vermelho.",
    features: [
      "Integração com principais portais de anunciantes (Webmotors, iCarros, OLX, etc)", 
      "Idade do veículo no pátio", 
      "Precificação dinâmica"
    ],
    color: "bg-green-600",
    icon: "🚗"
  },
  {
    id: "financeiro",
    title: "DRE & Fechamento",
    subtitle: "Lucro real de cada operação.",
    features: ["Cálculo automático de comissão", "Despesas atreladas à placa", "Fluxo de caixa integrado"],
    color: "bg-indigo-600",
    icon: "💰"
  }
];

export default function InteractiveModules() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-light">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Fixed Header indicating the section */}
        <div className="absolute top-10 md:top-20 left-0 w-full z-10 px-6">
          <div className="max-w-6xl mx-auto w-full text-center md:text-left">
            <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">A Solução</span>
            <h2 className="font-barlow-condensed font-black text-fluid-h2 text-dark uppercase">
              Tudo o que você precisa. Em uma tela.
            </h2>
          </div>
        </div>

        <motion.div style={{ x }} className="flex h-full items-center pt-24 md:pt-0">
          {MODULES.map((mod, i) => (
            <div 
              key={mod.id} 
              className="w-screen h-full flex-shrink-0 flex items-center justify-center px-6"
            >
              <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-20">
                
                {/* Visual / Icon Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-[3rem] bg-white shadow-2xl shadow-dark/5 ring-1 ring-dark/5 flex items-center justify-center text-7xl md:text-9xl group">
                    <div className="absolute inset-0 bg-dark/5 rounded-[3rem] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 100 }}
                      className="relative z-10"
                    >
                      {mod.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="px-4 py-2 rounded-full bg-dark/5 text-dark font-bold text-sm tracking-wide mb-6">
                    Módulo 0{i + 1}
                  </div>
                  <h3 className="font-barlow-condensed font-black text-5xl md:text-6xl text-dark mb-4">
                    {mod.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-muted mb-10 max-w-lg">
                    {mod.subtitle}
                  </p>

                  <div className="flex flex-col gap-5 w-full max-w-md">
                    {mod.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-dark/5"
                      >
                        <div className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-5 h-5 text-orange" />
                        </div>
                        <span className="text-dark font-medium text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
