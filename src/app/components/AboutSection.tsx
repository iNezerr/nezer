"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define the shape of each tab data
interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "skills",
    id: "skills",
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
    title: "education",
    id: "education",
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
    title: "certifications",
    id: "certifications",
    content: (
      <div className="text-base lg:text-lg">
        <ul className="list-disc list-inside">
          <li>Meta Back-End Developer Professional Certificate</li>
          <li>Google Advanced Data Analytics</li>
          <li>Meta Front-End Developer Professional Certificate</li>
          <li>Google IT Support Professional Certificate</li>
          {/* <li>Quality Assurance</li> */}
        </ul>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
