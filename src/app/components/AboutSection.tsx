"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { HeartIcon, LightBulbIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

// Define the shape of each tab data
interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
  icon: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "passions",
    id: "passions",
    icon: <HeartIcon className="h-5 w-5 text-pink-400 mr-2" />,
    content: (
      <div className="text-base lg:text-lg">
        <ul className="list-disc list-inside space-y-2">
          <li className="hover:text-white transition-colors duration-300">
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Problem-Solving
            </span> — Finding elegant solutions to complex challenges fuels me
          </li>
          <li className="hover:text-white transition-colors duration-300">
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI & Machine Learning
            </span> — Using technology to enhance human potential fascinates me
          </li>
          <li className="hover:text-white transition-colors duration-300">
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Teaching & Mentorship
            </span> — The joy of helping others discover their abilities is immeasurable
          </li>
          <li className="hover:text-white transition-colors duration-300">
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Faith-Guided Development
            </span> — Building technology that uplifts and serves with compassion
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "journey",
    id: "journey",
    icon: <LightBulbIcon className="h-5 w-5 text-yellow-400 mr-2" />,
    content: (
      <div className="text-base lg:text-lg">
        <div className="mb-4">
          <p className="italic text-[#ADB7BE] mb-2">"Every challenge has been a stepping stone, every setback a lesson."</p>
          <div className="space-y-3">
            <div>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">The Beginning</h4>
              <p>A curious mind with a first computer, discovering the magic of creation through code.</p>
            </div>
            <div>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">The Growth</h4>
              <p>Learning through challenges, tight deadlines, and complex bugs that taught patience.</p>
            </div>
            <div>
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">The Present</h4>
              <p>Building with purpose, writing code that reflects my values and serves others.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "skills",
    id: "skills",
    icon: <AcademicCapIcon className="h-5 w-5 text-blue-400 mr-2" />,
    content: (
      <div className="text-base lg:text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">Languages & Frameworks</h4>
            <ul className="list-disc list-inside">
              <li className="hover:text-white transition-colors duration-300">Python, JavaScript</li>
              <li className="hover:text-white transition-colors duration-300">Django, Flask, React</li>
              <li className="hover:text-white transition-colors duration-300">TensorFlow, PyTorch</li>
            </ul>
          </div>
          <div>
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">Professional Skills</h4>
            <ul className="list-disc list-inside">
              <li className="hover:text-white transition-colors duration-300">Technical Leadership</li>
              <li className="hover:text-white transition-colors duration-300">Mentorship & Teaching</li>
              <li className="hover:text-white transition-colors duration-300">Collaborative Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("passions");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-3"></div>
          <Image 
            src="/images/about-image.png" 
            width={500} 
            height={500} 
            alt="About image" 
            className="relative z-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:-rotate-2"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-full blur-xl"></div>
        </div>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 mb-4">The Story Behind The Code</h2>
          <p className="text-base lg:text-lg mb-4">
            My journey began with wonder—that first moment when I realized I could create something 
            from nothing but ideas and logic. It was like discovering a superpower that could solve 
            real problems and touch lives.
          </p>
          <p className="text-base lg:text-lg mb-6">
            Through years of growth at places like Google DeepMind, I've learned that the best technology 
            is born when brilliant minds collaborate with compassionate hearts. Every line of code I write 
            is guided by a simple question: <span className="italic text-white">"How will this help someone today?"</span>
          </p>
          <div className="flex flex-row justify-start mt-4">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                icon={tabItem.icon}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8 bg-[#181818] p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-purple-500/50">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-12 rounded-full"></div>
    </section>
  );
};

export default AboutSection;
