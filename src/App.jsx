import { useState } from 'react'
import './App.css'
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Summary from './pages/Summary'



function App() {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <div className='container'>
      <Summary />
      {/* {activeStep === 1 && 
        <PersonalInfo
          updateStep={setActiveStep}
          activeStep={activeStep} />}
      {activeStep === 2 && 
        <SelectPlan
          updateStep={setActiveStep}
          activeStep={activeStep} />}
      {activeStep === 3 && 
        <AddOns
          updateStep={setActiveStep}
          activeStep={activeStep} />}
      {activeStep === 4 && 
        <Summary
          updateStep={setActiveStep}
          activeStep={activeStep} />} */}
    </div>
  )
}

export default App
