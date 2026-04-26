import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Essay",
    title: "The post-template web, in plain language.",
    read: "8 min read",
    image:
      "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Case study",
    title: "Helio Robotics: shipping an AI homepage in 14 days.",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Field notes",
    title: "Tools we keep close: a 2026 stack tour.",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-[1.05] tracking-[-1.2px] text-black">
            Reading <span className="italic text-[#6F6F6F]">room.</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-black border-b border-black/30 pb-1 hover:border-black w-fit"
          >
            All writing <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[5/4] bg-[#F4F4F2]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#6F6F6F]">
                  <span>{p.tag}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="mt-3 text-xl font-heading text-black leading-snug group-hover:italic transition-all">
                  {p.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
