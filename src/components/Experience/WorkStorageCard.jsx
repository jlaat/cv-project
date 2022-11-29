import React from "react";

const WorkInputCard = () => {
  return (
    <section className="flex-1 bg-neutral-600 rounded-[10px] p-3">
      <p className="flex-1 font-light text-white">{props.title}</p>
      <p className="flex-1 font-light text-white">{props.employer}</p>
      <p className="flex-1 font-light text-white">{props.jobStart}</p>
      <p className="flex-1 font-light text-white">{props.jobEnd}</p>
      <p className="flex-1 font-light text-white">{props.description}</p>
    </section>
  );
};

export default WorkInputCard;
