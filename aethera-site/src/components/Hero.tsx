import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const fadeDuration = 0.5;

    const handleFade = () => {
      const current = video.currentTime;
      const duration = video.duration || 0;
      if (current < fadeDuration) setVideoOpacity(current / fadeDuration);
      else if (duration - current < fadeDuration)
        setVideoOpacity((duration - current) / fadeDuration);
      else setVideoOpacity(1);
      rafId.current = requestAnimationFrame(handleFade);
    };

    const onEnded = () => {
      setVideoOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch((e) => console.warn(e));
        }
      }, 100);
    };

    video.addEventListener("ended", onEnded);
    video.play().catch((e) => console.warn(e));
    rafId.current = requestAnimationFrame(handleFade);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          style={{
            opacity: videoOpacity,
            transition: "opacity 0.05s linear",
            top: "300px",
            inset: "auto 0 0 0",
          }}
          className="absolute w-full h-auto object-cover"
          muted
          playsInline
          loop={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
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
