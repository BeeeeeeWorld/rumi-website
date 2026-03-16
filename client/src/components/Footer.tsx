export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1628] border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-white text-lg">
            RW<span className="text-[#F5A623]">.</span>
          </span>
          <span className="font-body text-white/30 text-sm">
            Rumi Wang — SEO Specialist
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="font-body text-xs text-white/40 hover:text-[#F5A623] transition-colors"
          >
            About
          </a>
          <a
            href="#cases"
            className="font-body text-xs text-white/40 hover:text-[#F5A623] transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            className="font-body text-xs text-white/40 hover:text-[#F5A623] transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="font-mono-custom text-xs text-white/25">
          © {year} Rumi Wang · Melbourne, Australia
        </div>
      </div>
    </footer>
  );
}
