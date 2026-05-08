import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const StartSection = () => {
  return (
    <section id="services" className="relative bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkles size={18} className="text-black" />
          <span className="text-sm uppercase tracking-[0.2em] text-[#6F6F6F]">
            Where it begins
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-normal leading-[1.05] tracking-[-1.5px] text-black max-w-5xl"
        >
          Every great product begins as a quiet
          <span className="italic text-[#6F6F6F]"> idea</span> — patiently
          shaped, then carefully released into the world.
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              title: "Discover",
              copy: "We listen first. Workshops and discovery sprints to surface what you actually mean to make.",
            },
            {
              n: "02",
              title: "Design",
              copy: "We co-create reference frames, motion sketches, and prototypes — paired with the AI tools that move them faster.",
            },
            {
              n: "03",
              title: "Deliver",
              copy: "Production-grade websites, design systems, and AI-augmented surfaces that ship and scale.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="rounded-3xl border border-black/10 p-8 hover:border-black/30 transition-colors"
            >
              <div className="text-[#6F6F6F] text-sm tracking-widest mb-6">{step.n}</div>
              <h3 className="text-2xl font-heading text-black mb-3">{step.title}</h3>
              <p className="text-[#6F6F6F] leading-relaxed">{step.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartSection;
