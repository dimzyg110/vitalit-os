import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-black text-white px-8 pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading leading-[0.95] tracking-[-2px] max-w-5xl">
          Let's build something
          <br />
          <span className="italic text-white/60">worth keeping.</span>
        </h2>

        <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <a
            href="mailto:hello@aethera.studio"
            className="text-2xl md:text-3xl font-heading inline-flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            hello@aethera.studio <ArrowUpRight size={22} />
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="text-white/40 uppercase tracking-widest text-xs mb-4">Studio</p>
              <ul className="space-y-2 text-white/80">
                <li><a href="#work">Work</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#journal">Journal</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 uppercase tracking-widest text-xs mb-4">Connect</p>
              <ul className="space-y-2 text-white/80">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Are.na</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 uppercase tracking-widest text-xs mb-4">Address</p>
              <ul className="space-y-2 text-white/80">
                <li>Lisbon · Lausanne</li>
                <li>By appointment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <span>© {year} Aethera Studio. All quiet, all rights reserved.</span>
          <span>Built with care, and a little AI.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
