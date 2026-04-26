import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Journal", href: "#journal" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-3xl tracking-tight font-heading text-black">
          Aethera<sup className="text-sm align-super">®</sup>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors hover:text-black/70 ${
                link.name === "Home" ? "text-black" : "text-[#6F6F6F]"
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white rounded-full px-6 py-2.5 text-sm transition-transform hover:scale-105 flex items-center gap-1">
            Get Started <ArrowUpRight size={14} />
          </button>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-black text-2xl"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#6F6F6F]"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white rounded-full px-6 py-2.5 text-sm flex items-center gap-1 w-fit">
            Get Started <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
