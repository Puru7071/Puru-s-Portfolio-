import React from 'react'

const Heading = ({heading}) => {
    return (
        <div className='relative w-[100%]'>
            <h1 className='text-3xl text-white tracking-tight font-light w-[100%] text-center mb-[60px] z-[10]'>
                {heading}
            </h1>
        </div>
    )
}

export default Heading ; 