import React from "react";
import EducationCard from "./EducationCard";

const EducationOutput = (props) => {
  return (
    <div className="flex flex-col flex-1 text-white justify-start items-center mt-10 mx-5 p-5 border-b-2 border-neutral-400">
      <h1 className="font-poppins text-neutral-800 text-lg px-1 mb-5 ">
        Education
      </h1>
      <div className="flex flex-1 w-[100%] gap-10 flex-col ">
        {props.educationInputs.map((input) => {
          return (
            <EducationCard
              key={input.startDate}
              startDate={input.startDate}
              endDate={input.endDate}
              city={input.city}
              degree={input.degree}
              school={input.school}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationOutput;
