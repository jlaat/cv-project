import React from 'react'

const WorkInput = () => (
    <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
      <h2 className='flex-1 text-white text-[32px] font-poppins'>Work experience</h2>
      <form className='flex flex-col gap-3'>
        <input type="text" placeholder='Job title' />
        <input type="text" placeholder='Employer' />
        <label htmlFor="jobStart" className='text-white'>Start date</label>
        <input type="datetime-local" name="jobStart" id="jobStart" />
        <label htmlFor="jobEnd" className='text-white'>End date</label>
        <input type="datetime-local" name="jobEnd" id="jobEnd" />
        <textarea name="description" id="description" cols="30" rows="7" placeholder='Description' />
      </form>
      </section>
  )

export default WorkInput