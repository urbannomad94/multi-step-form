import { useState, useContext } from 'react'
import './App.css'
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Summary from './pages/Summary'
import { StepContext } from './context/stepContext'

function App() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <StepContext.Provider value={{activeStep, setActiveStep}}>
      <div className='container'>
        {activeStep === 1 && 
          <PersonalInfo/>}
        {activeStep === 2 && 
          <SelectPlan/>}
        {activeStep === 3 && 
          <AddOns/>}
        {activeStep === 4 && 
          <Summary/>}
      </div>
    </StepContext.Provider>
  )
}

export default App
