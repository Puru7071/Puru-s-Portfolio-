import React from 'react'
import { motion } from 'framer-motion';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
    const iconsLinks = [
        {
            icon: <RiLinkedinBoxFill />,
            link: "https://www.linkedin.com/in/puru-bhargava-6330031b7/"
        },
        {
            icon: <FaGithub />,
            link: "https://github.com/Puru7071"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/puru_bhargava_/"
        }
    ]
    return (
        <div className='w-[100%] h-[80px] flex flex-row justify-between pl-[40px] pr-[60px] py-[25px]'>
            <h1
                className='text-white text-[36px] h-[60px]'
            >
                Pb
            </h1>
            <motion.div
                className='h-[60px] w-[auto] flex flex-row gap-[16px] text-[32px] justify-between text-white items-center relative'
                initial = {{x : "100px" , opacity:0}}
                animate = {{x : "0px" , opacity:1}}
                transition={{ duration: 1 }}
            >
                {iconsLinks?.map(item => (
                    <motion.a
                        href={item?.link} 
                        target='_blank'
                        animate ={{rotate:-360}}
                        transition={{duration: 2}}
                    >
                        {item?.icon}
                    </motion.a>
                ))}

            </motion.div>
        </div>
    )
}

export default Header