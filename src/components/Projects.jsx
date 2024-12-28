import React, { Fragment } from 'react'
import Line from './Line';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import data from "../data.js"

const Projects = ({isMobile}) => {
  const projects = data?.projects ;
  return (
    <Fragment>
      <Line />
      <Heading heading={"Projects"} />
      <div className='w-[90%] gap-[32px] flex flex-row flex-wrap justify-center m-auto'>
        {projects?.map(project => (<ProjectCard project={project} isMobile={isMobile} />))}
      </div>
    </Fragment>
  )
}

export default Projects; 