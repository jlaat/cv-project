import { useState } from "react";
import {
  ContactInput,
  ContactOutput,
  EducationInput,
  EducationOutput,
  Footer,
  Header,
  WorkInput,
  WorkOutput,
  NameTitleOutput,
  LeftSide,
  RightSide,
} from "./components";

function App() {
  const [contactInformation, setContactInformation] = useState({
    firstName: "Joni",
    lastName: "Laatikainen",
    title: "Student",
    address: "Laiduntie 1 A9",
    phoneNumber: "0405452601",
    email: "jonilaatikaine@gmail.com",
    aboutMe: "Ahkera poika",
  });

  const [educationInputs, setEducationInputs] = useState([]);

  const [workInputs, setWorkInputs] = useState([
    {
      title: "Asentaja",
      employer: "Vesivek Oy",
      jobStart: "2019",
      jobEnd: "2022",
      description: "Töitä",
    },
  ]);

  const [file, setFile] = useState(null);

  return (
    <div className="App">
      <Header />
      <main className="flex flex-col md:flex-row bg-gray-300">
        <LeftSide
          contactInformation={contactInformation}
          passContactInformation={setContactInformation}
          educationInputs={educationInputs}
          passEducationInputs={setEducationInputs}
          workInputs={workInputs}
          passWorkInputs={setWorkInputs}
        />
        <RightSide
          contactInformation={contactInformation}
          educationInputs={educationInputs}
        />
      </main>
    </div>
  );
}

export default App;
