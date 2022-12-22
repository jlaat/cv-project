import React from "react";
import faceLogo from "../../assets/face.jpeg";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";

const ContactOutput = (props) => {
  return (
    <div className="bg-blue-700 flex flex-1 flex-col basis-[30%] text-white items-center p-5">
      <div className="flex flex-1 flex-col gap-5">
        <img
          src={props.contactInformation.photo || faceLogo}
          alt="faceLogo"
          className="sm:w-[100px] sm:h-[140px] 
      md:h-[200px] md:w-[150px]
      lg:h-[240px] lg:w-[200px] self-center
      rounded-[10px]
      object-cover"
        />

        <h2 className="font-poppins sm:text-xl md:text-2xl text-center whitespace-pre-wrap font-light">
          About Me
        </h2>
        <p className="whitespace-pre-wrap  border-b-[1px] border-solid border-white pb-5">
          {props.contactInformation.aboutMe}
        </p>
        <h2 className="font-poppins sm:text-xl md:text-2xl text-center whitespace-pre-wrap font-light">
          Personal Details
        </h2>
        <div className="flex gap-2 justify-start items-center text-left">
          <AiOutlinePhone /> {props.contactInformation.phoneNumber}
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
