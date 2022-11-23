import React, { useState, useRef } from 'react'




const ContactInput = (props) => {
  
  const handleChange = (event) => {
    props.passContactInformation({ ...props.contactInformation, [event.target.name]: event.target.value })
  }

  return (
    <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
      <h2 className='flex-1  text-gradient font-bold font-poppins pb-3'>Contact Information</h2>
      <form className='flex flex-col gap-3'>
        <input 
        type="text" 
        name='firstName' 
        placeholder='First name' 
        value={props.contactInformation.firstName} 
        onChange={ handleChange } />

        <input 
        type="text" 
        name='lastName' 
        placeholder='Last name' 
        value={props.contactInformation.lastName} 
        onChange={ handleChange}  />

        <input 
        type="text" 
        name="address" id="address" 
        placeholder='Address' 
        value={props.contactInformation.address} 
        onChange={ handleChange } />

        <input 
        type="text" 
        name='phoneNumber' id="phoneNumber" 
        placeholder='Phone number'
        value={props.contactInformation.phoneNumber} 
        onChange={ handleChange } />

        <input 
        type="text" 
        name='email' id="email" 
        placeholder='Email'
        value={props.contactInformation.email}
        onChange={ handleChange } />

        <textarea 
        name="aboutMe" 
        id="aboutMe" 
        cols="30" 
        rows="6" 
        placeholder='About me'
        value={props.contactInformation.aboutMe}
        onChange={handleChange}></textarea>

        <label htmlFor="photo" 
        className='text-white'>Photo</label>

        <input 
        type="file" 
        name="photo" 
        id="photo" 
        className='text-white' 
        onChange={(e) => setFile(e.target.files[0])} /> 
        
      </form>
    </section>
)
}


export default ContactInput