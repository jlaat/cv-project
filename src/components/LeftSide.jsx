import React from "react";
import { ContactInput, EducationInput, WorkInput } from "./index.js";

const LeftSide = (props) => {
  const opt = {
    filename: "cv.pdf",
    html2canvas: {
      scale: 2,
      scrollY: 0,
      useCORS: true,
    },
  };

  const handleResetDocument = () => {
    props.passContactInformation({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      aboutMe: "",
      photo: null,
    });
    props.passEducationInputs([]);
    props.passWorkInputs([]);
  };

  const handleExampleClick = () => {
    props.passContactInformation({
      firstName: "John",
      lastName: "Doe",
      title: "Junior Developer",
      address: "Example Street 1, 12345 Example City",
      phoneNumber: "0123456789",
      email: "john@example.com",
      aboutMe:
        "Aspiring junior developer with a passion for learning new technologies and solving problems.",
      photo: null,
    });
    props.passEducationInputs([
      {
        degree: "Computer Science",
        school: "University of Eastern Finland",
        city: "Joensuu",
        startDate: 2019,
        endDate: "2024",
      },
    ]);
    props.passWorkInputs([
      {
        key: 11,
        employer: "Example Company",
        title: "Junior Developer",
        jobStart: "2021",
        jobEnd: "2022",
        description:
          "Worked as a junior developer at Example Company. Learned a lot about the company's technologies and processes.",
      },
    ]);
  };

  const handleClick = () => {
    html2pdf().from(document.querySelector("#rightSide")).set(opt).save();
  };
  return (
    <div className="flex flex-1 flex-col basis-[40%] gap-10">
      <ContactInput
        contactInformation={props.contactInformation}
        passContactInformation={props.passContactInformation}
      />
      <EducationInput
        educationInputs={props.educationInputs}
        passEducationInputs={props.passEducationInputs}
      />
      <WorkInput
        workInputs={props.workInputs}
        passWorkInputs={props.passWorkInputs}
      />
      <button
        onClick={handleClick}
        className="text-neutral-700 bg-green-600 py-1 px-3 rounded-[9px] hover:bg-green-500 w-[200px] self-center"
      >
        Generate PDF
      </button>
      <button
        className="text-neutral-700 bg-yellow-600 py-1 px-3 rounded-[9px] hover:bg-yellow-500 w-[200px] self-center"
        onClick={handleExampleClick}
      >
        Create Example
      </button>
      <button
        className="text-neutral-700 bg-red-600 py-1 px-3 rounded-[9px] hover:bg-red-500 w-[200px] self-center"
        onClick={handleResetDocument}
      >
        Reset Document
      </button>
    </div>
  );
};

export default LeftSide;
