/*
 * DESIGN SYSTEM: "Postcard from Everywhere"
 * Movement: Warm editorial travel zine meets modern personal branding
 * Background: warm off-white #FDFAF5
 * Primary accent: terracotta #E8714A
 * Secondary: sage green #7BA05B
 * Sky blue: #5BA3C9
 * Dark text: #2C2C2C
 * Fonts: Playfair Display (headings) + DM Sans (body)
 * Layout: Asymmetric magazine-style, large photos, alternating cards, masonry gallery
 */

import { useEffect, useRef, useState } from "react";

// CDN URLs for all uploaded photos
const PROFILE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/WechatIMG15145_51f10e30.jpg";

const PHOTOS = {
  meHiking: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/mehiking_360c8a5d.webp",
  meHiking2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/mehiking2_a509bf25.webp",
  meHiking3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/mehiking3_d57ee88e.webp",
  meHiking4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/mehiking4_84cdd0b2.webp",
  meSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/meenjoyinsunset_a817f489.webp",
  muayThai: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/muaythaiinthailand_ef701ea8.jpg",
  muayThai2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/muaythaiinthailand2_99ce7801.jpg",
  kitchenUS: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/kitchenjobintheUS_4feb48e5.JPEG",
  colleaguesKitchen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/colleagueswhenworkinthekitchenintheUS_c96b1dd1.webp",
  kyoto1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/colleaguesinKyotohotel_db8d66ef.webp",
  kyoto2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/colleaguesinKyotohotel2_bc37dd5b.webp",
  chiangMai: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/helpinChiangmai_7ec3d477.JPEG",
  interpreter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/workingasinterpreter_58232b22.JPEG",
  eventCoord: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/eventcoordinator.JPG_7928ec1a.webp",
  languageExchange: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/languageexchangeevent_d29bd569.jpg",
  thirdCountry: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/growingupinthirdcountryevent_2c0b1e4c.jpg",
  selling: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/sellingsocksandhandmadestuffonthestreet.JPG_a4dda843.webp",
  newYork: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/newyorktimessquare_b3945ebe.webp",
  teacher: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/highschoolteacher_1e50fd36.webp",
  colleaguesUS: "https://d2xsxph8kpxj0f.cloudfront.net/310519663331756970/ERLYcWLE2u83AfuvQCPrMc/colleaguesinUS_f8801364.webp",
};

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const snapItems = [
  { icon: "🌏", text: "4 Countries" },
  { icon: "🗣️", text: "IELTS 7.5" },
  { icon: "🧒", text: "Childcare" },
  { icon: "🍵", text: "Food & Kitchen" },
  { icon: "🏨", text: "Housekeeping" },
  { icon: "🥊", text: "Muay Thai" },
  { icon: "🚗", text: "Licensed Driver" },
  { icon: "✅", text: "Available Now" },
];

const skills = [
  { cat: "Hospitality & Kitchen", color: "#E8714A", items: ["Kitchen prep & cleaning", "High-volume food service", "Drink preparation", "Hygiene & food safety", "Fast order fulfilment"] },
  { cat: "Housekeeping", color: "#7BA05B", items: ["Room turnover & linen", "Amenity restocking", "Independent scheduling", "High cleanliness standards", "Attention to detail"] },
  { cat: "Childcare & Teaching", color: "#5BA3C9", items: ["Ages 3–18, incl. special needs", "Daily routine & personal care", "English teaching (certified)", "Patience & emotional support", "Parent communication"] },
  { cat: "Customer Service", color: "#E8A44A", items: ["Front-of-house interaction", "English & Chinese enquiries", "Event guest coordination", "Cross-cultural communication"] },
  { cat: "Admin & Organisation", color: "#9B7EC8", items: ["Scheduling & logistics", "Meeting coordination", "EN ↔ CN interpretation", "Report preparation"] },
  { cat: "General Strengths", color: "#4AADBE", items: ["Learns new tasks in days", "Works alone or in a team", "Comfortable in physical roles", "Reliable & punctual"] },
];

