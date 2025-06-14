import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group">
      <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      
      <h3 className="text-xl font-bold mt-2 mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const WorkProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('/src/assets/images/grid.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Approach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <ProcessStep 
            number="1"
            title="Planning & Strategy"
            description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          />
          
          <ProcessStep 
            number="2"
            title="Development & Progress Update"
            description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          />
          
          <ProcessStep 
            number="3"
            title="Testing & Launch"
            description="This is where the magic happens! I'll thoroughly test everything to ensure it works flawlessly across all devices before launching your polished website to the world."
          />
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
