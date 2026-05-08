import { motion } from "framer-motion";
import { Brain, Layers, Wand2, Workflow } from "lucide-react";

type Feature = {
  icon: typeof Brain;
  title: string;
  copy: string;
  tone: "dark" | "light";
};

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI that listens.",
    copy: "Models tuned around your brand voice. Drafts that sound like you, not like everyone.",
    tone: "dark",
  },
  {
    icon: Layers,
    title: "Design systems that breathe.",
    copy: "Tokens, components, and motion language — built once, evolved together with your team.",
    tone: "light",
  },
  {
    icon: Wand2,
    title: "Surfaces that adapt.",
    copy: "Personalised pages, generated visuals, and live experiences that reshape with each visitor.",
    tone: "light",
  },
  {
    icon: Workflow,
    title: "Workflows that compound.",
    copy: "Editorial, commerce, ops — wired into one quiet system you can actually trust.",
    tone: "dark",
  },
];

const FeaturesChess = () => {
  return (
    <section className="relative bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-normal leading-[1.05] tracking-[-1.2px] text-black max-w-3xl">
            A practice for the <span className="italic text-[#6F6F6F]">post-template</span> web.
          </h2>
          <p className="text-[#6F6F6F] max-w-md leading-relaxed">
            Four disciplines, woven together. Pick a starting point — the rest reveals itself
            as we work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isDark = f.tone === "dark";
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                viewport={{ once: true }}
                className={`rounded-[2rem] p-10 min-h-[280px] flex flex-col justify-between ${
                  isDark
                    ? "bg-black text-white"
                    : "bg-[#F4F4F2] text-black border border-black/5"
                }`}
              >
                <Icon size={28} className={isDark ? "text-white" : "text-black"} />
                <div className="mt-12">
                  <h3 className="text-3xl md:text-4xl font-heading leading-[1.05] tracking-[-0.5px]">
                    {f.title}
                  </h3>
                  <p
                    className={`mt-4 leading-relaxed max-w-md ${
                      isDark ? "text-white/70" : "text-[#6F6F6F]"
                    }`}
                  >
                    {f.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesChess;
