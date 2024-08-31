import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: 'Project 1',
    description: 'This is project 1',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project1',
    liveUrl: 'https://project1.com'
  },
  {
    title: 'Project 2',
    description: 'This is project 2',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project2',
    liveUrl: 'https://project2.com'
  },
  {
    title: 'Project 3',
    description: 'This is project 3',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project3',
    liveUrl: 'https://project3.com'
  },
  {
    title: 'Project 4',
    description: 'This is project 4',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project4',
    liveUrl: 'https://project4.com'
  },
  {
    title: 'Project 5',
    description: 'This is project 5',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project5',
    liveUrl: 'https://project5.com'
  },
  {
    title: 'Project 6',
    description: 'This is project 6',
    imgUrl: 'https://placeholder.com/300',
    githubUrl: 'https://github.com/project6',
    liveUrl: 'https://project6.com'
  }
]
type Props = {}

const ProjectsSection = (props: Props) => {
  return (
    <div
      className=""
    >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
      <div className=''>
        {projectsData.map((project, index) => (
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
