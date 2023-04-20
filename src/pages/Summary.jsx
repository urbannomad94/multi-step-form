import SummaryCSS from "./Summary.module.css"
import SideBar from '../components/SideBar'

const Summary = ({updateStep, activeStep}) => {
  return (
    <main>
      <SideBar activeStep={activeStep} />
      <h1>Summary</h1>
    </main>
  )
}

export default Summary;
