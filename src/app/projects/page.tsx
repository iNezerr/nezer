"use client";
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
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
  },
  {
    id: 7,
    title: "AI Powered Text Processing Interface",
    description: "This project is an AI-driven text processing tool that utilizes Chrome's AI APIs for language detection, text translation, and summarization. It features a chat-style interface, allowing users to input text and interact with all three functions in a conversational manner.",
    image: "/images/projects/7.png",
    tags: ["React.js", "Tailwind CSS", "Chrome APIs"],
    gitUrl: "https://github.com/Praizee/hng12-stage3-ai-powered-text-processing-interface",
    previewUrl: "https://hng12-stage3-ai-powered-text-processing-interface-vert.vercel.app/",
  },
  {
    id: 8,
    title: "TM Design",
    description: "A clean, responsive portfolio website for a product designer to showcase skills, philosophy, and experience.",
    image: "/images/projects/8.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    gitUrl: "https://github.com/Praizee",
    previewUrl: "https://tm-design.vercel.app/",
  },
  {
    id: 9,
    title: "Personal Portfolio Website v2",
    description: "Second iteration of my personal portfolio — a fast, animated, and mobile-friendly site to showcase my work and skills.",
    image: "/images/projects/9.png",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    gitUrl: "https://github.com/Praizee/nextjs-portfolio",
    previewUrl: "https://v2.stephenadeniji.com/",
  }
];

const ProjectsPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#111111]">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 md:px-12 py-4">
        <div className="py-12">
          <h1 className="text-3xl font-bold mb-8 font-mono">My Projects</h1>
          <p className="text-white/80 mb-12 max-w-3xl">
            Explore my portfolio of web applications built with modern technologies. Each
            project represents a unique challenge and creative solution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default ProjectsPage