const experiences = [
  {
    role: "Kitchen Hand",
    org: "Concordia Language Villages",
    location: "Bemidji, MN, USA",
    period: "Jun – Sept 2019",
    tag: "Food & Hospitality",
    tagColor: "#E8714A",
    photos: [PHOTOS.kitchenUS, PHOTOS.colleaguesKitchen],
    bullets: [
      "Assisted with meal prep for large groups of campers aged 5–18",
      "Cleaned and sanitised kitchen workstations throughout service",
      "Cleared and reset dining areas between meal periods",
      "Immersed in a multilingual environment — interacted daily with campers and staff from Germany, Finland, Norway, Spain, and other countries",
    ],
  },
  {
    role: "Guesthouse Housekeeper",
    org: "Sakura Guesthouse",
    location: "Kyoto, Japan",
    period: "Jan – Feb 2025",
    tag: "Housekeeping",
    tagColor: "#7BA05B",
    photos: [PHOTOS.kyoto1],
    bullets: [
      "Daily room cleaning and turnover across multiple guest rooms",
      "Changed linen, restocked amenities, reported maintenance issues",
      "Managed own daily schedule independently",
      "Communicated with guests in English and basic Japanese",
    ],
  },
  {
    role: "Part-Time English Teacher",
    org: "Kindergarten",
    location: "Chongqing, China",
    period: "Apr – Jun 2025",
    tag: "Childcare & Teaching",
    tagColor: "#5BA3C9",
    photos: [PHOTOS.teacher],
    bullets: [
      "Taught English to children aged 3–6 using games, songs, and visuals",
      "Managed classroom behaviour and maintained a calm environment",
      "Communicated with parents in Chinese about children's progress",
    ],
  },
  {
    role: "Volunteer Caregiver",
    org: "Agape Home",
    location: "Chiang Mai, Thailand",
    period: "Jul – Aug 2024",
    tag: "Childcare & Care",
    tagColor: "#5BA3C9",
    photos: [PHOTOS.chiangMai],
    bullets: [
      "Assisted with daily care: meal prep, personal care, organising living spaces",
      "Helped children with basic reading and English practice",
      "Provided emotional support in a cross-cultural environment",
      "Worked alongside an international volunteer team",
    ],
  },
  {
    role: "Autistic Child Companion",
    org: "Chongqing Mountain City Volunteer Group",
    location: "Chongqing, China",
    period: "Nov – Dec 2023",
    tag: "Special Needs Support",
    tagColor: "#9B7EC8",
    photos: [],
    bullets: [
      "One-on-one support for children with autism spectrum disorder",
      "Facilitated social interaction through games and structured activities",
      "Adapted activities to each child's comfort and developmental needs",
    ],
  },
  {
    role: "Bubble Tea Crew",
    org: "Pobbyice",
    location: "Hunan, China",
    period: "Jun – Sept 2017",
    tag: "Food & Beverage",
    tagColor: "#E8714A",
    photos: [],
    bullets: [
      "Fully trained and independent within 2 days of starting",
      "Memorised full menu and all drink recipes quickly",
      "Prepared drinks to order during high-volume peak hours",
      "Handled cash transactions and maintained a clean counter",
    ],
  },
  {
    role: "Guest Relations Coordinator",
    org: "Capsule Endoscopy Global Summit",
    location: "Chongqing, China",
    period: "May 2023",
    tag: "Event & Guest Services",
    tagColor: "#E8A44A",
    photos: [PHOTOS.eventCoord],
    bullets: [
      "Coordinated schedules, venues, and accommodation for international attendees",
      "Handled guest enquiries in English and Chinese",
      "Ensured smooth logistics throughout a multi-day conference",
    ],
  },
  {
    role: "Interpreter & Assistant",
    org: "F.H.L.P.",
    location: "Remote / Guangzhou, China",
    period: "Jun 2024",
    tag: "Interpretation & Admin",
    tagColor: "#9B7EC8",
    photos: [PHOTOS.interpreter],
    bullets: [
      "English–Chinese interpretation for business meetings and travel",
      "Organised logistics and scheduled meetings for international partners",
      "Assisted with cross-cultural communication between teams",
    ],
  },
];

