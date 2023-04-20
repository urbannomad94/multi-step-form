import SideBarCSS from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={SideBarCSS.container}>
        <div className={SideBarCSS.steps}>
            <div className={SideBarCSS.step}>
                <span className={SideBarCSS.stepNum}>1</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 1</span>
                    <h3>YOUR INFO</h3>
                </div>
            </div>
            <div className={SideBarCSS.step}>
                <span className={SideBarCSS.stepNum}>2</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 2</span>
                    <h3>SELECT PLAN</h3>
                </div>
            </div>
            <div className={SideBarCSS.step}>
                <span className={SideBarCSS.stepNum}>3</span>
                <div className={SideBarCSS.stepInfo}>
                    <span>Step 3</span>
                    <h3>ADD-ONS</h3>
                </div>
            </div>
            <div className={SideBarCSS.step}>
                <span className={SideBarCSS.stepNum}>4</span>
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
