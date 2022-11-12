import React from 'react'

const EducationInput = () => (
    <section className=' flex-1 bg-discount-gradient rounded-[10px] p-3'>
        <h2 className='flex-1 text-white text-[32px] font-poppins'>Education</h2>
        <form className='flex flex-col gap-3'>
        <input type="text" placeholder='Degree' />
        <input type="text" placeholder='School' />
        <input type="text" placeholder='City/town' />
        <label htmlFor="startDate" className='text-white'>Start date</label>
        <input type="datetime-local" name="startDate" id="startDate" placeholder='Start' />
        <label htmlFor="endDate" className='text-white'>End date</label>
        <input type="datetime-local" name="endDate" id="endDate" />
        </form>
      </section>
  )


export default EducationInput