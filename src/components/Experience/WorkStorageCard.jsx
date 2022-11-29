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
    <section className="flex-1 bg-neutral-600 rounded-[10px] p-3">
      <p className="flex-1 font-light text-white">{props.title}</p>
      <p className="flex-1 font-light text-white">{props.employer}</p>
      <p className="flex-1 font-light text-white">{props.jobStart}</p>
      <p className="flex-1 font-light text-white">{props.jobEnd}</p>
      <p className="flex-1 font-light text-white">{props.description}</p>
      <button
        className="text-white bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400"
        onClick={deleteExperience}
      >
        Delete
      </button>
    </section>
  );
};

export default WorkInputCard;
