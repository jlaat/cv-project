import React, { useState } from 'react'

const EducationCard = (props) => {

  return (
    <div className='flex flex-1 flex-col justify-start text-left '>
        <h2 className='flex-1 font-poppins text-left text-neutral-700 font-bold'>{`${props.startDate} - ${props.endDate}`}</h2>
        <h2 className='flex-1 font-poppins text-left text-neutral-700 font-bold'>{props.school}</h2>
        <h3 className='flex-1 font-poppins text-left text-neutral-600'>{props.degree}</h3>
    </div>
  )
}

export default EducationCard