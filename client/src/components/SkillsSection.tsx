import { useInView } from "@/hooks/useInView";

const skillGroups = [
  {
    category: "On-Page SEO",
    icon: "◈",
    skills: [
      "Keyword Research & Topical Mapping",
      "Title, Meta & Heading Optimisation",
      "Semantic SEO & Entity Optimisation",
      "Internal Linking Strategy",
      "Blog & Content Production",
      "Programmatic SEO (pSEO)",
    ],
  },
  {
    category: "Off-Page SEO",
    icon: "◉",
    skills: [
      "Competitor Backlink Analysis",
      "Link Building Strategy & Execution",
      "Authority & Web 2.0 Link Acquisition",
      "PR, Guest Post & Outreach Campaigns",
    ],
  },
  {
    category: "Technical SEO",
    icon: "◎",
    skills: [
      "Full Site Audits (Screaming Frog)",
      "Crawlability & Indexing Fixes",
      "Sitemap Submission via GSC & Bing",
      "Schema & Structured Data Markup",
      "Duplicate TDH & Orphan Page Fixes",
    ],
  },
];

const tools = [
  "Ahrefs",
  "Google Search Console",
  "Screaming Frog",
  "SEMrush",
  "Cora",
  "hashSEO",
  "NotebookLM",
  "Bing Webmaster Tools",
  "WordPress",
  "Shopify",
  "Framer",
  "SEOgets",
];

const softSkills = [
  "Detail-Oriented",
  "Critical Thinking",
  "Time Management",
  "Multitasking",
  "Resilience",
  "Empathising",
  "Highly Organised",
  "Information Synthesis",
];

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: '#0E1628', color: '#FAF7F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <div
            className={`mb-14 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="font-mono-custom text-xs text-[#F5A623] tracking-widest uppercase">
              02 — Core Competencies
            </span>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 leading-tight">
              Full-Spectrum
              <br />
              SEO Expertise
            </h2>
          </div>

          {/* Skill groups */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {skillGroups.map((group, i) => (
              <div
                key={group.category}
                className={`bg-white/5 border border-white/10 p-6 hover:border-[#F5A623]/50 transition-all duration-300 group ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#F5A623] text-xl font-mono">
                    {group.icon}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 font-body text-white/65 text-sm group-hover:text-white/80 transition-colors"
                    >
                      <span className="text-[#F5A623] mt-0.5 text-xs flex-shrink-0">
                        ▸
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div
            className={`mb-10 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="font-mono-custom text-xs text-[#F5A623] uppercase tracking-widest mb-4">
              Tools & Platforms
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono-custom text-xs text-white/70 border border-white/20 px-3 py-1.5 hover:border-[#F5A623] hover:text-[#F5A623] transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div
            className={`transition-all duration-700 delay-400 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="font-mono-custom text-xs text-[#F5A623] uppercase tracking-widest mb-4">
              Soft Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 hover:bg-[#F5A623]/10 hover:text-[#F5A623] hover:border-[#F5A623]/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
