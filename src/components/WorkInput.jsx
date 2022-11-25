import React, { useState } from 'react'

const WorkInput = (props) => {

  const [workValues, setWorkValues] = useState({
    title: "Asentaja",
    employer: "Vesivek Oy",
    jobStart: "",
    jobEnd: "",
    description: "",
  }) 

  const handleChange = (event) => {
    setWorkValues({ ...workValues, [event.target.name]: event.target.value })
  }

  const addToExperiences = (event) => {
    event.preventDefault();
    props.passWorkInputs(current => [...current, workValues]);
  }

  return (
    <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
      <h2 className='flex-1 text-gradient font-poppins font-bold pb-3'>Work experience</h2>
      <form className='flex flex-col gap-3'>
        <input type="text" 
        placeholder='Job title'
        name='title'
        onChange={handleChange}
         />

        <input type="text" 
        placeholder='Employer'
        name='employer'
        onChange={handleChange} />
        
        <label htmlFor="jobStart" className='text-white'>Start date</label>
        <input type="date" name="jobStart" id="jobStart"
        onChange={handleChange} />

        <label htmlFor="jobEnd" className='text-white'>End date</label>
        <input type="date" name="jobEnd" id="jobEnd"
        onChange={handleChange} />

        <textarea name="description" id="description" cols="30" rows="6" placeholder='Description'
        onChange={handleChange} />onChange
        <div>
          <button className='text-white bg-green-500 py-1 px-3 rounded-[10px] hover:bg-green-400' onClick={addToExperiences}>Add</button>
          <button type="reset" className='text-white bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400 ml-3'>Reset</button>
        </div>
      </form>
      </section>
  )}

export default WorkInput