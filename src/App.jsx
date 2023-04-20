import { useState } from 'react'
import './App.css'
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Summary from './pages/Summary'



function App() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className='container'>
      {activeStep === 1 && <PersonalInfo updateStep={setActiveStep} />}
      {activeStep === 2 && <SelectPlan updateStep={setActiveStep} />}
      {activeStep === 3 && <AddOns updateStep={setActiveStep} />}
      {activeStep === 4 && <Summary updateStep={setActiveStep} />}
    </div>
  )
}

export default App
