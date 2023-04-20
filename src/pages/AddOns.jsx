import AddOnsCSS from "./AddOns.module.css"
import SideBar from '../components/SideBar'

const AddOns = ({updateStep, activeStep}) => {
  return (
    <main>
      <SideBar activeStep={activeStep} />
      <h1>Add Ons</h1>
    </main>
  )
}

export default AddOns;
