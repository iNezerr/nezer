import Image from "next/image";
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import EmailSection from './components/EmailSection';
import AchievementsSection from './components/AchievementsSection';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <WorkSection />
        <BlogSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
