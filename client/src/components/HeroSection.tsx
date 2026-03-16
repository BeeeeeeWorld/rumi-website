import { MapPin, Mail, MessageCircle, ArrowDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/hero-bg-WgCdMUWi2UhjA2dAspwov2.webp";

const stats = [
  { value: "+509%", label: "Clicks Growth", sub: "Mureka.ai" },
  { value: "+6,686%", label: "Clicks Growth", sub: "Jasy.com" },
  { value: "25M+", label: "Impressions", sub: "Mureka.ai" },
  { value: "300+", label: "SEO Articles", sub: "Across All Clients" },
];

export default function HeroSection() {
  const { ref, inView } = useInView(0.1, true);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0E1628]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1628]/30 via-transparent to-[#0E1628]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div ref={ref} className="max-w-3xl">
          {/* Location badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <MapPin size={13} className="text-[#F5A623]" />
            <span className="font-mono-custom text-xs text-white/80 tracking-widest uppercase">
              Melbourne, Australia · Work & Holiday Visa (462)
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-display font-extrabold text-white leading-none mb-4 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Rumi Wang
          </h1>

          {/* Role */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="w-10 h-0.5 bg-[#F5A623]" />
            <span className="font-display font-semibold text-[#F5A623] text-xl md:text-2xl tracking-wide uppercase">
              SEO Specialist
            </span>
          </div>

          {/* Tagline */}
          <p
            className={`font-body text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Driving measurable organic growth for ambitious brands in{" "}
            <span className="text-white font-semibold">SaaS</span>,{" "}
            <span className="text-white font-semibold">E-commerce</span>, and{" "}
            <span className="text-white font-semibold">Fintech</span> — through
            data-driven strategy, technical precision, and content that ranks.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#cases"
              className="font-body font-semibold bg-[#F5A623] text-[#0E1628] px-7 py-3.5 text-sm uppercase tracking-wider hover:bg-[#e8961a] transition-colors duration-200 border-2 border-[#F5A623]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="font-body font-semibold border-2 border-white/40 text-white px-7 py-3.5 text-sm uppercase tracking-wider hover:border-[#F5A623] hover:text-[#F5A623] transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick contact row */}
          <div
            className={`flex flex-wrap gap-5 transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="mailto:wangrumi666@gmail.com"
              className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors text-sm font-body"
            >
              <Mail size={15} />
              wangrumi666@gmail.com
            </a>
            <a
              href="https://wa.me/8613647421512"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors text-sm font-body"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Stats ticker */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0E1628]/80 backdrop-blur-sm px-6 py-5 text-center hover:bg-[#0E1628] transition-colors"
            >
              <div className="font-display font-extrabold text-[#F5A623] text-2xl md:text-3xl">
                {s.value}
              </div>
              <div className="font-body text-white/60 text-xs mt-1">
                {s.label}
              </div>
              <div className="font-mono-custom text-white/40 text-xs mt-0.5">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
