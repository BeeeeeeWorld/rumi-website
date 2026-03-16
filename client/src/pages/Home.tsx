/**
 * DESIGN SYSTEM: Neo-Brutalist Growth Dashboard
 * Primary: Deep Navy #0E1628
 * Background Light: Warm Cream #FAF7F0
 * Accent: Vivid Amber #F5A623
 * Fonts: Syne (display), Manrope (body), IBM Plex Mono (labels)
 * Layout: Full-width alternating dark/light section bands
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
