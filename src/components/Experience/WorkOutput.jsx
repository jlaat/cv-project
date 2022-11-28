import React from "react";
import WorkCard from "./WorkCard";

const WorkOutput = (props) => {
  return (
    <div className="flex flex-col flex-1 text-white justify-start items-center mt-10 p-5">
      <h1 className="font-poppins text-neutral-800 text-lg mb-10 px-1 ">
        Experience
      </h1>
      <div className="flex flex-1 w-[100%] gap-10 flex-col ">
        {props.workInputs.map((input) => {
          return (
            <WorkCard
              key={input.startDate}
              employer={input.employer}
              title={input.title}
              jobStart={input.jobStart}
              jobEnd={input.jobEnd}
              description={input.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkOutput;
