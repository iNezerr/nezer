import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden">
                  <img 
                    src="/src/assets/images/profile.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full opacity-30 blur-xl"></div>
                
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/10">
                  <p className="text-sm text-purple-400 font-medium">4+ Years Experience</p>
                  <p className="text-white font-bold text-xl">Full Stack Developer</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium">
                  About Me
                </span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Crafting Digital Experiences With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Passion</span>
              </h2>
              
              <div className="text-gray-300 space-y-4">
                <p>
                  Hello! I'm a passionate web developer specializing in creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bring a unique perspective to every project.
                </p>
                
                <p>
                  I believe in clean code, thoughtful user experiences, and the power of technology to solve real problems. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring upcoming developers.
                </p>
                
                <p>
                  My approach combines technical expertise with creative problem-solving to build digital solutions that not only look great but perform exceptionally well.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">50+</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">20+</p>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
