import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Button from './Button';
import AddOnsSelectorCSS from './AddOnsSelector.module.css'
import Checkmark from '../assets/svg-components/Checkmark'

const AddOnsSelector = () => {
  const {planTime, addOns, setAddOns} = useContext(AppContext)

  return (
    <div className={AddOnsSelectorCSS.container}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className={AddOnsSelectorCSS.addOnOptions}>
          <div className={AddOnsSelectorCSS.addOnOption}>
            {/* <Checkmark /> */}
            <div className={AddOnsSelectorCSS.descriptionContainer}>
              <h3 className={AddOnsSelectorCSS.descriptionTitle}>Online service</h3>
              <span className={AddOnsSelectorCSS.descriptionInfo}>Access to multiplayer games</span>
            </div>
            <span className={AddOnsSelectorCSS.price}>
              {planTime === 'monthly' ? '+$1/mo' : '+$10/yr'} 
            </span>
          </div>
          <div className={AddOnsSelectorCSS.addOnOption}>
            {/* <Checkmark /> */}
            <div className={AddOnsSelectorCSS.descriptionContainer}>
              <h3 className={AddOnsSelectorCSS.descriptionTitle}>Larger storage</h3>
              <span className={AddOnsSelectorCSS.descriptionInfo}>Extra 1TB of cloud save</span>
            </div>
            <span className={AddOnsSelectorCSS.price}>
              {planTime === 'monthly' ? '+$2/mo' : '+$20/yr'} 
            </span>
          </div>
          <div className={AddOnsSelectorCSS.addOnOption}>
            {/* <Checkmark /> */}
            <div className={AddOnsSelectorCSS.descriptionContainer}>
              <h3 className={AddOnsSelectorCSS.descriptionTitle}>Customizable profile</h3>
              <span className={AddOnsSelectorCSS.descriptionInfo}>Custom theme on your profile</span>
            </div>
            <span className={AddOnsSelectorCSS.price}>
              {planTime === 'monthly' ? '+$2/mo' : '+$20/yr'} 
            </span>
          </div>
        </div>
        <Button type="next"/>
        <Button type="back"/>
    </div>
    
  )
}

export default AddOnsSelector;
