import React, { Fragment } from 'react';
import images from '../assets/images';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Line from './Line';

const Tech = () => {
    const techs = [
        { image: images?.cpp, desc: "" },
        { image: images?.html, desc: "" },
        { image: images?.javaScript, desc: "" },
        { image: images?.mongo, desc: "" },
        { image: images?.express, desc: "" },
        { image: images?.reactJs, desc: "" },
        { image: images?.node, desc: "" },
        { image: images?.tailwind, desc: "" },
        { image: images?.solidity, desc: "" },
    ]
    const iconsVariants = (duration) => ({
        initial: { y: -10 + (1 + (duration % 3) * 0.5) },
        animate: {
            y: [-10 + (1 + (duration % 3) * 0.5), 10 + (1 + (duration % 3) * 0.5)],
            transition: {
                duration: 1 + (duration % 3) * 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })
    return (
        <Fragment>
            <Line/>
            <div className='flex flex-col w-[100%]'>
                <Heading heading={"Technologies"} />
                <div className='w-[100%] h-[150px] flex flex-row flex-wrap justify-center items-center gap-[16px]'>
                    {techs?.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={iconsVariants(index)}
                            initial="initial"
                            animate="animate"
                            className='border-[1.5px] border-[#495057] h-[120px] w-[120px] rounded-xl flex justify-center items-center'
                        >
                            <img src={item.image} className='h-[60%] w-[60%] object-contain rounded-xl' />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Tech