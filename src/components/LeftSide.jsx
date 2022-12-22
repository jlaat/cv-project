import React from "react";
import { ContactInput, EducationInput, WorkInput } from "./index.js";

const LeftSide = (props) => {
  const opt = {
    filename: "file.pdf",
    html2canvas: {
      scale: 2,
      scrollY: 0,
    },
    image: { type: "jpeg", quality: 0.2 },
  };
  const handleClick = () => {
    html2pdf().from(document.querySelector("#rightSide")).set(opt).save();
  };
  return (
    <div className="flex flex-1 flex-col basis-[40%] gap-10">
      <ContactInput
        contactInformation={props.contactInformation}
        passContactInformation={props.passContactInformation}
      />
      <EducationInput
        educationInputs={props.educationInputs}
        passEducationInputs={props.passEducationInputs}
      />
      <WorkInput
        workInputs={props.workInputs}
        passWorkInputs={props.passWorkInputs}
      />
      <button
        onClick={handleClick}
        className="text-neutral-700 bg-green-600 py-1 px-3 rounded-[9px] hover:bg-green-500 w-[200px] self-center"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default LeftSide;
