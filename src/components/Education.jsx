import React, { Fragment } from 'react'
import Line from './Line';
import Heading from './Heading';
import data from '../data';
import EducationCard from './EducationCard';
import EducationMobileCard from '../mobileComponents/EducationMobileCard';

const Education = ({isMobile}) => {
  const educations = data?.educations;
  return (
    <Fragment>
      <Line />
      <Heading heading={"Education"} />
      <div className='w-[90%] h-[auto] m-[auto] relative flex flex-col gap-[30px] py-[30px] justify-center items-center'>
        {educations?.map((education, index) => {
          if(isMobile){
            return (<EducationMobileCard education={education}/>)
          }
          return (<EducationCard education={education}/>)
        })}
      </div>
    </Fragment>
  )
}

export default Education; 