import React, { useState } from "react";

const WorkCard = (props) => {
  return (
    <div>
      <div className="flex flex-1 flex-col justify-start text-left ">
        <h2 className="font-poppins text-left text-neutral-700 font-bold">{`${props.jobStart} - ${props.jobEnd}`}</h2>
        <h2 className="font-poppins text-left text-neutral-700 font-bold">
          {props.employer}
        </h2>
        <h3 className="font-poppins text-left text-neutral-600">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default WorkCard;
