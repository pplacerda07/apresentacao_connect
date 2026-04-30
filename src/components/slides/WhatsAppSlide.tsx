"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhatsAppSlide() {
  const features = ["Multi-atendentes no mesmo número", "Fila de distribuição automática", "Áudios e mídias salvos no CRM"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-light">
      <div className="slide-feature-row max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* Visual Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="slide-emoji-box relative w-64 h-64 md:w-96 md:h-96 rounded-[3rem] bg-white shadow-2xl shadow-dark/5 ring-1 ring-dark/5 flex items-center justify-center text-7xl md:text-9xl group">
            <div className="absolute inset-0 bg-dark/5 rounded-[3rem] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative z-10"
            >
              💬
            </motion.div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="slide-badge px-4 py-2 rounded-full bg-dark/5 text-dark font-bold text-sm tracking-wide mb-6"
          >
            Função 02
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="slide-feature-title font-barlow-condensed font-black text-5xl md:text-6xl text-dark mb-4"
          >
            WhatsApp Integrado
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="slide-feature-desc text-xl md:text-2xl text-muted mb-10 max-w-lg"
          >
            Histórico completo, sem caos. Todos os vendedores usam o mesmo número oficial da loja, e o gestor vê tudo.
          </motion.p>

          <div className="slide-features-list flex flex-col gap-5 w-full max-w-md">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="slide-feature-card flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-dark/5"
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
  );
}
