import React, { Fragment } from 'react'
import Line from './Line';
import Heading from './Heading';
import images from '../assets/images';
import { motion } from "framer-motion"
import { BsCalendarDate } from "react-icons/bs";

const Experience = () => {
    const expArr = [
        {
            image: images.belzabar,
            post: "Computer Scientist",
            name: "Belzabar Software Design",
            timeline: "07/2024 – Present",
            desc: <ul className='text-white list-disc list-inside mt-[20px] tracking-tighter text-xl'>
                <li>Transitioned to a full-time role, continuing to work on MERN stack projects.</li>
                <li>Collaborated with the UI team to design and implement user-friendly interfaces.</li>
                <li>Enhanced and optimized applications, leveraging DSA for performance improvements.</li>
                <li>Worked closely with the backend team for API integration and seamless data flow.</li>
            </ul>
        },
        {
            image: images.belzabar,
            post: "Computer Scientist Intern",
            name: "Belzabar Software Design",
            timeline: "08/2023 – 06/2024",
            desc: <ul className='text-white list-disc list-inside mt-[20px] tracking-tighter text-xl'>
                <li>Contributed to MERN projects.</li>
                <li>Worked closely with seniors and learnt about MVC architecture.</li>
                <li>Worked in the UI team to design and implement user-friendly interfaces.</li>
            </ul>
        },
        {
            image: images.boiam,
            post: "Website Developer Intern",
            name: "Baoiam Innovations Pvt Ltd",
            timeline: "05/2022 – 11/2022",
            desc: <ul className='text-white list-disc list-inside mt-[20px] tracking-tighter text-xl'>
                <li>Actively participated in team projects, utilizing Git for efficient task management.</li>
                <li>Developed multiple responsive websites using JavaScript and React, with Node.js as the backend.</li>
            </ul>
        }
    ]
    return (
        <Fragment>
            <Line />
            <Heading heading={"Professional Experience"} />
            <div className='w-[90%] flex flex-col items-center justify-center gap-[16px] m-auto'>
                {expArr?.map((item, index) => (
                    <motion.div
                        initial={{ x: 600, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2}}
                        className='h-[200px] relative w-[80%] gap-[30px] overflow-hidden flex flex-row justify-between items-center p-[10px]'
                    >

                        <motion.div
                            className='h-[160px] w-[160px] overflow-hidden bg-transparent'
                            initial={{opacity: 0.5 , scale:0.4}}
                            whileInView={{ rotate :git -360, opacity: 1 , scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={item?.image} className='object-contain rounded-3xl' />
                        </motion.div>

                        <div className='flex flex-col w-[80%] h-[auto]'>
                            <div className='w-[100%] h-[40px] flex flex-row justify-between items-center'>
                                <h1
                                    className='text-2xl text-white bg-gradient-to-tr from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent'
                                >
                                    {item?.post} @{item?.name}
                                </h1>

                                <div className='flex flex-row gap-[10px] text-[white] font-extrabold items-center'>
                                    <BsCalendarDate /> <span>{item?.timeline}</span>
                                </div>

                            </div>
                            {item?.desc}
                        </div>

                    </motion.div>
                ))}
            </div>
        </Fragment>
    )
}

export default Experience; 