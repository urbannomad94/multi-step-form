import { useContext, useState } from "react"
import PlanSelectorCSS from "./PlanSelector.module.css"
import Button from "./Button"
import { AppContext } from "../AppContext"
import Arcade from "../assets/svg-components/Arcade"
import Advanced from "../assets/svg-components/Advanced"
import Pro from "../assets/svg-components/Pro"

const PlanSelector = () => {
    const {planTime, setPlanTime, planTier, setPlanTier} = useContext(AppContext)

    let disabled = !planTier

  const activeStyle = {
    background: '#F8F9FF',
    border: '1px solid #483EFF'
  }

  return (
    <div className={PlanSelectorCSS.container}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className={PlanSelectorCSS.planOptions}>
            <span className={disabled ? PlanSelectorCSS.error : 'hidden'}>Please select a plan</span>
            <div
                className={PlanSelectorCSS.planOption}
                style={planTier === 'arcade' ? activeStyle : {}}
                onClick={() => setPlanTier('arcade')}>
                <Arcade />
                <h3>Arcade</h3>
                {planTime === "monthly" ? 
                    <span>$9/month</span> : (
                    <>
                        <span>$90/year</span>
                        <span className={PlanSelectorCSS.discount}>2 months free</span>
                    </>
                )}
            </div>
            <div
                className={PlanSelectorCSS.planOption}
                style={planTier === 'advanced' ? activeStyle : {}}
                onClick={() => setPlanTier('advanced')}>
                <Advanced />
                <h3>Advanced</h3>
                {planTime === "monthly" ? 
                    <span>$12/month</span> : (
                    <>
                        <span>$120/year</span>
                        <span className={PlanSelectorCSS.discount}>2 months free</span>
                    </>
                )}
            </div>
            <div
                className={PlanSelectorCSS.planOption}
                style={planTier === 'pro' ? activeStyle : {}}
                onClick={() => setPlanTier('pro')}>
                <Pro />
                <h3>Pro</h3>
                {planTime === "monthly" ? 
                    <span>$15/month</span> : (
                    <>
                        <span>$150/year</span>
                        <span className={PlanSelectorCSS.discount}>2 months free</span>
                    </>
                )}
            </div>
        </div>
        <div className={PlanSelectorCSS.planType}>
            <span
                className={PlanSelectorCSS.planTime}
                style={planTime === 'monthly' ? {color: '#022959'} : {}}
                onClick={() => setPlanTime('monthly')}
                >Monthly</span>
            <div 
                style={planTime === 'monthly' ? {justifyContent: 'left'}: {}}
                onClick={planTime === "monthly" ? (() => setPlanTime("yearly")) : (() => setPlanTime("monthly"))}
                className={PlanSelectorCSS.toggler}>
                <div className={PlanSelectorCSS.togglerBall}></div>
            </div>
            <span
                className={PlanSelectorCSS.planTime}
                style={planTime === 'yearly' ? {color: '#022959'} : {}}
                onClick={() => setPlanTime('yearly')}>Yearly</span>
        </div>

        <Button disabled={disabled} type="next"/>
        <Button type="back" />
    </div>
  )
}

export default PlanSelector
