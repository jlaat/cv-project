import React from 'react'
import EducationCard from './EducationCard'

const EducationOutput = (props) => {
  return (
    <div className='flex flex-col flex-1 text-white justify-start items-center mt-10 border-solid border-r-3 border-black '>
      <h1 className='font-poppins text-neutral-800 font-bold text-lg pb-10'>Education</h1>
        <div className='flex gap-10 flex-col'>
        {props.educationInputs.map((input) => {
          return <EducationCard
          key={input.startDate} 
          startDate={input.startDate}
          endDate={input.endDate}
          city={input.city}
          degree={input.degree}
          school={input.school}  />
        })}
        </div>
    </div>
  )
}

export default EducationOutput