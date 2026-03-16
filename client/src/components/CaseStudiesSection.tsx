import { ExternalLink, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const CASE_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/case-study-bg-ATUUqmeDaNGNDD7BENR8Dr.webp";

const cases = [
  {
    client: "FaithTime.ai",
    industry: "Consumer App",
    tag: "AI · Consumer",
    headline: "From 3 to 37,100 Monthly Clicks",
    description:
      "Developed and executed a full-funnel SEO strategy for a faith-based consumer app, combining topical authority mapping, semantic content production, and targeted link building. Drove explosive organic growth from near-zero visibility to a dominant position in a competitive niche.",
    metrics: [
      { label: "Monthly Clicks", before: "3", after: "37.1k", growth: "+1,236,567%" },
      { label: "Monthly Impressions", before: "54", after: "4.6M", growth: "+1,236,567%" },
    ],
    services: ["Content Strategy", "Topical Mapping", "Link Building", "On-Page SEO"],
    link: "https://app.seogets.com/share/8jeGYz1MjcSjWny2NJhV",
    accentColor: "#F5A623",
    featured: false,
  },
  {
    client: "Mureka.ai",
    industry: "AI Music SaaS",
    tag: "AI · SaaS",
    headline: "+509% Daily Clicks in 5 Months",
    description:
      "Led end-to-end SEO for an AI music generation platform, building topical authority through programmatic content, semantic clustering, and a systematic link acquisition campaign. Scaled daily clicks from 1,100 to 6,700 while impressions grew tenfold.",
    metrics: [
      { label: "Daily Clicks", before: "1,100", after: "6,700", growth: "+509%" },
      { label: "Daily Impressions", before: "14,000", after: "154,000", growth: "+1,000%" },
    ],
    services: ["Programmatic SEO", "Semantic SEO", "Link Building", "Technical Audit"],
    link: "https://app.seogets.com/share/RqoVWeUhiRTpl2210Cuu",
    accentColor: "#F5A623",
    featured: false,
  },
  {
    client: "Jasy.com",
    industry: "Fintech / Pre-IPO",
    tag: "Fintech · Pre-IPO",
    headline: "+6,686% Monthly Clicks",
    description:
      "Executed a targeted SEO campaign for a pre-IPO fintech startup, identifying high-opportunity low-competition keywords and building a content architecture designed for rapid indexation and authority growth. Achieved extraordinary growth from a minimal baseline.",
    metrics: [
      { label: "Monthly Clicks", before: "7", after: "475", growth: "+6,686%" },
      { label: "Monthly Impressions", before: "54", after: "15,400", growth: "+28,419%" },
    ],
    services: ["Keyword Research", "Content Architecture", "On-Page SEO", "GSC Optimisation"],
    link: "https://app.seogets.com/share/Ng0CDoDeoocGIEgXFj6a",
    accentColor: "#F5A623",
    featured: false,
  },
  {
    client: "MellowSleep.com",
    industry: "E-commerce / Wellness",
    tag: "E-commerce · Wellness",
    headline: "101.4k Clicks · 2.1M Impressions",
    description:
      "Contributed to organic growth for a wellness e-commerce brand through blog content production, on-page optimisation, and technical SEO improvements. Delivered consistent traffic growth across product, blog, and information page categories.",
    metrics: [
      { label: "Total Clicks", before: "—", after: "101.4k", growth: "Period Total" },
      { label: "Total Impressions", before: "—", after: "2.1M", growth: "Period Total" },
    ],
    services: ["Blog Content", "On-Page SEO", "Technical SEO", "E-commerce SEO"],
    link: "https://app.seogets.com/share/Ng0CDoDeoocGIEgXFj6a",
    accentColor: "#F5A623",
    featured: false,
  },
  {
    client: "Manus.im",
    industry: "AI Agent (Meta)",
    tag: "AI · Enterprise",
    headline: "12 SEO Articles for a Meta Product",
    description:
      "Produced 12 high-quality, SEO-optimised blog articles for Manus — an AI agent product subsequently acquired by Meta. Each article was crafted with information gain techniques, strategic internal linking, and multi-tool optimisation to drive organic visibility for a flagship AI product.",
    metrics: [
      { label: "Articles Delivered", before: "—", after: "12", growth: "Published" },
      { label: "Product Status", before: "—", after: "Acquired by Meta", growth: "2025" },
    ],
    services: ["SEO Content Writing", "Information Gain", "Internal Linking", "Content Strategy"],
    link: "https://manus.im/blog",
    accentColor: "#F5A623",
    featured: false,
  },
  {
    client: "Hyper3D.ai",
    industry: "AI 3D SaaS",
    tag: "AI · 3D · SaaS",
    headline: "Tools Page SEO & Blog Content",
    description:
      "Contributed to SEO for Hyper3D (Rodin AI) — an AI-powered 3D model generation platform by Deemos Corporation. Delivered targeted keyword research, on-page optimisation, and blog content production, with a focus on building out programmatic tools pages to capture high-intent search traffic from 3D artists and developers.",
    metrics: [
      { label: "Scope", before: "—", after: "Tools Pages + Blog", growth: "SEO + Content" },
      { label: "Platform", before: "—", after: "Hyper3D / Rodin AI", growth: "Live" },
    ],
    services: ["Tools Page SEO", "Blog Content", "Keyword Research", "On-Page Optimisation"],
    link: "https://hyper3d.ai/",
    accentColor: "#F5A623",
    featured: false,
  },
];

function MetricRow({
  label,
  before,
  after,
  growth,
}: {
  label: string;
  before: string;
  after: string;
  growth: string;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#0E1628]/10 last:border-0">
      <span className="font-body text-xs text-[#0E1628]/50">{label}</span>
      <div className="flex items-center gap-3">
        {before !== "—" && (
          <>
            <span className="font-mono-custom text-xs text-[#0E1628]/40 line-through">
              {before}
            </span>
            <span className="text-[#0E1628]/30 text-xs">→</span>
          </>
        )}
        <span className="font-mono-custom text-sm font-bold text-[#0E1628]">
          {after}
        </span>
        <span className="font-mono-custom text-xs font-bold text-[#F5A623] bg-[#F5A623]/10 px-2 py-0.5">
          {growth}
        </span>
      </div>
    </div>
  );
}

function CaseCard({ c, i }: { c: (typeof cases)[0]; i: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-white border-2 border-[#0E1628] transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${(i % 2) * 100}ms`,
        boxShadow: "5px 5px 0px #0E1628",
      }}
    >
      {/* Card header */}
      <div className="border-b-4 border-[#F5A623] bg-[#0E1628] px-6 py-4 flex items-start justify-between gap-4">
        <div>
          <div className="font-mono-custom text-[10px] text-[#F5A623] uppercase tracking-widest mb-1">
            {c.tag}
          </div>
          <h3 className="font-display font-bold text-white text-xl">
            {c.client}
          </h3>
        </div>
        <a
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#F5A623] hover:text-white transition-colors text-xs font-mono-custom mt-1 flex-shrink-0"
        >
          <TrendingUp size={13} />
          Live Data
          <ExternalLink size={11} />
        </a>
      </div>

      <div className="p-6">
        {/* Left: headline + description + services */}
        <div>
          <h4 className="font-display font-bold text-[#0E1628] text-lg mb-3 leading-tight">
            {c.headline}
          </h4>
          <p className="font-body text-[#0E1628]/65 text-sm leading-relaxed mb-5">
            {c.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {c.services.map((s) => (
              <span
                key={s}
                className="font-mono-custom text-[10px] text-[#0E1628]/60 border border-[#0E1628]/20 px-2 py-1 uppercase tracking-wide"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right: metrics */}
        <div className={c.featured ? "mt-6 md:mt-0" : "mt-5"}>
          <div className="font-mono-custom text-[10px] text-[#F5A623] uppercase tracking-widest mb-3">
            Key Results
          </div>
          <div className="bg-[#FAF7F0] border border-[#0E1628]/10 px-4 py-2">
            {c.metrics.map((m) => (
              <MetricRow key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="cases"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#FAF7F0" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${CASE_BG})` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-mono-custom text-xs text-[#F5A623] tracking-widest uppercase">
            03 — Case Studies
          </span>
          <h2 className="font-display font-bold text-[#0E1628] text-4xl md:text-5xl mt-3 leading-tight">
            Results That
            <br />
            Speak for Themselves
          </h2>
          <p className="font-body text-[#0E1628]/60 text-base mt-4 max-w-xl">
            Every metric below is verifiable via live data. Click "Live Data" on
            any card to view the original analytics dashboard.
          </p>
        </div>

        {/* Case cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.client} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
