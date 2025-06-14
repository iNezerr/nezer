import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-full h-full bg-[url('/src/assets/images/grid.svg')] bg-repeat"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-[15%] w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            EBENEZER
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Python Engineer | Full Stack Developer
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See my work
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-3 bg-transparent border border-white/30 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Resume
            </a>
          </div>
          
          <div className="mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
            <p className="text-lg text-gray-300">
              Dedicated to building impactful solutions and helping individuals and startup founders transform their ideas into MVPs with precision and care.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
