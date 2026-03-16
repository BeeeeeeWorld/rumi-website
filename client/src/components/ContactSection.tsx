import { Mail, MessageCircle, MapPin, FileText, Linkedin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "wangrumi666@gmail.com",
    href: "mailto:wangrumi666@gmail.com",
    description: "Best for formal enquiries and job applications",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+86 136 4742 1512",
    href: "https://wa.me/8613647421512",
    description: "Quick messages and informal conversations",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rumi-wang-seo",
    href: "https://www.linkedin.com/in/rumi-wang-seo/",
    description: "Connect with me professionally",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Melbourne, Australia",
    href: null,
    description: "Available for local and remote roles",
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#FAF7F0', color: '#0E1628' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          {/* Section header */}
          <div
            className={`mb-14 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="font-mono-custom text-xs text-[#F5A623] tracking-widest uppercase">
              05 — Contact
            </span>
            <h2 className="font-display font-bold text-[#0E1628] text-4xl md:text-5xl mt-3 leading-tight">
              Let's Work
              <br />
              Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Message */}
            <div
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="font-body text-[#0E1628]/70 text-lg leading-relaxed mb-6">
                I'm actively seeking SEO Specialist roles in Melbourne and
                across Australia. Whether you're looking for a full-time team
                member, a freelance collaborator, or a project-based SEO
                partner — I'd love to hear from you.
              </p>
              <p className="font-body text-[#0E1628]/70 text-base leading-relaxed mb-8">
                I hold a{" "}
                <span className="font-semibold text-[#0E1628]">
                  Work & Holiday (subclass 462) visa
                </span>
                , which allows me to work legally in Australia. I'm available
                to start immediately.
              </p>

              {/* Visa badge */}
              <div className="inline-flex items-center gap-3 border-2 border-[#0E1628] px-5 py-3 bg-[#FAF7F0]">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono-custom text-xs text-[#0E1628] uppercase tracking-widest">
                  Available · Work & Holiday Visa (462) · Melbourne
                </span>
              </div>

              {/* Download CV hint */}
              <div className="mt-6 flex items-center gap-2 text-[#0E1628]/50 text-sm font-body">
                <FileText size={15} className="text-[#F5A623]" />
                <span>
                  CV available upon request — just send a message.
                </span>
              </div>
            </div>

            {/* Right: Contact cards */}
            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className="flex items-start gap-4 border-2 border-[#0E1628] p-5 bg-white hover:bg-[#FAF7F0] transition-all duration-200 group"
                    style={{
                      boxShadow: "3px 3px 0px #0E1628",
                    }}
                  >
                    <div className="w-10 h-10 bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#0E1628]" />
                    </div>
                    <div>
                      <div className="font-mono-custom text-[10px] text-[#F5A623] uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-display font-bold text-[#0E1628] text-base group-hover:text-[#F5A623] transition-colors">
                        {item.value}
                      </div>
                      <div className="font-body text-[#0E1628]/50 text-xs mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}

              {/* Primary CTA */}
              <a
                href="mailto:wangrumi666@gmail.com"
                className="block w-full text-center font-display font-bold text-[#0E1628] bg-[#F5A623] border-2 border-[#0E1628] py-4 text-sm uppercase tracking-widest hover:bg-[#e8961a] transition-colors duration-200 mt-2"
                style={{ boxShadow: "3px 3px 0px #0E1628" }}
              >
                Send Me an Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
