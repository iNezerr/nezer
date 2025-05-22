"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className="relative">
      <div className="absolute top-[-50px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className='text-[#ADB7BE] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Hi, I'm Eben {""}</span>
            <br />
            <TypeAnimation
              sequence={[
                "a believer in purpose-driven code",
                1000,
                "a Senior Python Engineer",
                900,
                "a passionate problem solver",
                900
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            I'm a developer who believes that <span className="text-white">technology should touch hearts</span>, not just screens. 
            With over 5 years of experience, I craft solutions that make a genuine difference in 
            people's lives, guided by faith and a desire to serve through code.
          </p>
          <div className='mb-8'>
            <ul className="text-[#ADB7BE] list-disc list-inside text-sm sm:text-base space-y-2">
              <li className="transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Faith and Purpose:</span> My work is an extension of my integrity, compassion, and excellence shine through everything I build.
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Creative Solutions:</span> I find joy in the harmony of logic and creativity in every challenge.
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sharing the Journey:</span> Knowledge grows when shared. I'm passionate about lifting others through mentorship and community.
              </li>
            </ul>
          </div>
          <div>
            <Link href="#contact" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white inline-block transition-all duration-300 transform hover:scale-105'>Let's Connect</Link>
            <Link href="https://linkedin.com/in/ebenezer-agbekeye" target="_blank" rel="noopener noreferrer" className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 inline-block'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full p-5 transition-all duration-300'>View My Journey</span>
            </Link>
          </div>
          <div className="mt-6">
            <span className="text-[#ADB7BE] italic text-sm">"Code is poetry with purpose—each line an opportunity to make someone's day better."</span>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br p-1 from-blue-500 via-purple-500 to-pink-500">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              <Image
                className='relative z-10 transform transition-all duration-500 hover:scale-105'
                src='/images/Ebenezer_Agbekeye.png'
                width={220}
                height={220}
                alt='Ebenezer Agbekeye' />
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-16 rounded-full"></div>
    </section>
  )
}

export default HeroSection
