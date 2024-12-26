import React, { Fragment } from 'react'
import Heading from './Heading'
import Line from './Line'
import { motion } from 'framer-motion';

const About = () => {

    const myUSP = [
        { id: "01", title: "Experience", desc: "1.5 years at Belzabar building web apps." },
        { id: "02", title: "MERN Expert", desc: "Skilled in full-stack development." },
        { id: "03", title: "Awarded", desc: "2nd Runner Up at Flipkart Grid 4.0." },
        { id: "04", title: "Blockchain Dev", desc: "Built CipherSpace, a decentralized chat app." },
        { id: "05", title: "Top Coder", desc: "Ranked in GeeksforGeeks Top 20 Coders." },
        { id: "06", title: "Tech Enthusiast", desc: "Passionate about innovative solutions." },
    ];
    return (
        <Fragment>
            <Line />
            <Heading heading={"About Me"} />
            <div className='w-[90%] m-auto flex flex-row flex-wrap gap-[32px] justify-center items-center'>
                {myUSP?.map(item => (
                    <motion.div
                        className='w-[350px] h-[200px] bg-blue-100 flex flex-col items-start p-[10px]'
                    >
                        <div className='w-[100%] text-white text-6xl font-extrabold'>
                            {item?.id}
                        </div>
                        <div className='w-[100%] text-2xl font-semibold'>
                            {item?.title}
                        </div>

                    </motion.div>

                ))}
            </div>
        </Fragment>
    )
}

export default About