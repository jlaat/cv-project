import React from 'react'

const ContactInput = () => (

      <section className='flex-1 bg-discount-gradient rounded-[10px] p-3'>
        <h2 className='flex-1 text-white text-[32px] font-poppins'>Contact Information</h2>
        <form className='flex flex-col gap-3'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
          <input type="text" placeholder='Phone number' />
          <input type="text" placeholder='Email' />
        </form>
      </section>
  )


export default ContactInput