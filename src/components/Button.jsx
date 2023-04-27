import { useContext, useState } from 'react'
import ButtonCSS from "./Button.module.css"
import { AppContext } from '../AppContext';

const Button = ({type, confirm, disabled}) => {
  const {setActiveStep} =  useContext(AppContext)
  const [isHover, setIsHover] = useState(false)

  if (type === "next") {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={disabled}
        onClick={() => setActiveStep(prevStep => prevStep + 1)}
        style={{
          color: 'white',
          backgroundColor: '#022959',
          right: '100px'
        }}
        className={isHover ? ButtonCSS.nextHover : ''}
          >Next Step</button>
    )
  } else if (type === "back") {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setActiveStep(prevStep => prevStep - 1)}
        style={{
          color: '#9699AA',
          backgroundColor: 'transparent',
          left: '390px'
        }}
        className={isHover ? ButtonCSS.backHover : ''}
          >Go Back</button>
    )
  } else if (type === "confirm") {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => confirm()}
        style={{
          color: '#FFFFFF',
          backgroundColor: '#483EFF',
          right: '100px'
        }}
        className={isHover ? ButtonCSS.confirmHover : ''}
          >Confirm</button>
    )
  }
}

export default Button;
