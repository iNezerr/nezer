import React, { useState } from 'react';

interface TestimonialProps {
  text: string;
  name: string;
  position: string;
  index: number;
  isActive: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, position, index, isActive }) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center transition-opacity duration-700 p-6 md:p-12 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <div className="relative">
        <div className="absolute -top-10 left-0 text-7xl text-purple-600/20 font-serif">"</div>
        <p className="text-lg md:text-xl text-gray-300 mb-6 relative z-10">
          {text}
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
            {name.charAt(0)}
          </div>
          <div className="ml-4">
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-400">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Working with NEZER was an absolute pleasure. They took my vague ideas and turned them into a stunning website that perfectly represents my brand. Their attention to detail and technical expertise is remarkable.",
      name: "Alex Johnson",
      position: "CEO, TechStart"
    },
    {
      text: "I've worked with many developers over the years, but NEZER stands out for their creativity, technical skills, and ability to deliver on time. They're not just a developer; they're a valuable strategic partner.",
      name: "Sarah Williams",
      position: "Marketing Director, Innovate Inc."
    },
    {
      text: "NEZER transformed our outdated site into a modern, fast, and user-friendly platform that's significantly increased our conversions. Their understanding of both design and development makes them uniquely qualified.",
      name: "Michael Chen",
      position: "Founder, GrowthFuel"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            What My Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                {...testimonial}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
            
            <div className="absolute bottom-6 left-0 w-full flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-6' : 'bg-white/30'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
            
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              onClick={handlePrev}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              onClick={handleNext}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
