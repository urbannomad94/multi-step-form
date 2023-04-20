import SummaryCSS from "./Summary.module.css"
import SideBar from '../components/SideBar'
import ThankYou from "../components/ThankYou";

const Summary = ({updateStep, activeStep}) => {
  return (
    <main>
      <SideBar activeStep={activeStep} />
      <ThankYou />
    </main>
  )
}

export default Summary;
