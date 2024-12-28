import React, { Fragment } from 'react'
import Line from './Line';
import Heading from './Heading';

import data from '../data';
import ExpCard from './ExpCard';

const Experience = ({isMobile}) => {
    const expArr = data?.expArr ; 
    return (
        <Fragment>
            <Line />
            <Heading heading={"Professional Experience"} />
            <div className='w-[90%] flex flex-col items-center justify-center gap-[16px] m-auto'>
                {expArr?.map((item, index) => (
                    <ExpCard item = {item}/>
                ))}
            </div>
        </Fragment>
    )
}

export default Experience; 