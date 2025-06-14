import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveLink, 
  githubLink 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 max-w-md">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 bg-transparent border border-white/30 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
