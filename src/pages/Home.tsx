import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">EBEN.</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Ebenezer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Dedicated to building impactful solutions and helping individuals and startup founders transform their ideas into MVPs with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#work" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View My Journey
              </a>
              <a href="#contact" className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">The Story Behind The Code</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I write code to solve real problems and improve lives. My journey started with curiosity and grew into a deep passion for using software to make things better for people, especially in communities like mine.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Over the years, I've built systems used by thousands, mentored others into tech roles, and worked across startups and global teams. I enjoy working with Python, leading projects, and turning ideas into working products. I've also helped build platforms in education, health, and e-commerce, including apps that run in over 30 countries.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I don't code just to ship features. I build with purpose. And I'm always learning, creating, and helping others do the same, whether it's through myCodeEdge, TOEFL prep tools, or quiet late-night debugging sessions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I believe in God, I believe in people, and I believe that tech should serve both.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Problem-Solving</h4>
                    <p className="text-gray-600 dark:text-gray-300">Finding elegant solutions to complex challenges fuels me</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">AI & Machine Learning</h4>
                    <p className="text-gray-600 dark:text-gray-300">Using technology to enhance human potential fascinates me</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Teaching & Mentorship</h4>
                    <p className="text-gray-600 dark:text-gray-300">The joy of helping others discover their abilities is immeasurable</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Technical Proficiency</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Python', 'React', 'Django', 'Node.js', 'TypeScript', 'Machine Learning', 'AWS', 'Docker'].map((skill) => (
                <div key={skill} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">My Work, My Purpose</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Eden AI Tutor</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A Python-based educational app built to personalize learning. Behind the scenes, this combines Django with custom AI algorithms that adapt to each student's unique learning style.
                </p>
                <p className="text-blue-600 font-semibold">Why It Matters</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Seeing students' eyes light up when they finally understand a difficult concept makes every line of code worthwhile.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">DeepGreen City Planner</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A platform that helps urban planners visualize how green spaces impact community wellbeing. It combines geospatial analysis with machine learning to predict environmental outcomes.
                </p>
                <p className="text-blue-600 font-semibold">Why It Matters</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating technology that helps build more sustainable, healthier communities reflects my belief that code should serve a greater purpose.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Photovista Portfolio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A dynamic photography platform built with Flask and AWS, where visual storytelling meets technical excellence. More than just images, it's about capturing moments that matter.
                </p>
                <p className="text-blue-600 font-semibold">Why It Matters</p>
                <p className="text-gray-600 dark:text-gray-300">
                  This project blends my technical skills with my love for photography—a reminder that our diverse passions make us better creators.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">TeamSync Collaboration Tool</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An open-source tool that streamlines remote collaboration through Python microservices and Docker containers. It addresses the human challenges of distributed teams.
                </p>
                <p className="text-blue-600 font-semibold">Why It Matters</p>
                <p className="text-gray-600 dark:text-gray-300">
                  I believe technology should bring people together. This project helps teams feel connected despite physical distance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-8">Let's Write Our Story Together</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Beyond just building software, I believe in building relationships. Whether you have a project in mind, need guidance, or simply want to connect, I'm here with open ears and a full attention for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div>
                <div className="grid gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Meaningful Collaborations</h3>
                    <p className="text-gray-600 dark:text-gray-300">Let's work on something that matters, projects with purpose and potential for positive impact.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Guidance & Mentorship</h3>
                    <p className="text-gray-600 dark:text-gray-300">I'm passionate about helping others grow. If you're on your coding journey, I'd love to help.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Community Connection</h3>
                    <p className="text-gray-600 dark:text-gray-300">I believe in the power of community. Let's connect and see how we can grow together.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="https://github.com/iNezerr" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/nezeroriginal" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form action="https://formspree.io/f/mqabbzgq" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                      LinkedIn (Optional)
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              "For we are God's handiwork, created to do good works." - Ephesians 2:10
            </p>
            <p className="text-gray-500">© 2025 Ebenezer Agbekeye. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Home;
