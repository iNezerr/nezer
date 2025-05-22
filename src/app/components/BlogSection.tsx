"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CodeBracketIcon, EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  previewUrl: string;
  heartfelt: boolean;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Code as a Form of Service: My Python Journey",
    excerpt: "How I discovered that writing clean, efficient code is my way of serving others and making an impact.",
    category: "Faith & Code",
    date: "April 15, 2025",
    readTime: "5 min read",
    previewUrl: "https://linkedin.com/in/ebenezer-agbekeye",
    heartfelt: true,
  },
  {
    id: 2,
    title: "Lessons Beyond Algorithms: My DeepMind Story",
    excerpt: "The human side of AI development taught me that technology is about connection, not just computation.",
    category: "Personal Growth",
    date: "March 10, 2025",
    readTime: "7 min read",
    previewUrl: "https://linkedin.com/in/ebenezer-agbekeye",
    heartfelt: true,
  },
  {
    id: 3,
    title: "How Faith Shapes My Technical Decisions",
    excerpt: "My journey of integrating integrity, purpose and compassion into every line of code I write.",
    category: "Faith & Tech",
    date: "February 2, 2025",
    readTime: "6 min read",
    previewUrl: "https://linkedin.com/in/ebenezer-agbekeye",
    heartfelt: true,
  }
];

const BlogCard: React.FC<{
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  previewUrl: string;
  heartfelt: boolean;
}> = ({ title, excerpt, category, date, readTime, previewUrl, heartfelt }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden border border-transparent hover:border-purple-500 transition-all duration-300 h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300">
            {category}
          </span>
          <span className="text-sm text-[#ADB7BE]">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400 transition-all duration-300">{title}</h3>
        <p className="text-[#ADB7BE] mb-4 flex-grow">{excerpt}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="flex items-center text-sm text-[#ADB7BE]">
            {heartfelt && (
              <HeartIcon className="h-4 w-4 text-pink-400 mr-1" />
            )}
            {readTime}
          </span>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400 transition-colors duration-300 flex items-center"
          >
            Read on LinkedIn →
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="blog" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">From My Heart to Yours</h2>
        <p className="text-[#ADB7BE] max-w-2xl mx-auto mb-6">
          Writing is how I share my journey, struggles, and discoveries. These aren't just technical posts—they're 
          pieces of my story that I hope will resonate with yours. I believe technology should serve humanity, and 
          these reflections explore that belief.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4"
      >
        {blogData.map((post) => (
          <motion.div key={post.id} variants={itemVariants} className="h-full">
            <BlogCard
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              previewUrl={post.previewUrl}
              heartfelt={post.heartfelt}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center mt-12">
        <p className="text-[#ADB7BE] mb-6">
          I'd love to connect with you and hear your thoughts. There's so much more to share!
        </p>
        <Link 
          href="https://linkedin.com/in/ebenezer-agbekeye"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white inline-block transition-all duration-300 transform hover:scale-105"
        >
          Connect on LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
