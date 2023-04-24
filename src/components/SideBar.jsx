import { useContext } from 'react'
import SideBarCSS from './SideBar.module.css'
import { StepContext } from '../context/stepContext'

const SideBar = () => {
    const {activeStep} = useContext(StepContext)

    const activeStyle = {
        backgroundColor: '#BEE2FD',
        color: 'black',
        border: 'none'
    }

  return (
    <div className={SideBarCSS.container}>
        <div className={SideBarCSS.steps}>
            <div className={SideBarCSS.step}>
                <span
                    className={SideBarCSS.stepNum}
                    style={activeStep === 1 ? activeStyle : {}}>1</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 1</span>
                    <h3>YOUR INFO</h3>
                </div>
            </div>
            <div className={SideBarCSS.step}>
                <span
                    className={SideBarCSS.stepNum}
                    style={activeStep === 2 ? activeStyle : {}}>2</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 2</span>
                    <h3>SELECT PLAN</h3>
                </div>
            </div>
            <div className={SideBarCSS.step}>
                <span
                    className={SideBarCSS.stepNum}
                    style={activeStep === 3 ? activeStyle : {}}>3</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 3</span>
                    <h3>ADD-ONS</h3>
                </div>
            </div>
            <div className={SideBarCSS.step}>
                <span
                    className={SideBarCSS.stepNum}
                    style={activeStep === 4 ? activeStyle : {}}>4</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 4</span>
                    <h3>SUMMARY</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar;
