import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#cases" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E1628]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg text-white tracking-tight"
        >
          RW<span className="text-[#F5A623]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white/70 hover:text-[#F5A623] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#F5A623] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/rumi-wang-seo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#F5A623] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:wangrumi666@gmail.com"
            className="font-body text-sm font-semibold bg-[#F5A623] text-[#0E1628] px-4 py-2 hover:bg-[#e8961a] transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0E1628] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white/80 hover:text-[#F5A623] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:wangrumi666@gmail.com"
            className="font-body text-sm font-semibold bg-[#F5A623] text-[#0E1628] px-4 py-2 text-center hover:bg-[#e8961a] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
