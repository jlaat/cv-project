import { useState } from 'react'
import {ContactInput,
  ContactOutput,
  EducationInput,
  EducationOutput,
  Footer,
  Header,
  WorkInput,
  WorkOutput} from "./components";

function App() {
  const [contactInformation, setContactInformation] = useState({
    firstName: "Joni",
    lastName: "Laatikainen",
    address: "Laiduntie 1 A9",
    phoneNumber: "0405452601",
    email: "jonilaatikaine@gmail.com",
    aboutMe: "Ahkera poika",
  })

  const [educationInputs, setEducationInputs] = useState([{"degree":"Talotekniikan perustutkinto","school":"Pohjois-karjalan koulutuskuntayhtymä","city":"Joensuu","startDate":"2014-12-16","endDate":"2015-11-18"}]);


  const [workInputs, setWorkInputs] = useState([{title: "Asentaja",
  employer: "Vesivek Oy",
  jobStart: "",
  jobEnd: "",
  description: "",}]);

  const [file, setFile] = useState(null);

  return (
    <div className='App'>
      <Header />
      <div className='bg-primary flex flex-col md:flex-row lg:flex-row gap-3 flex-1 basis-[40%] px-5'>
        <div className='flex flex-1 flex-col basis-[40%] gap-10'>
          <ContactInput contactInformation={contactInformation} passContactInformation={setContactInformation} />
          <EducationInput educationInputs={educationInputs} passEducationInputs={setEducationInputs} />
          <WorkInput workInputs={workInputs} passWorkInputs={setWorkInputs} />
        </div>

        <div className='flex flex-1 basis-[210mm] flex-row bg-discount-gradient rounded-[10px]'>
          <ContactOutput contactInformation={contactInformation} />
          <div className='flex flex-1 flex-row basis-[70%] justify-center bg-dimWhite'>
            <EducationOutput educationInputs={educationInputs} />
            <WorkOutput />
          </div>
        </div>
      </div>
     
    </div>
     
    
  )
}

export default App
