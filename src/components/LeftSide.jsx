import React from "react";
import { ContactInput, EducationInput, WorkInput } from "./index.js";

const LeftSide = (props) => {
  return (
    <div className="flex flex-1 flex-col basis-[40%] gap-10 p-10">
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
    </div>
  );
};

export default LeftSide;
