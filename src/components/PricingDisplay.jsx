import { useContext } from 'react'
import PricingDisplayCSS from './PricingDisplay.module.css'
import { AppContext } from '../AppContext'
import Button from './Button'

const PricingDisplay = ({confirm}) => {
  const {setActiveStep, planTime, planTier, addOns} = useContext(AppContext)

  function uppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const tier = uppercase(planTier)
  const time = uppercase(planTime)

  let tierPrice
  if (tier === "Arcade") {
    tierPrice = 9
  } else if (tier === "Advanced") {
    tierPrice = 12
  } else {
    tierPrice = 15
  }

  let basePrice
  if (time === "Monthly") {
    basePrice = tierPrice
  } else {
    basePrice = 10 * tierPrice
  }

  let addOnPrice = 0;
  if (time === "Monthly") {
    if (addOns.includes("Online service")) {
      addOnPrice += 1
    } if (addOns.includes("Larger storage")){
      addOnPrice += 2
    } if (addOns.includes("Customizable profile")){
      addOnPrice += 2
    }
  } else {
    if (addOns.includes("Online service")) {
      addOnPrice += 10
    } if (addOns.includes("Larger storage")){
      addOnPrice += 20
    } if (addOns.includes("Customizable profile")){
      addOnPrice += 20
    }
  }

  let totalPrice = basePrice + addOnPrice

  const addOnElements = addOns.map(addOn => {
    return (
      <div key={addOn} className={PricingDisplayCSS.detailsContainer}>
        <p>{addOn}</p>
        {addOn === "Online service" ? <span>{time === "Monthly" ? "$1/mo" : "$10/yr"}</span> : <span>{time === "Monthly" ? "$2/mo" : "$20/yr"}</span>}
        
      </div>
    )
  })

  return (
    <div className={PricingDisplayCSS.container}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={PricingDisplayCSS.summary}>
        <div className={PricingDisplayCSS.detailsContainer}>
          <div className={PricingDisplayCSS.details}>
            <h3 className={PricingDisplayCSS.title}>{tier} ({time})</h3>
            <span 
                className={PricingDisplayCSS.change}
                onClick={() => setActiveStep(2)}>Change</span>
          </div>
          <span className={PricingDisplayCSS.price}>${basePrice}/{time === "Monthly" ? "mo" : "yr"}</span>
        </div>
        <hr />
        {addOnElements}
      </div>
      <div className={PricingDisplayCSS.total}>
        <p>Total (per {time === "Monthly" ? "month" : "year"})</p>
        <span>+${totalPrice}/{time === "Monthly" ? "mo" : "yr"}</span>
      </div>
      <div className="btnContainer">
        <Button type="confirm" confirm={confirm} />
        <Button type="back" />
      </div>
    </div>
  )
}

export default PricingDisplay;
