import React from 'react';
import { BsCalendarDate } from "react-icons/bs";
import { motion } from "framer-motion";

const EducationMobileCard = ({ education }) => {
    return (
        <motion.div
            initial={{scale : 0}} whileInView={{scale:1}}
            transition={{duration:0.5}}
            className='h-[auto] w-[100%] m-auto p-[10px]'
        >
            <div className='text-2xl text-white font-medium'>
                {education?.name}
            </div>
            <div className='text-base font-medium bg-gradient-to-tr from-pink-500 via-slate-300 to-purple-600 bg-clip-text text-transparent'>
                @{education?.insitute}
            </div>
            <div className='text-sm text-white flex flex-row justify-between items-center'>
                <div>
                    {education?.location}
                </div>
                <div className='text-white flex flex-row justify-between items-center gap-[5px]'>
                    <BsCalendarDate /> <span>{education?.timeline}</span>
                </div>
            </div>
            <div className='text-[#fb8500] w-full text-xl'>
                {education?.grade}
            </div>
        </motion.div>
    )
}

export default EducationMobileCard