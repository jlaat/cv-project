import React from 'react'
import faceLogo from "../assets/face.jpeg";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const ContactOutput = () => {
  return (
    <div className='flex flex-1 flex-col basis-[30%] text-white items-center p-5'>
      <img src={faceLogo} alt="faceLogo" className='sm:w-[100px] sm:h-[100px] 
      md:h-[150px] md:w-[150px]
      lg:h-[200px] lg:w-[200px]' />

      <h2 className='font-poppins p-3 sm:text-xl md:text-3xl '>Joni Laatikainen</h2>

      <div className='flex flex-1 flex-col gap-5'>
      <div className='flex gap-2 justify-center items-center'>
      <AiFillPhone /> 0405452601
      </div>
      <div className='flex gap-2 justify-center items-center'>
      <AiOutlineMail /> jonilaatikaine@gmail.com
      </div>
      </div>

    </div>
  )
}

export default ContactOutput