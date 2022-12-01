import React, { useState } from "react";
import WorkStorageCard from "./WorkStorageCard";

const WorkInput = (props) => {
  const [workValues, setWorkValues] = useState({
    title: "Asentaja",
    employer: "Vesivek Oy",
    jobStart: "",
    jobEnd: "",
    description: "",
  });

  const handleChange = (event) => {
    setWorkValues({ ...workValues, [event.target.name]: event.target.value });
  };

  const addToExperiences = (event) => {
    event.preventDefault();
    props.passWorkInputs((current) => [...current, workValues]);
  };

  return (
    <section className="flex-1 bg-neutral-600 rounded-[10px] p-3">
      <h2 className="flex-1 text-blue-400 font-poppins font-bold pb-3">
        Work experience
      </h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Job title"
          name="title"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />
        <input
          type="text"
          placeholder="Employer"
          name="employer"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />
        <input
          type="text"
          placeholder="From"
          name="jobStart"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />
        <input
          type="text"
          placeholder="To"
          name="jobEnd"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="6"
          placeholder="Description"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />
        <div>
          <button
            className="text-white bg-green-500 py-1 px-3 rounded-[9px] hover:bg-green-400"
            onClick={addToExperiences}
          >
            Add
          </button>
          <button
            type="reset"
            className="text-white bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400 ml-3"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flex">
        {props.workInputs.map((input) => {
          return (
            <WorkStorageCard
              workInputs={props.workInputs}
              passWorkInputs={props.passWorkInputs}
              title={input.title}
              employer={input.employer}
              jobStart={input.jobStart}
              jobEnd={input.jobEnd}
              description={input.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkInput;
