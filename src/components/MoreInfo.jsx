import React from 'react'
import Line from './Line';
import Heading from './Heading';
import { motion } from "framer-motion";
import { RiBookmarkFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import data from '../data';


const MoreInfo = () => {
  const achievements = data?.achievements;
  return (
    <div className='h-[auto] w-[100%] m-auto'>
      <Line />
      <Heading heading={"Achievements"} />
      <div className='w-[90%] h-[auto] m-auto flex flex-row flex-wrap justify-center items-center gap-[20px]'>
        {achievements?.map((achievement, index) => (
          <motion.div 
            className='h-[200px] w-[260px] relative bg-[#212529] rounded-lg p-[10px]'
            initial={{x: 200 , opacity:0 }}
            whileInView={{x:0 , opacity:1  }}
            transition={{duration:1}}
          >
            <h1 className=' text-xl tracking-tighter text-white'>
              {achievement?.name}
            </h1>
            <div className='text-base text-justify text-[#adb5bd] mt-[20px]'>
              {achievement?.desc}
            </div>
            <a href={achievement?.link} target='_blank' className='absolute bottom-4 px-[10px] flex flex-row justify-center items-center gap-[5px] py-[5px] bg-[#555555] text-[white] rounded-md font-medium'>
              Certificate <FaLink/>
            </a>
            <div className='top-[-10px] right-3 absolute w-[auto] h-[auto]'>
              <RiBookmarkFill className='text-6xl text-[#ff9f1c]' />
              <font className="text-white text-xl w-[100%] h-[100%] absolute top-[-2px] flex justify-center items-center">{index+1}</font>
            </div>
          </motion.div>))}
      </div>
      <Line />
    </div>
  )
}

export default MoreInfo; 