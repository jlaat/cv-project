import React from "react";

const EducationInputCard = (props) => {
  return (
    <section className="flex-1 bg-neutral-600 rounded-[10px] p-3">
      <p className="flex-1 font-light text-white">{props.degree}</p>
      <p className="flex-1 font-light text-white">{props.school}</p>
      <p className="flex-1 font-light text-white">{props.city}</p>
      <p className="flex-1 font-light text-white">{props.startDate}</p>
      <p className="flex-1 font-light text-white">{props.endDate}</p>
    </section>
  );
};

export default EducationInputCard;
