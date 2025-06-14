import React from 'react';

interface ExperienceItemProps {
  title: string;
  period: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, period, description, index }) => {
  return (
    <div className="relative pl-12 pb-12">
      {/* Timeline line */}
      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 rounded-full border-4 border-gray-900 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
        {index + 1}
      </div>
      
      <div className="pt-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-purple-400 mb-3">{period}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Led the development of various web applications using React, TypeScript, and modern CSS frameworks. Implemented best practices and mentored junior developers."
    },
    {
      title: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack applications with React, Node.js, and MongoDB. Collaborated with designers to create responsive and intuitive user interfaces."
    },
    {
      title: "Web Developer",
      period: "2018 - 2020",
      description: "Created websites for clients using HTML, CSS, JavaScript, and WordPress. Focused on performance optimization and cross-browser compatibility."
    },
    {
      title: "Freelance Designer",
      period: "2016 - 2018",
      description: "Designed user interfaces for web and mobile applications. Worked closely with clients to deliver designs that meet their requirements and expectations."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              {...exp} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
