import React from 'react';
import { motion } from "framer-motion";
import { BsCalendarDate } from "react-icons/bs";

const ExpMobileCard = ({ item }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity:0 }}
            whileInView={{ scale: 1 , opacity:1 }}
            transition={{ duration: 0.5 }}
            className='w-[105%] h-[auto] p-[10px]'
        >
            <div className='w-[100%] h-[60px] flex flex-row justify-start items-center gap-[16px] mb-[20px]'>
                <div className='h-[56px] w-[56px] bg-black'>
                    <img src={item?.image} />
                </div>
                <div className='h-[100%] flex flex-col justify-center py-[2px] font-semibold'>
                    <h1 className='text-xl text-white'>
                        {item?.post}
                    </h1>
                    <h1 className='text-sm bg-gradient-to-tr from-pink-500 via-slate-200 to-purple-600 bg-clip-text text-transparent'>
                        @{item?.name}
                    </h1>
                </div>
            </div>
            {item?.mobileDesc}
            <div className='w-[100%] mt-[10px] flex flex-row justify-end items-center gap-[10px] text-red-900 font-bold'>
                <BsCalendarDate className='mt-[-2px] text-xl'/> {item?.timeline}
            </div>
        </motion.div>
    )
}

export default ExpMobileCard