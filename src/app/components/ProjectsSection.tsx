"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { HeartIcon, LightBulbIcon } from "@heroicons/react/24/outline";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  impact: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Eden AI Tutor",
    description: "A Python-based educational app built to personalize learning. " +
    "Behind the scenes, this combines Django with custom AI algorithms " +
    "that adapt to each student's unique learning style.",
    impact: "Seeing students' eyes light up when they finally understand a difficult concept makes every line of code worthwhile.",
    image: "/images/projects/1.png",
    tag: ["All", "AI", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DeepGreen City Planner",
    description: "A platform that helps urban planners visualize how green spaces " +
    "impact community wellbeing. It combines geospatial analysis with machine learning " +
    "to predict environmental outcomes of planning decisions.",
    impact: "Creating technology that helps build more sustainable, healthier communities reflects my belief that code should serve a greater purpose.",
    image: "/images/projects/2.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Photovista Portfolio",
    description: "A dynamic photography platform built with Flask and AWS, " +
    "where visual storytelling meets technical excellence. More than just images, " +
    "it's about capturing moments that matter and sharing them with the world.",
    impact: "This project blends my technical skills with my love for photography—a reminder that our diverse passions make us better creators.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "TeamSync Collaboration Tool",
    description: "An open-source tool that streamlines remote collaboration " +
    "through Python microservices and Docker containers. It addresses the " +
    "human challenges of distributed teams through thoughtful automation.",
    impact: "I believe technology should bring people together. This project helps teams feel connected despite physical distance.",
    image: "/images/projects/4.png",
    tag: ["All", "Python", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const WorkSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="work">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 mb-4">My Work, My Purpose</h2>
        <p className="text-[#ADB7BE] text-center mb-4 max-w-3xl mx-auto">
          These projects represent more than code—they're expressions of purpose. Each one began with a question: 
          <span className="italic text-white ml-1">How can I use my skills to make life better for someone?</span>
        </p>
        <p className="text-[#ADB7BE] text-center mb-6 max-w-2xl mx-auto">
          I approach every challenge by first listening deeply, then crafting solutions that blend technical 
          excellence with human understanding.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="relative"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              impact={project.impact}
            />
            
            {index % 2 === 0 ? (
              <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 -translate-x-full">
                <HeartIcon className="h-6 w-6 text-pink-500/30" />
              </div>
            ) : (
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 translate-x-full">
                <LightBulbIcon className="h-6 w-6 text-yellow-500/30" />
              </div>
            )}
          </motion.li>
        ))}
      </ul>
      
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] italic">
          "The best code is written with both hands and heart."
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
