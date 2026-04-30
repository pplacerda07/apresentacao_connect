"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  const problems = [
    "Aproximadamente R$ 12.000 mensais perdidos por leads que somem no WhatsApp.",
    "Decisões tomadas baseadas em achismos por falta de um funil de vendas centralizado.",
    "A demora na primeira resposta faz o cliente fechar com o concorrente ao lado."
  ];

  return (
    <section className="w-full py-32 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">A dura realidade</span>
          <h2 className="font-barlow-condensed font-black text-fluid-h2 text-dark uppercase leading-tight">
            Vender veículos ficou mais complexo.<br/>O cliente não espera mais.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 border-l-2 border-dark/5 pl-6 md:pl-12">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-2 w-3 h-3 rounded-full bg-orange ring-4 ring-white" />
              <p className="text-2xl md:text-3xl font-medium text-dark/80 leading-relaxed max-w-2xl">
                {prob}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
