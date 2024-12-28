import React, { Fragment } from 'react'
import Line from './Line';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import images from '../assets/images';

const Projects = () => {
  const projects = [
    {
      id: "01",
      name: "Instagram Clone",
      description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
        This MVC based application features a modern, responsive design with enhanced security,
        including email verification, community guidelines, and account privacy options.
        It offers dynamic stories, highlights, posts, comments,
        likes, real-time notifications, and custom APIs for seamless functionality.
      </p>,
      youtubeFrame: <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/hal-K0-5fZ0?si=3VWqjQW67YlPIfe1&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>,
      linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7201714107215998976/",
      githubURL: "https://github.com/Puru7071/INSTA-CLONE-MERN",
      techUsed: [images?.javaScript , images?.mongo, images?.express, images?.reactJs, images?.node, images?.tailwind, images?.material],
      thumbnail: images?.p1
    },
    {
      id: "02",
      name: "CipherSpace: D-Chat App",
      description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
        A decentralized chat application offering secure messaging and
        real-time notifications on blockchain. Features include custom
        captcha for registration, avatar personalization, and seamless user
        registration with friend addition through smart contracts. The intuitive
        UI ensures smooth interactions.
      </p>
      ,
      youtubeFrame: <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/LQdwT71puEI?si=zdWJ3cB85yJpMyIQ&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>,
      linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7258899408811876352/",
      githubURL: "https://github.com/Puru7071/Decentralised-Chat-App",
      techUsed: [images?.javaScript , images?.solidity, images?.ether, images?.reactJs, images?.tailwind, images?.metamask],
      thumbnail: images?.p2
    },
    {
      id: "03",
      name: "Portfolio Website",
      description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
        Built a ReactJS portfolio website with a modern, 
        responsive design showcasing projects, skills, and achievements. 
        Features include dynamic project cards, smooth animations with Framer Motion, 
        and links to GitHub/LinkedIn.It highlights my expertise in React and front-end development.
      </p>
      ,
      youtubeFrame: <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/hal-K0-5fZ0?si=3VWqjQW67YlPIfe1&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>,
      linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7258899408811876352/",
      githubURL: "https://github.com/Puru7071/FlipKart-Grid-4.0",
      techUsed: [images?.javaScript, images?.reactJs , images?.tailwind , images?.framer],
      thumbnail: images?.p3
    },
    {
      id: "04",
      name: "FAssist: Market Analyzer",
      description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
        Developed FAssist, an award-winning website using MVC architecture 
        and web scraping to monitor market competition. Features include 
        top performer insights, trending keywords, images from social media, 
        and expert advice. Won 3rd prize at Flipkart GRiD 4.0 Challenge.
      </p>
      ,
      youtubeFrame: <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/cMFjmnN_1Og?si=2fd4GMFt55IfkFLL&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>,
      githubURL: "https://github.com/Puru7071/FlipKart-Grid-4.0",
      techUsed: [images?.mongo, images?.express, images?.node, images?.javaScript, images?.html , images?.boot],
      thumbnail: images?.p2
    }
  ]
  return (
    <Fragment>
      <Line />
      <Heading heading={"Projects"} />
      <div className='w-[90%] gap-[24px] flex flex-row flex-wrap justify-center m-auto'>
        {projects?.map(project => (<ProjectCard project={project} />))}
      </div>
    </Fragment>
  )
}

export default Projects; 