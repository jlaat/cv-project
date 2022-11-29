import React, { useState } from "react";

const EducationCard = (props) => {
  return (
    <div className="flex flex-1 flex-col justify-start text-left w-[100%]">
      <div className="flex flex-row gap-3">
        <h2 className="flex-1 font-poppins text-left text-neutral-700 font-bold justify-self-start">
          {props.school}
        </h2>
        <h2 className="flex-1 font-poppins text-neutral-700 font-bold justify-self-end text-right">
          {`${props.startDate} - ${props.endDate}`}
        </h2>
      </div>

      <h3 className="flex-1 font-poppins text-left text-neutral-600">
        Degree: {props.degree}
      </h3>
    </div>
  );
};

export default EducationCard;
