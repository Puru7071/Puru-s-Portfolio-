import React from 'react' ; 
import { motion } from "framer-motion" ;
import { BsCalendarDate } from "react-icons/bs";

const ExpCard = ({item}) => {
    return (
        <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='h-auto relative w-[90%] gap-[30px] overflow-hidden flex flex-row justify-between items-start p-[10px] mb-8'
        >
            {/* <div className='h-auto w-[0px] border-r-[4px] rounded-3xl border-r-[#343a40]'>

            </div> */}
            <motion.div
                className='h-[150px] w-[150px] overflow-hidden bg-transparent rounded-full'
            >
                <img src={item?.image} alt='pic of a website' className='object-contain rounded-full' />
            </motion.div>

            <div className='flex flex-col w-[80%] h-full justify-between'>
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
    )
}

export default ExpCard