import React from "react";

const EducationInputCard = (props) => {
  const deleteEducation = (event) => {
    event.preventDefault();
    props.passEducationInputs(
      props.educationInputs.filter(
        (education) =>
          education.degree != props.degree &&
          education.startDate != props.startDate
      )
    );
  };

  return (
    <section className="flex-1 bg-neutral-600 rounded-[10px] p-3">
      <p className="flex-1 font-light text-white">{props.degree}</p>
      <p className="flex-1 font-light text-white">{props.school}</p>
      <p className="flex-1 font-light text-white">{props.city}</p>
      <p className="flex-1 font-light text-white">{props.startDate}</p>
      <p className="flex-1 font-light text-white">{props.endDate}</p>
      <button
        className="text-white bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400"
        onClick={deleteEducation}
      >
        Delete
      </button>
    </section>
  );
};

export default EducationInputCard;
