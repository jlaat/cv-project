import React from "react";
import {
  ContactOutput,
  NameTitleOutput,
  EducationOutput,
  WorkOutput,
} from "./index.js";

const RightSide = (props) => {
  return (
    <div
      id="rightSide"
      className="flex w-[210mm] h-[279mm] flex-row rounded-[10px]  sticky top-0 shadow-lg"
    >
      <ContactOutput contactInformation={props.contactInformation} />
      <div className="flex flex-1 flex-col basis-[70%] bg-white">
        <NameTitleOutput contactInformation={props.contactInformation} />
        <EducationOutput
          educationInputs={props.educationInputs}
          contactInformation={props.contactInformation}
        />
        <WorkOutput workInputs={props.workInputs} />
      </div>
    </div>
  );
};

export default RightSide;
