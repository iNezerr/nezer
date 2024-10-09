"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    title: 'Project 1',
    description: 'This is project 1',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project1',
    liveUrl: 'https://project1.com',
    tags: ['web']
  },
  {
    title: 'Project 2',
    description: 'This is project 2',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project2',
    liveUrl: 'https://project2.com',
    tags: ['mobile']
  },
  {
    title: 'Project 3',
    description: 'This is project 3',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project3',
    liveUrl: 'https://project3.com',
    tags: ['web']
  },
  {
    title: 'Project 4',
    description: 'This is project 4',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project4',
    liveUrl: 'https://project4.com',
    tags: ['mobile']
  },
  {
    title: 'Project 5',
    description: 'This is project 5',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project5',
    liveUrl: 'https://project5.com',
    tags: ['web']
  },
  {
    title: 'Project 6',
    description: 'This is project 6',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project6',
    liveUrl: 'https://project6.com',
    tags: ['mobile']
  }
]
type Props = {}

const ProjectsSection = (props: Props) => {
  const [tag, setTag] = useState("all");
  const handleTagChange = (tag: string) => {
    setTag(tag)
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag) || tag === 'all'
  );
  return (
    <div
      className=""
    >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
      <div className='text-white flex flex-tow justify-center items-centerr gap-2 py-6'>
        <ProjectTag name='All' onClick={() => handleTagChange('all')} iselected={tag === 'all'} />
        <ProjectTag name='Web' onClick={() => handleTagChange('web')} iselected={tag === 'web'} />
        <ProjectTag name='Mobile' onClick={() => handleTagChange('mobile')} iselected={tag === 'mobile'} />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
