import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lumen Atelier",
    sector: "Studio · Identity",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Nori Coastal",
    sector: "Hospitality · Web",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Helio Robotics",
    sector: "AI · Product",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Quiet Library",
    sector: "Editorial · Brand",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80",
  },
];

const Work = () => {
  return (
    <section id="work" className="relative bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-[#6F6F6F]">Selected work</span>
            <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-heading leading-[1.05] tracking-[-1.5px] text-black">
              Work in <span className="italic text-[#6F6F6F]">progress.</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm text-black border-b border-black/30 pb-1 hover:border-black"
          >
            View archive <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 * i }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-[#F4F4F2]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-heading text-black">{p.title}</h3>
                  <p className="text-sm text-[#6F6F6F] mt-1">{p.sector}</p>
                </div>
                <span className="text-sm text-[#6F6F6F]">{p.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
