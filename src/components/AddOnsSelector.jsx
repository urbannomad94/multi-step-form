import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Button from './Button';
import AddOnsSelectorCSS from './AddOnsSelector.module.css'
import Checkmark from '../assets/svg-components/Checkmark'

const AddOnsSelector = () => {
  const {planTime, addOns, setAddOns} = useContext(AppContext)

  const toggleAddOn = (addOn) => {
    if (addOns.includes(addOn)) {
      setAddOns(prev => prev.filter(item => item !== addOn))
    } else {
      setAddOns(prev => [...prev, addOn])
    }
  }

  const activeStyle = {
    background: '#F8F9FF',
    border: '1px solid #483EFF'
  }
  

  return (
    <div className={AddOnsSelectorCSS.container}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className={AddOnsSelectorCSS.addOnOptions}>
          <div 
            style={addOns.includes('Online service') ? activeStyle : null}
            className={AddOnsSelectorCSS.addOnOption}
            onClick={() => toggleAddOn('Online service')}>
            {/* <Checkmark /> */}
            <div className={AddOnsSelectorCSS.descriptionContainer}>
              <h3 className={AddOnsSelectorCSS.descriptionTitle}>Online service</h3>
              <span className={AddOnsSelectorCSS.descriptionInfo}>Access to multiplayer games</span>
            </div>
            <span className={AddOnsSelectorCSS.price}>
              {planTime === 'monthly' ? '+$1/mo' : '+$10/yr'} 
            </span>
          </div>
          <div 
            style={addOns.includes('Larger storage') ? activeStyle : null}
            className={AddOnsSelectorCSS.addOnOption}
            onClick={() => toggleAddOn('Larger storage')}>
            {/* <Checkmark /> */}
            <div className={AddOnsSelectorCSS.descriptionContainer}>
              <h3 className={AddOnsSelectorCSS.descriptionTitle}>Larger storage</h3>
              <span className={AddOnsSelectorCSS.descriptionInfo}>Extra 1TB of cloud save</span>
            </div>
            <span className={AddOnsSelectorCSS.price}>
              {planTime === 'monthly' ? '+$2/mo' : '+$20/yr'} 
            </span>
          </div>
          <div 
            style={addOns.includes('Customizable profile') ? activeStyle : null}
            className={AddOnsSelectorCSS.addOnOption}
            onClick={() => toggleAddOn('Customizable profile')}>
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
