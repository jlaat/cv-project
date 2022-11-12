import React from 'react'

const EducationInput = () => (
    <section className=' flex-1 bg-discount-gradient rounded-[10px] p-3'>
        <h2 className='flex-1 text-gradient font-bold font-poppins pb-3'>Education</h2>
        <form className='flex flex-col gap-3'>
        <input type="text" placeholder='Degree' />
        <input type="text" placeholder='School' />
        <input type="text" placeholder='City/town' />
        <label htmlFor="startDate" className='text-white'>Start date</label>
        <input type="datetime-local" name="startDate" id="startDate" placeholder='Start' />
        <label htmlFor="endDate" className='text-white'>End date</label>
        <input type="datetime-local" name="endDate" id="endDate" />
        <div>
          <button type="submit" className='text-white bg-green-500 py-1 px-3 rounded-[10px] hover:bg-green-400'>Add</button>
          <button type="reset" className='text-white bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400 ml-3'>Reset</button>
        </div>
        </form>
      </section>
  )


export default EducationInput