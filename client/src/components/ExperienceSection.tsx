import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    role: "SEO Specialist",
    company: "EONgrowth",
    period: "July 2025 – Present",
    location: "Remote",
    type: "primary",
    highlights: [
      "Conducted comprehensive keyword research using Ahrefs to identify low-hanging fruit, long-tail, and high-opportunity keywords tailored to each client's competitive landscape.",
      "Developed and executed topical maps and semantic SEO strategies to establish topical authority and improve content coverage across client websites.",
      "Wrote, optimised, and published blog content enhanced with information gain techniques, internal linking, and multi-tool optimisation (Cora, hashSEO).",
      "Planned and implemented programmatic SEO (pSEO) strategies, including tool landing pages, alternative pages, and listicle content.",
      "Conducted site audits using Screaming Frog and Ahrefs to identify and resolve technical issues including indexing errors, duplicate TDH, missing alt text, orphan pages, and broken internal links.",
      "Submitted sitemaps via Google Search Console and Bing Webmaster Tools; investigated and resolved non-indexed page issues.",
      "Analysed competitor backlink profiles and executed link-building campaigns targeting authoritative, relevant domains based on DR, traffic, and topical relevance.",
      "Produced SEO-optimised blog content for Manus (AI agent product acquired by Meta), delivering 12 well-researched articles aligned with the product's content strategy.",
    ],
  },
  {
    role: "Interpreter & Assistant",
    company: "F.H.L.P.",
    period: "June 2024 – October 2024",
    location: "Remote / Guangzhou, China",
    type: "secondary",
    highlights: [
      "Provided bilingual (English–Chinese) interpretation and logistical coordination to support business development activities in the industrial electronics sector.",
      "Organised travel arrangements and scheduled meetings with potential international partners.",
    ],
  },
  {
    role: "Academic Editor",
    company: "Foreign Languages Teaching and Research Press",
    period: "July 2023 – September 2023",
    location: "Beijing, China",
    type: "secondary",
    highlights: [
      "Edited and quality-assured educational manuscripts for a leading academic publisher, ensuring clarity, accuracy, and accessibility for diverse learner audiences.",
    ],
  },
  {
    role: "English Editor",
    company: "Times Cloud Map Books LLC",
    period: "April 2022 – June 2022",
    location: "Changsha, China",
    type: "secondary",
    highlights: [
      "Edited children's literature and authored exam preparation articles, gaining experience in tailoring content to specific audiences.",
    ],
  },
  {
    role: "Summer Camp Counsellor",
    company: "Concordia Language Villages",
    period: "June 2019 – September 2019",
    location: "Bemidji, MN, USA",
    type: "secondary",
    highlights: [
      "Delivered interactive Mandarin language instruction and cultural activities to children aged 5–18, fostering cross-cultural appreciation and teamwork.",
    ],
  },
];

const education = [
  {
    degree: "Master of Arts in English Language and Literature",
    school: "Sichuan International Studies University",
    location: "Chongqing, China",
    period: "Sept 2022 – June 2025",
    gpa: "GPA: 4.40 / 5.00",
    awards: [
      "Second-class Academic Scholarship (2022, 2023, 2024)",
      "Second Prize, National Translation Competition (Major Group)",
    ],
  },
  {
    degree: "Bachelor of Arts in English Education",
    school: "Hunan Agricultural University",
    location: "Hunan, China",
    period: "Sept 2017 – June 2021",
    gpa: "GPA: 3.34 / 4.00",
    awards: [
      "Merit Student Award",
      "National Teacher Certification",
      "Second-class Scholarship (Top 10%)",
    ],
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24" style={{ backgroundColor: '#0E1628', color: '#FAF7F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <div
            className={`mb-14 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="font-mono-custom text-xs text-[#F5A623] tracking-widest uppercase">
              04 — Experience & Education
            </span>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 leading-tight">
              Background &
              <br />
              Credentials
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work Experience (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="font-mono-custom text-xs text-[#F5A623] uppercase tracking-widest mb-6">
                Work Experience
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <div
                      key={i}
                      className={`relative pl-8 transition-all duration-700 ${
                        inView
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-6"
                      }`}
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                          exp.type === "primary"
                            ? "bg-[#F5A623] border-[#F5A623]"
                            : "bg-[#0E1628] border-white/30"
                        }`}
                      />

                      <div
                        className={`${
                          exp.type === "primary"
                            ? "bg-white/5 border border-[#F5A623]/30 p-5"
                            : "py-1"
                        }`}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3
                              className={`font-display font-bold ${
                                exp.type === "primary"
                                  ? "text-white text-lg"
                                  : "text-white/80 text-base"
                              }`}
                            >
                              {exp.role}
                            </h3>
                            <div className="font-body text-[#F5A623] text-sm font-medium">
                              {exp.company}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono-custom text-xs text-white/40">
                              {exp.period}
                            </div>
                            <div className="font-mono-custom text-xs text-white/30 mt-0.5">
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {exp.type === "primary" && (
                          <ul className="space-y-2 mt-3">
                            {exp.highlights.map((h, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 font-body text-white/60 text-sm"
                              >
                                <span className="text-[#F5A623] mt-0.5 text-xs flex-shrink-0">
                                  ▸
                                </span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}

                        {exp.type === "secondary" && exp.highlights.length > 0 && (
                          <p className="font-body text-white/45 text-sm mt-1">
                            {exp.highlights[0]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education (1/3 width) */}
            <div>
              <div className="font-mono-custom text-xs text-[#F5A623] uppercase tracking-widest mb-6">
                Education
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`border border-white/10 p-5 hover:border-[#F5A623]/40 transition-all duration-700 ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="font-mono-custom text-xs text-white/40 mb-2">
                      {edu.period}
                    </div>
                    <h3 className="font-display font-bold text-white text-sm leading-snug mb-1">
                      {edu.degree}
                    </h3>
                    <div className="font-body text-[#F5A623] text-sm font-medium mb-1">
                      {edu.school}
                    </div>
                    <div className="font-mono-custom text-xs text-white/40 mb-3">
                      {edu.location}
                    </div>
                    <div className="font-mono-custom text-xs text-[#F5A623] mb-2">
                      {edu.gpa}
                    </div>
                    <ul className="space-y-1">
                      {edu.awards.map((a) => (
                        <li
                          key={a}
                          className="font-body text-xs text-white/50 flex items-start gap-1.5"
                        >
                          <span className="text-[#F5A623] flex-shrink-0">·</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Volunteer highlight */}
                <div
                  className={`border border-white/10 p-5 transition-all duration-700 delay-300 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="font-mono-custom text-xs text-[#F5A623] uppercase tracking-widest mb-3">
                    Volunteer
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="font-body text-white/70 text-xs font-semibold">
                        Volunteer Caregiver
                      </div>
                      <div className="font-mono-custom text-xs text-white/35">
                        Agape Home, Chiang Mai · 2024
                      </div>
                    </div>
                    <div>
                      <div className="font-body text-white/70 text-xs font-semibold">
                        Summer Camp Counsellor
                      </div>
                      <div className="font-mono-custom text-xs text-white/35">
                        Concordia Language Villages, USA · 2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
