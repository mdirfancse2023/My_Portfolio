import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationSection from "@/components/CertificationSection";
import AchievementsSection from "@/components/AchievementsSection";
import YouTubeSection from "@/components/YouTubeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationSection />
        <EducationSection />
        <AchievementsSection />
        <YouTubeSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
