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
            desc: <ul className='text-white list-disc list-inside tracking-tighter text-xl'>
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
            desc: <ul className='text-white list-disc list-inside tracking-tighter text-xl'>
                <li>Contributed to projects using the MERN stack.</li>
                <li>Collaborated with senior developers to learn MVC architecture.</li>
                <li>Designed and implemented user-friendly interfaces as part of the UI team.</li>
                <li>Enhanced understanding of full-stack development through hands-on experience.</li>
            </ul>
        },
        {
            image: images.boiam,
            post: "Website Developer Intern",
            name: "Baoiam Innovations Pvt Ltd",
            timeline: "05/2022 – 11/2022",
            desc: <ul className='text-white list-disc list-inside tracking-tighter text-xl'>
                <li>Collaborated on projects using Git and stand-up meetings for task management.</li>
                <li>Created responsive, cross-browser-compatible websites with JavaScript and React.</li>
                <li>Developed scalable server-side applications with Node.js and RESTful APIs.</li>
                <li>Delivered modern, responsive designs for various devices.</li>
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
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='h-[200px] relative w-[80%] gap-[30px] overflow-hidden flex flex-row justify-between items-center p-[10px]'
                    >
                        <div className='h-[120px] w-[0px] border-r-[4px] rounded-3xl border-r-[#343a40]'>

                        </div>
                        <motion.div
                            className='h-[120px] w-[120px] overflow-hidden bg-transparent'
                        >
                            <img src={item?.image} className='object-contain rounded-3xl' />
                        </motion.div>

                        <div className='flex flex-col w-[80%] h-[150px] justify-between'>
                            <div className='w-[100%] h-[40px] flex flex-row justify-between items-center'>
                                <h1
                                    className='text-2xl bg-gradient-to-tr from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent'
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