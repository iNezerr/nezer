import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built for managing resources and client relationships with customized features.",
      image: "/src/assets/images/project1.jpg",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Project Two",
      description: "A customized management app with attendance tracking, membership management, and automated notifications.",
      image: "/src/assets/images/project2.jpg",
      technologies: ["React", "Tailwind CSS", "Firebase", "Material UI"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Project Three",
      description: "A static website for a business to enhance online presence, optimized for search engines.",
      image: "/src/assets/images/project3.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://project3.com",
      githubLink: "https://github.com/yourusername/project3"
    },
    {
      title: "Project Four",
      description: "A digital marketing and event planning web application for managing tasks, billing, and attendance tracking.",
      image: "/src/assets/images/project4.jpg",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveLink: "https://project4.com",
      githubLink: "https://github.com/yourusername/project4"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('/src/assets/images/bg.png')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            A Small Selection Of Recent Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
