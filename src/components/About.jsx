import React, { Fragment } from 'react'
import Heading from './Heading'
import Line from './Line'
import { motion } from 'framer-motion';

const About = () => {

    const myUSP = [
        { id: "01", title: "Professional Experience", desc: "1.5 years at Belzabar Software, building scalable web solutions." },
        { id: "02", title: "MERN Stack Expert", desc: "Proficient in creating secure and maintainable full-stack applications." },
        { id: "03", title: "Award Winner", desc: "Flipkart Grid 4.0 2nd Runner Up for exceptional technical skills." },
        { id: "04", title: "Blockchain Developer", desc: "Created CipherSpace, a decentralized chat app with encryption." },
        { id: "05", title: "Top Coder", desc: "Ranked among GeeksforGeeks Top 20 Coders at Chandigarh University." },
        { id: "06", title: "UI Specialist", desc: "Expert in designing clean, intuitive, and responsive UIs." },
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

export default About ; 