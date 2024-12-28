import React from 'react'
import { BsCalendarDate } from "react-icons/bs";
import { motion } from "framer-motion";

const EducationCard = ({education}) => {
    return (
        <motion.div
            className='flex flex-col w-[80%] m-auto'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className='text-2xl text-white flex flex-row justify-between'>
                {education?.name} <span className='text-xl flex flex-row items-center gap-[10px]'><BsCalendarDate /> {education?.timeline}</span>
            </div>
            <div className='text-xl text-transparent bg-gradient-to-tr from-pink-500 via-slate-400 to-purple-600 bg-clip-text'>
                @ {education?.insitute}
            </div>
            <div className='text-base text-white w-[100%] flex flex-row items-center justify-between'>
                {education?.location}
                <span className='text-xl text-[#fb8500]'>
                    {education?.grade}
                </span>
            </div>
        </motion.div>
    )
}

export default EducationCard; 