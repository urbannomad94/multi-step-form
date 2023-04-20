import SelectPlanCSS from './SelectPlan.module.css'
import SideBar from '../components/SideBar'

const SelectPlan = ({updateStep, activeStep}) => {
  return (
    <main>
      <SideBar activeStep={activeStep} />
      <h1>Select Plan</h1>
    </main>
  )
}

export default SelectPlan;