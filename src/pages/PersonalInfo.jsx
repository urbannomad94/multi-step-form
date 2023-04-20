import PersonalInfoForm from '../components/PersonalInfoForm'
import SideBar from '../components/SideBar'
import PersonInfoCSS from './PersonalInfo.module.css'

const PersonalInfo = ({updateStep, activeStep}) => {
  return (
    <main>
      <SideBar activeStep={activeStep} />
      <PersonalInfoForm updateStep={updateStep} />
    </main>
  )
}

export default PersonalInfo
