import React, { Fragment } from 'react'
import Heading from './Heading'
import Line from './Line'
import { motion } from 'framer-motion';

const About = () => {

    const myUSP = [
        { id: "01", title: "Professional Experience", desc: "2.6 years of building scalable web and mobile applications." },

        { id: "02", title: "Award Winner", desc: "Flipkart Grid 4.0 2nd Runner Up for exceptional technical skills." },

        { id: "03", title: "Enterprise Client Experience", desc: "Worked with enterprise clients including DRDO, Vodafone Idea, Infosys, and Smart Market." },

        { id: "04", title: "Performance Optimization", desc: "Optimized applications to handle 200K+ data points using Web Workers and code splitting." },

        { id: "05", title: "Offline & GIS Systems", desc: "Designed offline-first GIS applications with high-performance geospatial visualization." },

        { id: "06", title: "MERN Stack Expert", desc: "Proficient in creating secure and maintainable full-stack applications." },

        { id: "07", title: "Backend & API Design", desc: "Designed secure RESTful APIs with JWT authentication, OTP verification, and role-based access." },

        { id: "08", title: "UI Specialist", desc: "Expert in designing clean, intuitive, and responsive UIs." },

        { id: "09", title: "Blockchain Developer", desc: "Created CipherSpace, a decentralized chat app with encryption." }
    ];


    return (
        <Fragment>
            <Line />
            <Heading heading={"About Me"} />
            <div className='w-[90%] m-auto flex flex-row flex-wrap gap-[32px] justify-center items-center'>
                {myUSP?.map(item => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='w-[350px] h-[200px] bg-transparent flex flex-col items-start p-[10px]'
                    >
                        <div className='w-[100%] text-white text-6xl font-extrabold'>
                            {item?.id}
                        </div>
                        <div className='w-[100%] text-2xl font-semibold bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-transparent'>
                            {item?.title}
                        </div>
                        <div className='text-xl text-white font-light'>
                            {item?.desc}
                        </div>
                    </motion.div>

                ))}
            </div>
        </Fragment>
    )
}

export default About; 