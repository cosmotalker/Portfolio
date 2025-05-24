import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import MoreSection from './components/MoreSection';
import YouTubeSection from './components/YouTubeSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "Bhuvanesh M - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <YouTubeSection />
      <ContactSection />
      <MoreSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;