import React from 'react'
import { motion } from 'framer-motion';
import images from '../assets/images';
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
  return (
    <div className='h-[90vh] w-[100%] flex flex-row justify-between items-center'>
      <div className='w-[35%] h-[100%] relative'>
        <motion.img
          src={images.puru}
          className='h-[750px] w-[750px] object-cover absolute bottom-0 left-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          alt='pic of a website'
        />
      </div>
      <motion.div
        className='w-[50%] h-[50%]'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          className=' text-6xl  tracking-tight font-extralight text-white ml-[-2px]'
        >
          Puru Bhargava
        </h1>
        <div
          className='text-4xl font-medium mt-[30px] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight'
        >
          I am a <Typewriter
            words={["Full-Stack MERN Developer.", "Professional Web Designer.", "DSA Enthusiast.", "D-App developer."]}
            typeSpeed={140}
            cursor={true}
            loop={true}
            delaySpeed={2000}
          />
        </div>
        {/* <h1 className='text-white tracking-tight text-xl font-extralight mt-[10px]'>
          Computer Scientist <a className=' cursor-pointer'>@Belzabar</a>
        </h1> */}
        <div className='mt-[20px] text-white w-[90%] text-xl text-justify'>
          Computer Scientist <a href='https://belzabar.com/' rel="noopener noreferrer" target='_blank' className='bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text text-transparent'>@Belzabar</a> | Flipkart Grid 4.0 2nd Runner Up
          | Full Stack Web Developer | Blockchain Developer | DSA Enthusiast
          <br /><br />

          I specialize in crafting scalable, secure digital solutions with expertise in full-stack 
          development, blockchain, and advanced problem-solving. From decentralized applications to seamless 
          user interfaces, I bring ideas to life through clean, efficient code and innovative technology.
        </div>

        <button 
        className='text-slate-100 font-medium px-[20px] py-[10px] bg-gradient-to-tr from-purple-600 to-pink-400 rounded-md mt-[40px]'
        onClick={()=>{window.open("https://drive.google.com/drive/folders/1dqlWDRwFErg8A4B2OKmTekLPC6FKS-ch?usp=drive_link", "_blank")}}
        >
          Download CV
        </button>

      </motion.div>
    </div>
  )
}

export default Intro ;