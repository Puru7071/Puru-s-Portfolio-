import React, { Fragment } from 'react'
import Line from './Line';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import data from "../data.js" ; 
import { FaGithub } from "react-icons/fa" ;

const Projects = ({isMobile}) => {
  const projects = data?.projects ;
  return (
    <Fragment>
      <Line />
      <Heading heading={"Projects"} />
      <div className='w-[90%] gap-[32px] flex flex-row flex-wrap justify-center m-auto'>
        {projects?.map(project => (<ProjectCard project={project} isMobile={isMobile} />))}
      </div>
      <div className='w-[90%] mt-[60px] m-auto flex justify-center items-center'>
        <a href='https://github.com/Puru7071' target='_blank' rel="noopener noreferrer" className='flex flex-row justify-center items-center gap-[10px] bg-green-600 tracking-tighter px-[15px] py-[8px] rounded-lg text-2xl text-white'>
          More on Github <FaGithub/>
        </a>
      </div>
    </Fragment>
  )
}

export default Projects; 