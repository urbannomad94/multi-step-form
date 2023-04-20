import SelectPlanCSS from './SelectPlan.module.css'
import SideBar from '../components/SideBar'
import PlanSelector from '../components/PlanSelector'

const SelectPlan = ({updateStep, activeStep}) => {
  return (
    <main>
      <SideBar activeStep={activeStep} />
      <PlanSelector />
    </main>
  )
}

export default SelectPlan;