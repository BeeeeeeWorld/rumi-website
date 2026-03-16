import { useInView } from "@/hooks/useInView";

const AVATAR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/rumi-avatar_857ba415.jpg";

const highlights = [
  { label: "Visa Status", value: "Work & Holiday (462)", mono: true },
  { label: "Location", value: "Melbourne, Australia", mono: false },
  { label: "Languages", value: "English · Chinese · Japanese", mono: false },
  { label: "Availability", value: "Open to Opportunities", mono: false },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 overflow-hidden" style={{ backgroundColor: '#FAF7F0', color: '#0E1628' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-custom text-xs text-[#F5A623] tracking-widest uppercase">
                01 — About
              </span>
            </div>
            <h2 className="font-display font-bold text-[#0E1628] text-4xl md:text-5xl leading-tight mb-6">
              Turning Search
              <br />
              into{" "}
              <span className="relative inline-block">
                Growth
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#F5A623]" />
              </span>
            </h2>

            <p className="font-body text-[#0E1628]/70 text-base leading-relaxed mb-5">
              I'm a results-driven SEO Specialist with hands-on agency
              experience across on-page, off-page, and technical SEO. My work
              has delivered measurable organic growth for clients in diverse
              industries — from AI SaaS and fintech to consumer apps and
              e-commerce.
            </p>
            <p className="font-body text-[#0E1628]/70 text-base leading-relaxed mb-8">
              With a strong analytical mindset and bilingual fluency in English
              and Chinese, I bridge data-driven strategy with compelling
              content. I'm currently based in Melbourne on a Work & Holiday
              visa, actively seeking SEO roles where I can contribute to
              ambitious organic growth goals.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="border border-[#0E1628]/15 p-3 bg-[#FAF7F0]"
                >
                  <div className="font-mono-custom text-[10px] text-[#F5A623] uppercase tracking-widest mb-1">
                    {h.label}
                  </div>
                  <div
                    className={`text-[#0E1628] text-sm font-semibold ${
                      h.mono ? "font-mono-custom" : "font-body"
                    }`}
                  >
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accent image + decorative */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Background block */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#F5A623] z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src={AVATAR_IMG}
                  alt="Rumi Wang – SEO Specialist in Melbourne"
                  className="w-full object-cover object-center"
                  style={{ minHeight: "520px", maxHeight: "580px" }}
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-[#0E1628] border-2 border-[#F5A623] px-5 py-4 z-20">
                <div className="font-display font-extrabold text-[#F5A623] text-3xl">
                  5+
                </div>
                <div className="font-body text-white/70 text-xs mt-0.5">
                  Client Industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
