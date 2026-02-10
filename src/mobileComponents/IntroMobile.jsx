import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { IoMdDownload } from "react-icons/io";
import images from '../assets/images';
const IntroMobile = () => {
    return (
        <div className='h-[85vh] w-[100%] flex flex-row justify-between items-center'>
            <div className='w-[100%] h-[100%] relative flex flex-col items-center'>
                <motion.img
                    alt='pic of a website'
                    src={images.puru}
                    className='h-[400px] w-[300px] object-cover absolute bottom-0 left-0'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className='w-[90%] h-[50%] m-auto mt-20'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1
                        className=' text-3xl  tracking-tight font-extralight text-white ml-[-2px]'
                    >
                        Puru Bhargava
                    </h1>
                    <div
                        className='text-xl font-medium mt-[20px] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight'
                    >
                        I am a <Typewriter
                            words={["Full-Stack MERN Developer.", "Professional Web Designer.", "DSA Enthusiast.", "D-App developer."]}
                            typeSpeed={140}
                            cursor={true}
                            loop={true}
                            delaySpeed={2000}
                        />
                    </div>
                    <div className='mt-[20px] text-white w-[100%] text-lg text-justify'>
                        SDE <a href='https://leptonsoftware.com/' rel="noopener noreferrer" target='_blank' className='bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text text-transparent'>@Lepton Software</a> | Flipkart Grid 4.0 2nd Runner Up
                        | Full Stack Web Developer | Blockchain Developer | DSA Enthusiast
                        <br /><br />
                    </div>
                </motion.div>
                <button
                    className='text-slate-100 font-medium px-[20px] py-[10px] bg-gradient-to-tr from-purple-600 to-pink-400 rounded-md absolute bottom-8 right-2'
                    onClick={() => { window.open("https://drive.google.com/file/d/1Oql0KYtn0hK7gqiYdyk9GgwF7hilwVU0/view", "_blank") }}
                >
                    <IoMdDownload className='text-2xl' />
                </button>
            </div>
        </div>
    )
}

export default IntroMobile; 