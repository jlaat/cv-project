import React from "react";
import faceLogo from "../../assets/face.jpeg";
import { AiFillPhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";

const ContactOutput = (props) => {
  return (
    <div className="bg-blue-700 flex flex-1 flex-col basis-[30%] text-white items-center p-5">
      <div className="flex flex-1 flex-col gap-5">
        <img
          src={faceLogo}
          alt="faceLogo"
          className="sm:w-[100px] sm:h-[100px] 
      md:h-[150px] md:w-[150px]
      lg:h-[200px] lg:w-[200px] self-center
      rounded-[10px]"
        />

        <h2 className="font-poppins sm:text-xl md:text-2xl text-center whitespace-pre-wrap">
          About Me
        </h2>
        <p className="whitespace-pre-wrap">
          {props.contactInformation.aboutMe}
        </p>
        <div className="flex gap-2 justify-start items-center text-left">
          <AiFillPhone /> {props.contactInformation.phoneNumber}
        </div>
        <div className="flex gap-2 justify-start items-center text-left">
          <AiOutlineHome /> {props.contactInformation.address}
        </div>
        <div className="flex gap-2 justify-start items-center text-left">
          <AiOutlineMail /> {props.contactInformation.email}
        </div>
      </div>
    </div>
  );
};

export default ContactOutput;
