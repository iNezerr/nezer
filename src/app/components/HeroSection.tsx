"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-7 place-self-center text-left">
          <h1 className='text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold font-mono'>
            Frontend Developer
          </h1>
          <p className='text-white/80 text-base sm:text-lg mb-6 max-w-2xl'>
            Transforming ideas into seamless, beautiful experiences one pixel at a time.
          </p>
          <div className='flex flex-wrap gap-4 mb-8'>
            <Link 
              href="/projects" 
              className='px-5 py-3 border border-[#38bdf8] bg-transparent text-white hover:bg-[#38bdf8]/10 transition-all duration-300'
            >
              View My Work
            </Link>
            <a 
              href="/files/stephen-adeniji-resume.pdf" 
              download
              className='px-5 py-3 border border-white/30 bg-transparent text-white hover:bg-white/5 transition-all duration-300'
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex items-center space-x-4 mt-6">
            <a href="https://github.com/Praizee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Image 
                src="/github-icon.svg" 
                width={24} 
                height={24} 
                alt="GitHub"
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://www.linkedin.com/in/stephen-adeniji/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image 
                src="/linkedin-icon.svg" 
                width={24} 
                height={24} 
                alt="LinkedIn"
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://x.com/steve_ade1407" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/steve_ade14/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="border border-[#333] p-1">
            <Image 
              src="/images/hero-image.png"
              width={400} 
              height={400} 
              alt="Hero image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
