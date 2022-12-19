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
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    aboutMe: "",
    photo: null,
  });

  const [educationInputs, setEducationInputs] = useState([]);

  const [workInputs, setWorkInputs] = useState([]);

  const [file, setFile] = useState(null);

  return (
    <div className="App">
      <Header />
      <main className="flex flex-col md:flex-row bg-gray-300 align-top">
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
          workInputs={workInputs}
        />
      </main>
    </div>
  );
}

export default App;
