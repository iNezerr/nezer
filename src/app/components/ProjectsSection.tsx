"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Pursfi",
    description: "A Landing Page for the Pursfi Finance App. Built using Next.js, Framer motion and Tailwind CSS.",
    image: "/images/projects/1.png",
    tags: ["Next.js", "Typescript", "Framer Motion", "Tailwind CSS"],
    gitUrl: "https://github.com/Praizee",
    previewUrl: "https://pursfi-home.vercel.app/",
  },
  {
    id: 2,
    title: "Lazynerd Studios",
    description: "A landing page for a creative agency. Features custom animations with Framer Motion, and a minimalistic design using Next.js and Tailwind CSS.",
    image: "/images/projects/2.png",
    tags: ["Next.js", "Typescript", "Framer Motion", "Tailwind CSS"],
    gitUrl: "https://github.com/Praizee",
    previewUrl: "https://www.lazynerdstudios.com/",
  },
  {
    id: 3,
    title: "Gradific",
    description: "Gradific is a platform that connects students with tutors for personalized learning experiences.",
    image: "/images/projects/3.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gitUrl: "https://github.com/Praizee",
    previewUrl: "https://gradific.com/",
  },
  {
    id: 4,
    title: "ShopDesk",
    description: "ShopDesk is a cloud based inventory management software that helps you track stock, process sales, and generate business records so you can focus on growing your business.",
    image: "/images/projects/4.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    gitUrl: "https://github.com/Praizee",
    previewUrl: "https://shopdesk.im/",
  },
  {
    id: 5,
    title: "MovieSync",
    description: "MovieSync 🎬 – A Next.js app for browsing, bookmarking, and favoriting movies, with authentication and cross-device syncing. Powered by TMDB API and Supabase.",
    image: "/images/projects/5.png",
    tags: ["TMDB API", "Next.js", "Tailwind CSS", "Supabase"],
    gitUrl: "https://github.com/Praizee",
    previewUrl: "https://moviesync-tan.netlify.app/",
  },
  {
    id: 6,
    title: "Jumia Nigeria Online Shopping — Clone",
    description: "A Progressive Web App (PWA) clone of Jumia Nigeria's online shopping platform. Mimicking key features like product listings, search, and cart functionalities using Next.js and Tailwind CSS.",
    image: "/images/projects/6.png",
    tags: ["Next.js", "Tailwind CSS"],
    gitUrl: "https://github.com/Praizee/jumia-ng-clone",
    previewUrl: "https://jumia-ng-clone.vercel.app/",
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold mb-8 font-mono">My Projects</h2>
      <p className="text-white/80 mb-12">
        Explore my portfolio of web applications built with modern technologies. Each
        project represents a unique challenge and creative solution.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-[#1e1e1e] border border-[#333] hover:border-[#38bdf8] transition-all duration-300">
            <div className="relative overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link 
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs text-white/90 bg-[#333] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link 
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-[#38bdf8] transition-colors"
                >
                  View GitHub repository
                </Link>
                <Link 
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-[#38bdf8] hover:text-[#38bdf8]/80 transition-colors"
                >
                  View live demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
