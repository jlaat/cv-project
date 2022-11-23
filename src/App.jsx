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
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    aboutMe: "",
  })

  const [educationInputs, setEducationInputs] = useState([]);

  const [file, setFile] = useState(null);

  return (
    <div className='App'>
      <Header />
      <div className='bg-primary flex flex-col md:flex-row lg:flex-row gap-3 flex-1 basis-[40%] px-5'>
        <div className='flex flex-1 flex-col basis-[40%] gap-10'>
          <ContactInput contactInformation={contactInformation} passContactInformation={setContactInformation} />
          <EducationInput educationInputs={educationInputs} passEducationInputs={setEducationInputs} />
          <WorkInput />
        </div>

        <div className='flex flex-1 basis-[60%] flex-row bg-discount-gradient rounded-[10px] '>
          <ContactOutput contactInformation={contactInformation} />
          <div className='flex flex-1 flex-row basis-[70%] justify-center bg-dimWhite'>
            <EducationOutput />
            <WorkOutput />
          </div>
        </div>
      </div>
     
    </div>
     
    
  )
}

export default App
