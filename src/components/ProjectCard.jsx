import React, { useState, useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"

const ProjectCard = ({ project , isMobile}) => {
    const [showVideo, setShowVideo] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [time, setTime] = useState(5);
    const intervalRef = useRef(null);

    let intervalID;
    const mouseInEvent = () => {
        setTime(5);
        setShowLoading(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalRef.current);
                    setShowLoading(false);
                    setShowVideo(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000)
    }
    const mouseOutEvent = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(5);
        setShowLoading(false);
        setShowVideo(false);
    }

    return (
        <motion.div
            className={
                isMobile ? 
                'h-[auto] w-[105%] p-[15px] bg-[#212529] rounded-xl flex flex-col relative'
                : 'h-[auto] w-[500px] p-[15px] bg-[#212529] rounded-xl flex flex-col relative'
            }
        >
            <h1
                className={
                    isMobile ?
                    'text-xl mb-[10px] flex flex-row justify-start items-end gap-[10px] bg-gradient-to-tr from-pink-700 via-gray-100 to-purple-600 bg-clip-text text-transparent font-semibold'
                    :'text-3xl mb-[20px] flex flex-row justify-start items-end gap-[20px] bg-gradient-to-tr from-pink-700 via-gray-100 to-purple-600 bg-clip-text text-transparent font-semibold'
                }
            >
                <font 
                    className={
                        isMobile ? 
                        "text-white text-2xl"
                        :"text-white text-5xl"
                    }
                >
                    {project?.id}
                </font>
                
                {project?.name}
            </h1>
            {!showVideo &&<div
                onMouseEnter={mouseInEvent}
                onMouseLeave={mouseOutEvent}
                className='h-[300px] w-[100%] overflow-hidden bg-[black] flex justify-center items-center relative cursor-pointer mb-[20px]'
            >
                <img src={project?.thumbnail} className='w-[100%] h-[100%] object-contain' />
                <div className='text-xl absolute text-white bg-red-600 p-[5px] pl-[10px] bottom-0 right-0 rounded-tl-[20px]'>
                    Hover Image
                </div>
                {showLoading && <div className='text-white h-[100%] w-[100%] bg-black flex flex-col justify-center items-center absolute top-0 left-0 gap-[20px]'>
                    Loading Video in {time} seconds
                    <div className='h-[5px] w-[300px] bg-slate-100 rounded-2xl relative'>
                        <motion.div
                            className='absolute h-[100%] left-0 bottom-0 bg-blue-600'
                            initial={{width:0}}
                            animate={{width:300}}
                            transition={{duration:5.1}}
                        />
                    </div>
                </div>}
            </div>}
            {showVideo && <div className='h-[300px] w-[100%] overflow-hidden bg-[black] flex justify-center items-center relative cursor-pointer mb-[20px]'>
                {project?.youtubeFrame}
            </div>}
            {project?.description}

            <div className='h-[auto] w-[100%] bg-transparent flex flex-col gap-[24px] mt-[20px]'>
                <div className='w-[100%] flex flex-row text-wrap gap-[10px] justify-between item-center'>
                    {project?.techUsed?.map(tech => (
                        <div className='h-[50px] w-[50px] flex justify-center items-center gap-[10px]'>
                            <img src={tech} className='h-[100%] w-[100%] object-contain' />
                        </div>
                    ))}
                </div>
                <div className='flex flex-row justify-start item-center gap-[16px] '>
                    <a href={project?.githubURL} target='_blank' className='px-[20px] py-[10px] text-white rounded-lg cursor-pointer text-xl flex flex-row items-center gap-[10px] bg-[#495057]'>
                        <FaGithub className='text-2xl' /> GitHub
                    </a>
                    {project?.linkedInLink && <a href={project?.linkedInLink} target='_blank' className='px-[20px] py-[10px] text-white font-bold rounded-lg cursor-pointer text-xl flex flex-row items-center gap-[10px] bg-[#0077b6]'>
                        <FaLinkedin className='text-2xl' />LinkedIn
                    </a>}
                </div>

            </div>


        </motion.div>
    )
}

export default ProjectCard; 