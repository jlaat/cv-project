import React from "react";

const WorkInputCard = (props) => {
  const deleteExperience = (event) => {
    event.preventDefault();
    props.passWorkInputs(
      props.workInputs.filter(
        (experience) =>
          experience.title != props.title &&
          experience.description != props.description
      )
    );
  };

  return (
    <section className="flex-1 bg-neutral-200 rounded-[10px] p-3 shadow-xl">
      <p className="flex-1 font-light text-neutral-700">{props.title}</p>
      <p className="flex-1 font-light text-neutral-700">{props.employer}</p>
      <p className="flex-1 font-light text-neutral-700">{props.jobStart}</p>
      <p className="flex-1 font-light text-neutral-700">{props.jobEnd}</p>
      <p className="flex-1 font-light text-neutral-700">{props.description}</p>
      <button
        className="text-neutral-700 bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400"
        onClick={deleteExperience}
      >
        Delete
      </button>
    </section>
  );
};

export default WorkInputCard;
