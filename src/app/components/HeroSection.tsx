"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className='text-[#ADB7BE] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Hello, I am {""}</span>
            <br />
            <TypeAnimation
              sequence={[
                "Ebenezer Agbekeye",
                1000,
                " a Frontend Engineer",
                900,
                " a Backend Engineer",
                900
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl '>Full Stack Engineer
            specializing in Python (Django), PHP (Laravel), Node.js, and React,
            dedicated to building scalable and innovative web applications.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full p-5'>Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src='/images/Ebenezer_Agbekeye.png'
              width={200}
              height={200}
              alt='Ebenezer Agbekeye' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
