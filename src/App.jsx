import { useState } from 'react'
import PersonalInfo from './pages/PersonalInfo'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Pricing from './pages/Pricing'
import { AppContext } from './AppContext'

function App() {
  const [activeStep, setActiveStep] = useState(1)
  const [planTime, setPlanTime] = useState('monthly')
  const [planTier, setPlanTier] = useState(null)
  const [addOns,  setAddOns] = useState([])

  return (
    <AppContext.Provider value={{activeStep, setActiveStep, planTime, setPlanTime, planTier, setPlanTier, addOns,  setAddOns}}>
      <div className='container'>
        {activeStep === 1 && 
          <PersonalInfo/>}
        {activeStep === 2 && 
          <SelectPlan/>}
        {activeStep === 3 && 
          <AddOns/>}
        {activeStep === 4 && 
          <Pricing />}
      </div>
    </AppContext.Provider>
  )
}

export default App
