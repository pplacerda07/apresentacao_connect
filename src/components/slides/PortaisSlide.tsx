"use client";
import { motion } from "framer-motion";

export default function PortaisSlide() {
  const portais = [
    { name: "Shopcar", color: "text-red-600" },
    { name: "NaPista", color: "text-blue-500" },
    { name: "Usados Br", color: "text-orange-500" },
    { name: "iCarros", color: "text-blue-600" }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-6 bg-white">
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">Distribuição Inteligente</span>
          <h2 className="font-barlow-condensed font-black text-fluid-h2 text-dark uppercase leading-tight">
            Integração com os maiores<br />Portais de Anunciantes
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted mb-20 max-w-2xl mx-auto"
        >
          Publique, atualize e gerencie todo o seu estoque simultaneamente. Sem precisar abrir o painel de cada plataforma.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portais.map((portal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.4 + i * 0.1 }}
              className="aspect-square rounded-[2rem] bg-light flex flex-col items-center justify-center shadow-lg shadow-dark/5 ring-1 ring-dark/5"
            >
              <div className={`font-black text-2xl md:text-3xl ${portal.color}`}>
                {portal.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
