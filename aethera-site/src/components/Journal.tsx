import { motion } from "framer-motion";

const entries = [
  {
    date: "March 04, 2026",
    title: "On letting the page breathe.",
    body: "Whitespace is not absence. It is the part of the composition that lets the rest mean something.",
  },
  {
    date: "February 18, 2026",
    title: "Notes from a generative studio.",
    body: "A short field guide to working with AI without flattening your taste — or your team.",
  },
  {
    date: "January 27, 2026",
    title: "Slowness as a feature.",
    body: "Why our most-loved sites this year all share the same thing: they refuse to rush you.",
  },
];

const Journal = () => {
  return (
    <section id="journal" className="relative bg-[#F4F4F2] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="text-sm uppercase tracking-[0.2em] text-[#6F6F6F]">Journal</span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-heading leading-[1.05] tracking-[-1.2px] text-black">
              Quiet entries from the <span className="italic text-[#6F6F6F]">studio.</span>
            </h2>
            <p className="mt-6 text-[#6F6F6F] leading-relaxed max-w-md">
              An ongoing record of small ideas, half-finished experiments, and the work we keep
              coming back to.
            </p>
          </div>

          <div className="md:col-span-7 space-y-2">
            {entries.map((e, i) => (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                viewport={{ once: true }}
                className="group border-t border-black/10 py-8 cursor-pointer"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#6F6F6F]">{e.date}</p>
                    <h3 className="mt-3 text-2xl md:text-3xl font-heading text-black group-hover:italic transition-all">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-[#6F6F6F] max-w-xl leading-relaxed">{e.body}</p>
                  </div>
                  <span className="text-2xl text-[#6F6F6F] group-hover:text-black transition-colors">
                    →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
