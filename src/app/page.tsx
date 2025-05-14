import Navbar from './components/NavBar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111111]">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 md:px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
