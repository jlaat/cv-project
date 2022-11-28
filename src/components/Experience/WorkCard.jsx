import React, { useState } from "react";

const WorkCard = (props) => {
  return (
    <div>
      <div className="flex flex-1 flex-col justify-start text-left ">
        <div className="flex flex-row gap-3">
          <h2 className="flex-1 font-poppins text-left text-neutral-700 font-bold justify-self-center">
            {props.employer}
          </h2>
          <h2 className="flex-1 font-poppins text-left text-neutral-700 font-bold justify-self-start">
            {`${props.jobStart} - ${props.jobEnd}`}
          </h2>
        </div>
        <h3 className="font-poppins text-left text-neutral-600">
          {`Title: ${props.title}`}
        </h3>
      </div>
    </div>
  );
};

export default WorkCard;
