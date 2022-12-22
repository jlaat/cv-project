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
    <section className="flex-1 basis-[50px] bg-neutral-200 rounded-[10px] p-3 shadow-xl">
      <p className="flex-1 font-light text-neutral-700">{props.degree}</p>
      <p className="flex-1 font-light text-neutral-700">{props.school}</p>
      <p className="flex-1 font-light text-neutral-700">{props.city}</p>
      <p className="flex-1 font-light text-neutral-700">{props.startDate}</p>
      <p className="flex-1 font-light text-neutral-700">{props.endDate}</p>
      <button
        className="text-neutral-700 bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400"
        onClick={deleteEducation}
      >
        Delete
      </button>
    </section>
  );
};

export default EducationInputCard;
