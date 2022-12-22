import React, { useState, useEffect } from "react";
import EducationStorageCard from "./EducationStorageCard";

const EducationInput = (props) => {
  const [educationValues, setEducationValues] = useState({
    degree: "",
    school: "",
    city: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setEducationValues({
      ...educationValues,
      [event.target.name]: event.target.value,
    });
  };

  const addToEducations = (event) => {
    event.preventDefault();
    props.passEducationInputs((current) => [...current, educationValues]);
  };

  return (
    <section className=" flex-1 bg-neutral-200 rounded-[10px] p-3 shadow-lg">
      <h2 className="flex-1 text-neutral-700 font-bold font-poppins pb-3">
        Education
      </h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="school"
          placeholder="School"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="city"
          placeholder="City/town"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="startDate"
          placeholder="From"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <input
          type="text"
          name="endDate"
          placeholder="To"
          id="endDate"
          onChange={handleChange}
          className="p-1 rounded-[4px]"
        />

        <div>
          <button
            className="text-neutral-700 bg-green-500 py-1 px-3 rounded-[10px] hover:bg-green-400"
            onClick={addToEducations}
          >
            Add
          </button>
          <button
            type="reset"
            className="text-neutral-700 bg-red-500 py-1 px-3 rounded-[10px] hover:bg-red-400 ml-3"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flex">
        {props.educationInputs.map((input) => {
          return (
            <EducationStorageCard
              passEducationInputs={props.passEducationInputs}
              educationInputs={props.educationInputs}
              degree={input.degree}
              school={input.school}
              city={input.city}
              startDate={input.startDate}
              endDate={input.endDate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default EducationInput;