// Flat gallery rows: all photos with captions, natural order
const galleryRows = [
  { src: PHOTOS.muayThai, caption: "Muay Thai training, Chiang Mai" },
  { src: PHOTOS.muayThai2, caption: "Muay Thai — sparring session" },
  { src: PHOTOS.meHiking, caption: "Hiking in the mountains" },
  { src: PHOTOS.meHiking2, caption: "On the trail" },
  { src: PHOTOS.meHiking3, caption: "Summit views" },
  { src: PHOTOS.meHiking4, caption: "Hiking adventures" },
  { src: PHOTOS.meSunset, caption: "Watching the sunset" },
  { src: PHOTOS.languageExchange, caption: "Language exchange meetup" },
  { src: PHOTOS.thirdCountry, caption: "Growing Up in a Third Culture — panel event" },
  { src: PHOTOS.colleaguesUS, caption: "Multicultural night at Concordia Language Villages, USA" },
  { src: PHOTOS.newYork, caption: "New York Times Square — solo trip at 17" },
  { src: PHOTOS.selling, caption: "Selling handmade goods & socks on the street" },
];

export default function ServicePortfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FDFAF5", color: "#2C2C2C", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(253,250,245,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #EDE8E0",
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "56px",
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#E8714A" }}>
          Rumi Wang
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["about", "experience", "gallery", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "0.85rem", fontWeight: 500,
                color: "#2C2C2C", textTransform: "capitalize",
                padding: "4px 0",
                borderBottom: activeSection === s ? "2px solid #E8714A" : "2px solid transparent",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E8714A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2C2C2C")}
            >
              {s}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="about" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        {/* Left: photo collage */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
          <img
            src={PHOTOS.meSunset}
            alt="Rumi enjoying the sunset"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          {/* Overlay tilt card */}
          <div style={{
            position: "absolute", bottom: "2rem", right: "-1rem",
            background: "#fff",
            padding: "0.75rem",
            transform: "rotate(3deg)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            width: "160px",
          }}>
            <img src={PHOTOS.muayThai} alt="Muay Thai" style={{ width: "100%", height: "110px", objectFit: "cover" }} />
            <p style={{ fontSize: "0.7rem", color: "#9E8E7E", marginTop: "0.4rem", textAlign: "center" }}>Muay Thai, Thailand 🥊</p>
          </div>
        </div>

        {/* Right: intro text */}
        <div style={{
          padding: "4rem 3rem",
          display: "flex", flexDirection: "column", justifyContent: "center",
          background: "#FDFAF5",
        }}>
          {/* Profile photo */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "96px", height: "96px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #E8714A",
              boxShadow: "0 4px 14px rgba(232,113,74,0.25)",
              flexShrink: 0,
            }}>
              <img
                src={PROFILE_PHOTO}
                alt="Rumi Wang"
                style={{
                  width: "100%",
                  height: "130%",
                  objectFit: "cover",
                  objectPosition: "center 0%",
                  display: "block",
                  marginTop: "-18%",
                }}
              />
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#FFF3EC", borderRadius: "100px",
              padding: "0.35rem 1rem",
              fontSize: "0.8rem", fontWeight: 600, color: "#E8714A",
            }}>
              <span>✅</span> Based in Melbourne · Open to relocate anywhere in Australia
            </div>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 700, lineHeight: 1.15,
            color: "#2C2C2C", marginBottom: "1rem",
          }}>
            Hi, I'm Rumi.<br />
            <span style={{ color: "#E8714A", fontStyle: "italic" }}>I show up, I learn fast,</span><br />
            and I care about the work.
          </h1>

          <p style={{ fontSize: "1rem", color: "#6B5E52", lineHeight: 1.7, maxWidth: "420px", marginBottom: "1.5rem" }}>
            I'm 26, from China, currently based in Melbourne on a Work & Holiday visa (subclass 462) with full work rights. I'm happy to relocate to any city or region in Australia. I've lived and worked in China, the US, Japan, and Thailand — and I pick up new environments quickly.
          </p>

          {/* Snapshot pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {snapItems.map((item) => (
              <span key={item.text} style={{
                background: "#fff", border: "1.5px solid #EDE8E0",
                borderRadius: "100px", padding: "0.3rem 0.85rem",
                fontSize: "0.8rem", fontWeight: 500, color: "#2C2C2C",
                display: "flex", alignItems: "center", gap: "0.35rem",
              }}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>

          {/* Key info grid — full width, 2 columns */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem", width: "100%",
          }}>
            {[
              { label: "Languages", value: "English (IELTS 7.5) · Chinese · Japanese (basic)" },
              { label: "Visa", value: "Work & Holiday (462) · Full work rights" },
              { label: "Education", value: "MA English Lit · GPA 4.40/5.00" },
              { label: "Contact", value: "wangrumi666@gmail.com" },
            ].map((item) => (
              <div key={item.label} style={{
                background: "#fff", borderRadius: "10px",
                padding: "0.9rem 1.1rem",
                border: "1px solid #EDE8E0",
              }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9E8E7E", marginBottom: "0.3rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.9rem", color: "#2C2C2C", lineHeight: 1.45 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVY DIVIDER ── */}
      <div style={{ lineHeight: 0, background: "#FDFAF5" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#FFF8F3" />
        </svg>
      </div>

      {/* ── SKILLS ── */}
      <section style={{ background: "#FFF8F3", padding: "4rem 3rem" }}>
        <FadeUp>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem", fontWeight: 700,
            textAlign: "center", marginBottom: "0.5rem",
          }}>What I Bring</h2>
          <p style={{ textAlign: "center", color: "#9E8E7E", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
            Hands-on skills across hospitality, childcare, cleaning, and customer service
          </p>
        </FadeUp>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem", maxWidth: "1100px", margin: "0 auto",
        }}>
          {skills.map((s, i) => (
            <FadeUp key={s.cat} delay={i * 0.08}>
              <div style={{
                background: "#fff", borderRadius: "12px",
                padding: "1.25rem 1.5rem",
                border: "1px solid #EDE8E0",
                borderTop: `3px solid ${s.color}`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: s.color, marginBottom: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.cat}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.95rem", color: "#4A4040", marginBottom: "0.45rem", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: s.color, marginTop: "3px", flexShrink: 0 }}>›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── WAVY DIVIDER ── */}
      <div style={{ lineHeight: 0, background: "#FFF8F3" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" fill="#FDFAF5" />
        </svg>
      </div>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ background: "#FDFAF5", padding: "4rem 3rem" }}>
        <FadeUp>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem", fontWeight: 700,
            textAlign: "center", marginBottom: "0.5rem",
          }}>Experience</h2>
          <p style={{ textAlign: "center", color: "#9E8E7E", marginBottom: "3rem", fontSize: "0.95rem" }}>
            Across 4 countries, different industries, always showing up
          </p>
        </FadeUp>

        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {([
            {
              groupLabel: "🍵 Food & Hospitality",
              groupColor: "#E8714A",
              items: experiences.filter(e => e.tag.includes("Food") || e.tag.includes("Hospitality") || e.tag.includes("Beverage")),
            },
            {
              groupLabel: "🏨 Housekeeping",
              groupColor: "#7BA05B",
              items: experiences.filter(e => e.tag.includes("Housekeeping")),
            },
            {
              groupLabel: "👶 Childcare & Teaching",
              groupColor: "#5BA3C9",
              items: experiences.filter(e => e.tag.includes("Child") || e.tag.includes("Teaching") || e.tag.includes("Special")),
            },
            {
              groupLabel: "💼 Events, Admin & Other",
              groupColor: "#9B7EC8",
              items: experiences.filter(e => e.tag.includes("Event") || e.tag.includes("Admin") || e.tag.includes("Interpretation") || e.tag.includes("Guest")),
            },
          ] as { groupLabel: string; groupColor: string; items: typeof experiences }[]).map((group) => (
            group.items.length > 0 ? (
              <FadeUp key={group.groupLabel}>
                {/* Group header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "4px", height: "28px", background: group.groupColor, borderRadius: "2px", flexShrink: 0 }} />
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem", fontWeight: 700,
                    color: "#2C2C2C", margin: 0,
                  }}>{group.groupLabel}</h3>
                </div>

                {/* Items in this group */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {group.items.map((exp) => (
                    <div key={exp.role + exp.period} style={{
                      background: "#fff",
                      borderRadius: "12px",
                      border: "1px solid #EDE8E0",
                      borderLeft: `4px solid ${group.groupColor}`,
                      padding: "1.25rem 1.5rem",
                      display: "grid",
                      gridTemplateColumns: exp.photos.length > 0 ? "1fr auto" : "1fr",
                      gap: "1.5rem",
                      alignItems: "start",
                    }}>
                      {/* Text */}
                      <div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                          <h4 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.1rem", fontWeight: 700,
                            color: "#2C2C2C", margin: 0,
                          }}>{exp.role}</h4>
                          <span style={{ fontSize: "0.88rem", color: "#9E8E7E", fontWeight: 500 }}>{exp.org}</span>
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#B8A898", marginBottom: "0.85rem" }}>
                          📍 {exp.location} &nbsp;·&nbsp; {exp.period}
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {exp.bullets.map((b) => (
                            <li key={b} style={{
                              fontSize: "0.92rem", color: "#4A4040",
                              marginBottom: "0.4rem",
                              display: "flex", alignItems: "flex-start", gap: "0.55rem",
                              lineHeight: 1.55,
                            }}>
                              <span style={{
                                width: "5px", height: "5px", borderRadius: "50%",
                                background: group.groupColor, marginTop: "8px", flexShrink: 0,
                              }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Photo (if any) */}
                      {exp.photos.length > 0 && (
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          {exp.photos.map((p, pi) => (
                            <img
                              key={p}
                              src={p}
                              alt={exp.role}
                              style={{
                width: "180px", height: "180px",
                objectFit: "cover",
                objectPosition: "center center",
                borderRadius: "10px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                transform: pi === 1 ? "rotate(1.5deg)" : undefined,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeUp>
            ) : null
          ))}
        </div>
      </section>

      {/* ── WAVY DIVIDER ── */}
      <div style={{ lineHeight: 0, background: "#FDFAF5" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#F0F7EC" />
        </svg>
      </div>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ background: "#F0F7EC", padding: "4rem 3rem" }}>
        <FadeUp>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem", fontWeight: 700,
            textAlign: "center", marginBottom: "0.5rem",
          }}>Life in Photos</h2>
          <p style={{ textAlign: "center", color: "#6B8A5E", marginBottom: "3rem", fontSize: "0.95rem" }}>
            A few snapshots from the past few years
          </p>
        </FadeUp>

        {/* Flat grid: 3 per row, natural image proportions, caption below */}
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
        }}>
          {galleryRows.map((photo, i) => (
            <FadeUp key={photo.src} delay={i * 0.04}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{
                  borderRadius: "10px", overflow: "hidden",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                  lineHeight: 0,
                }}
                  onMouseEnter={(e) => {
                    const img = (e.currentTarget as HTMLDivElement).querySelector("img") as HTMLImageElement;
                    if (img) img.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    const img = (e.currentTarget as HTMLDivElement).querySelector("img") as HTMLImageElement;
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    style={{
                      width: "100%", display: "block",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>
                <p style={{
                  fontSize: "0.8rem", color: "#6B5E52",
                  marginTop: "0.5rem", lineHeight: 1.4,
                  fontStyle: "italic",
                }}>{photo.caption}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── WAVY DIVIDER ── */}
      <div style={{ lineHeight: 0, background: "#F0F7EC" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" fill="#EEF4FF" />
        </svg>
      </div>

      {/* ── ABOUT / PERSONALITY ── */}
      <section style={{ background: "#EEF4FF", padding: "4rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <FadeUp>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem", fontWeight: 700,
              marginBottom: "1.25rem", color: "#2C2C2C",
            }}>
              A bit more about me
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#4A4A6A", lineHeight: 1.8, marginBottom: "1rem" }}>
              I travelled solo to six US cities at 17. Since then I've lived in Thailand, Japan, and China across multiple cities — and I've learned that the fastest way to settle in somewhere new is to just get to work and talk to people.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#4A4A6A", lineHeight: 1.8, marginBottom: "1rem" }}>
              I have high standards for cleanliness and organisation — I notice when things are out of place, and I fix them. I'm physically active (hiking and Muay Thai), which means I'm comfortable in roles that require energy and stamina.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#4A4A6A", lineHeight: 1.8 }}>
              I genuinely enjoy meeting people from different backgrounds. That's not something I say to sound good — it's why I've kept taking jobs in new countries.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[
                { emoji: "💛", title: "Empathy", desc: "I read the room and respond to what people actually need" },
                { emoji: "🗂️", title: "Organised", desc: "I keep track of details so nothing slips through" },
                { emoji: "⏱️", title: "Time Management", desc: "Reliable with deadlines and schedules" },
                { emoji: "🧹", title: "Cleanliness", desc: "High standards — I notice when things are out of place" },
                { emoji: "🤝", title: "Team Player", desc: "Easy to work with across cultures and backgrounds" },
                { emoji: "⚡", title: "Fast Learner", desc: "Fully independent in new roles within days" },
              ].map((item) => (
                <div key={item.title} style={{
                  background: "#fff", borderRadius: "12px",
                  padding: "1rem", textAlign: "center",
                  border: "1px solid #D8E4FF",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.transform = ""}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.35rem" }}>{item.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#2C2C2C", marginBottom: "0.2rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#8888AA" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        background: "#2C2C2C",
        padding: "4rem 3rem",
        textAlign: "center",
      }}>
        <FadeUp>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem", fontWeight: 700,
            color: "#fff", marginBottom: "0.75rem",
          }}>
            Let's work together
          </h2>
          <p style={{ color: "#B8A898", fontSize: "0.95rem", marginBottom: "2rem" }}>
            Available immediately · Melbourne, VIC · Work & Holiday Visa (462)
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="mailto:wangrumi666@gmail.com" style={{
              background: "#E8714A", color: "#fff",
              padding: "0.75rem 2rem", borderRadius: "100px",
              textDecoration: "none", fontWeight: 600, fontSize: "0.9rem",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = "#D4603A"}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = "#E8714A"}
            >
              📧 Email Me
            </a>

            <a href="https://rumiwang.world" target="_blank" rel="noreferrer" style={{
              background: "transparent", color: "#fff",
              padding: "0.75rem 2rem", borderRadius: "100px",
              textDecoration: "none", fontWeight: 600, fontSize: "0.9rem",
              border: "1.5px solid #fff4",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.borderColor = "#7BA05B"}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff4"}
            >
              SEO Portfolio →
            </a>
          </div>
          <a
            href="https://wa.me/8613647421512"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              color: "#7BA05B", fontSize: "0.9rem",
              marginTop: "1.5rem",
              textDecoration: "none",
              fontWeight: 600,
              borderBottom: "1px solid #7BA05B44",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#5A8A40"}
            onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#7BA05B"}
          >
            💬 WhatsApp: +86 136 4742 1512
          </a>
        </FadeUp>
      </section>

    </div>
  );
}
