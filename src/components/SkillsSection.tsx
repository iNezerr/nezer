import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    "React", 
    "TypeScript", 
    "Node.js", 
    "Tailwind CSS", 
    "MongoDB", 
    "Next.js", 
    "UI/UX Design", 
    "GraphQL"
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 text-center">
              <span className="text-lg font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
        
;

export default SkillsSection;
