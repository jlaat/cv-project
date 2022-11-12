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
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <div className='bg-primary flex flex-row flex-1 flex-grow-1 px-5'>
        <div className='flex flex-1 flex-col gap-10'>
          <ContactInput />
          <EducationInput />
          <WorkInput />
        </div>

        <div className='flex flex-1 basis-[65%] flex-col bg-discount-gradient ml-5 rounded-[10px] '>
          <ContactOutput />
          <div className='flex flex-1 flex-row justify-center'>
            <EducationOutput />
            <WorkOutput />
          </div>
        </div>
        <Footer />
      </div>
     
    </div>
     
    
  )
}

export default App
