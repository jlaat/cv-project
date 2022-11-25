import React from 'react'
import faceLogo from "../assets/face.jpeg";
import { AiFillPhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";

const ContactOutput = (props) => {
  return (
    <div className='flex flex-1 flex-col basis-[30%] text-white items-center p-5'>
       <h2 className='font-poppins p-3 sm:text-xl md:text-3xl name'>{`${props.contactInformation.firstName} ${props.contactInformation.lastName}`}</h2>

<div className='flex flex-1 flex-col gap-5'>
<div className='flex gap-2 justify-start items-center text-left'>
<AiFillPhone /> {props.contactInformation.phoneNumber}
</div>
<div className='flex gap-2 justify-start items-center text-left'>
<AiOutlineHome /> {props.contactInformation.address}
</div>
<div className='flex gap-2 justify-start items-center text-left'>
<AiOutlineMail /> {props.contactInformation.email}
</div>
      <img src={faceLogo} alt="faceLogo" className='sm:w-[100px] sm:h-[100px] 
      md:h-[150px] md:w-[150px]
      lg:h-[200px] lg:w-[200px] self-center' />

     
      <h2 className='font-poppins mb-3 p-1 sm:text-xl md:text-2xl text-center whitespace-pre-wrap border-b-2 border-white'>About Me</h2>
      <p className='whitespace-pre-wrap'>{props.contactInformation.aboutMe}</p>
      </div>

      

    </div>
  )
}

export default ContactOutput