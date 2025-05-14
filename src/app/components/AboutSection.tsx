"use client";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection: React.FC = () => {
  return (
    <section className="text-white py-12" id="about">
      <h2 className="text-2xl font-bold mb-8 font-mono">~/about-me</h2>
      
      <h2 className="text-2xl font-bold mb-8 font-mono">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            alt="React" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
            alt="TypeScript" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            alt="JavaScript" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
            alt="Next.js" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
            alt="TailwindCSS" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">TailwindCSS</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" 
            alt="SASS" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">SASS</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-8">
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="Git" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">GitHub</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            alt="VS Code" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">VS Code</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
            alt="Figma" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
            alt="Firebase" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">Firebase</span>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" 
            alt="Supabase" 
            className="w-16 h-16 mb-2"
          />
          <span className="text-sm">Supabase</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-8 font-mono">My Experience</h2>
      <div className="space-y-8">
        <div className="border-l-2 border-[#38bdf8] pl-4">
          <h3 className="text-xl font-bold">Freelance Developer</h3>
          <p className="text-gray-400">2024 - Present</p>
        </div>
        <div className="border-l-2 border-[#38bdf8] pl-4">
          <h3 className="text-xl font-bold">Frontend Developer</h3>
          <p className="text-gray-400">Optisage</p>
          <p className="text-gray-400">Feb. 2025 - Present</p>
        </div>
        <div className="border-l-2 border-[#38bdf8] pl-4">
          <h3 className="text-xl font-bold">Frontend Intern</h3>
          <p className="text-gray-400">HNG Tech</p>
          <p className="text-gray-400">June - Aug. 2024; Jan. - April 2025</p>
        </div>
        <div className="border-l-2 border-[#38bdf8] pl-4">
          <h3 className="text-xl font-bold">Junior Frontend Developer</h3>
          <p className="text-gray-400">Voltwolf Limited</p>
          <p className="text-gray-400">Aug 2023 - Sept. 2024</p>
        </div>
        <div className="border-l-2 border-[#38bdf8] pl-4">
          <h3 className="text-xl font-bold">Frontend Developer</h3>
          <p className="text-gray-400">MarketBox</p>
          <p className="text-gray-400">Feb - April 2024</p>
        </div>
        <div className="border-l-2 border-[#38bdf8] pl-4">
          <h3 className="text-xl font-bold">Frontend Intern</h3>
          <p className="text-gray-400">ICT Networld</p>
          <p className="text-gray-400">Aug - Nov. 2022</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
