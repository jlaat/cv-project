import React, { useState, useRef } from 'react'




const ContactInput = () => {
  const [contactInformation, setContactInformation] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    aboutMe: "",
  })
  const [file, setFile] = useState(null);
  
  
  const handleChange = (event) => {
    setContactInformation({ ...contactInformation, [event.target.name]: event.target.value })
  }

  return (
    <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
      <h2 className='flex-1  text-gradient font-bold font-poppins pb-3'>Contact Information</h2>
      <form className='flex flex-col gap-3'>
        <input 
        type="text" 
        name='firstName' 
        placeholder='First name' 
        value={contactInformation.firstName} 
        onChange={ handleChange } />

        <input 
        type="text" 
        name='lastName' 
        placeholder='Last name' 
        value={contactInformation.lastName} 
        onChange={ handleChange}  />

        <input 
        type="text" 
        name="address" id="address" 
        placeholder='Address' 
        value={contactInformation.address} 
        onChange={ handleChange } />

        <input 
        type="text" 
        placeholder='Phone number' />

        <input 
        type="text" 
        placeholder='Email' />

        <textarea 
        name="aboutMe" 
        id="aboutMe" 
        cols="30" 
        rows="6" 
        placeholder='About me'></textarea>

        <label htmlFor="photo" 
        className='text-white'>Photo</label>

        <input 
        type="file" 
        name="photo" 
        id="photo" 
        className='text-white' 
        value={file}
        onChange={(e) => setFile(e.target.files[0])} /> 
        
      </form>
    </section>
)
}


export default ContactInput