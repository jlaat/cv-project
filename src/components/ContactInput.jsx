import React from 'react'

const ContactInput = () => (

      <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
        <h2 className='flex-1  text-gradient font-bold font-poppins pb-3'>Contact Information</h2>
        <form className='flex flex-col gap-3'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
          <input type="text" name="address" id="address" placeholder='Address' />
          <input type="text" placeholder='Phone number' />
          <input type="text" placeholder='Email' />
          <textarea name="aboutMe" id="aboutMe" cols="30" rows="6" placeholder='About me'></textarea>

          <label htmlFor="photo" className='text-white'>Photo</label>
          <input type="file" name="photo" id="photo" className='text-white' /> 
          
        </form>
      </section>
  )


export default ContactInput