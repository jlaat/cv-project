import React from 'react'

const WorkInput = () => (
    <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
      <h2 className='flex-1 text-gradient font-poppins font-bold pb-3'>Work experience</h2>
      <form className='flex flex-col gap-3'>
        <input type="text" placeholder='Job title' />
        <input type="text" placeholder='Employer' />
        <label htmlFor="jobStart" className='text-white'>Start date</label>
        <input type="datetime-local" name="jobStart" id="jobStart" />
        <label htmlFor="jobEnd" className='text-white'>End date</label>
        <input type="datetime-local" name="jobEnd" id="jobEnd" />
        <textarea name="description" id="description" cols="30" rows="6" placeholder='Description' />
        <div>
          <button type="submit" className='text-white bg-green-500 py-1 px-3 rounded-[10px] hover:bg-green-400'>Add</button>
          <button type="reset" className='text-white bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400 ml-3'>Reset</button>
        </div>
      </form>
      </section>
  )

export default WorkInput