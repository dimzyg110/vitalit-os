import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="aurora absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/0 to-white" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen max-w-7xl mx-auto"
        style={{ paddingTop: "calc(8rem - 75px)", paddingBottom: "10rem" }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-heading font-normal leading-[0.95] tracking-[-2.46px] text-black animate-fade-rise">
          Beyond <span className="italic text-[#6F6F6F]">silence,</span> we build
          <br />
          the <span className="italic text-[#6F6F6F]">eternal.</span>
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] font-body animate-fade-rise-delay">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls.
          Through the noise, we craft digital havens for deep work and pure flows.
        </p>
        <button className="bg-black text-white rounded-full px-14 py-5 text-base mt-12 transition-transform hover:scale-105 animate-fade-rise-delay-2 flex items-center gap-2">
          Begin Journey <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
