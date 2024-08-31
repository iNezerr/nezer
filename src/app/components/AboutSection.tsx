"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

type Props = {}
const TAB_DATA = [
  {
    name: "skills",
    content: (
      <div className="text-base lg:text-lg">
        <ul className="list-disc list-inside">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>PostgreSQL</li>
          <li>Git</li>
        </ul>
      </div>
    ),
  },
  {
    name: "education",
    content: (
      <div className="text-base lg:text-lg">
        <p>
          Bachelor of Science in Information Technology
          <br />
          Garden City University College
        </p>
      </div>
    ),
  },
  {
    name: "certifications",
    content: (
      <div className="text-base lg:text-lg">
        <ul className="list-disc list-inside">
          <li>Responsive Web Design</li>
          <li>JavaScript Algorithms and Data Structures</li>
          <li>Front End Libraries</li>
          <li>APIs and Microservices</li>
          <li>Quality Assurance</li>
        </ul>
      </div>
    ),
  },
]

const AboutSection = (props: Props) => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tabName: string) => {
    startTransition(() => {
      setTab(tabName);
    });
  };
  return (
    <section>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8
        px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/Ebenezer_Agbekeye.png"
          width={300} height={300} alt="Ebenezer Agbekeye" />
        <div className='text-[#adabab] flex mt-4 md:mt-0 text-left flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate software developer with a keen interest in creating efficient and user-friendly applications. With a strong foundation in various programming languages and frameworks, I strive to deliver high-quality solutions that meet both user needs and business objectives.
          </p>
          <p className="text-base lg:text-lg mt-4">
            My experience spans across front-end and back-end development, with a particular focus on web technologies. I enjoy tackling complex problems and continuously learning new skills to stay at the forefront of the ever-evolving tech landscape.
          </p>
          <p className="text-base lg:text-lg mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community events.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}>
              {" "}
              Skills {" "}
            </TabButton>

            <TabButton active={tab === "education"}
              selectTab={() => handleTabChange("education")}>
              {" "}
              Education {" "}
            </TabButton>

            <TabButton active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}>
              {" "}
              Certifications {" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {isPending ? (
              <p className="text-white">Loading...</p>
            ) : (
              TAB_DATA.find((data) => data.name === tab)?.content
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
