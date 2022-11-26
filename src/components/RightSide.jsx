import React from "react";
import {
  ContactOutput,
  NameTitleOutput,
  EducationOutput,
  WorkOutput,
} from "./index.js";

const RightSide = (props) => {
  return (
    <div className="flex w-[210mm] h-[270mm] flex-row rounded-[10px] p-10">
      <ContactOutput contactInformation={props.contactInformation} />
      <div className="flex-1 flex-col basis-[70%] justify-center bg-white">
        <NameTitleOutput contactInformation={props.contactInformation} />
        <EducationOutput
          educationInputs={props.educationInputs}
          contactInformation={props.contactInformation}
        />
        <WorkOutput />
      </div>
    </div>
  );
};

export default RightSide;
