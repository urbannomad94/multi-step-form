import { useContext, useState } from 'react'
import ButtonCSS from "./Button.module.css"
import { StepContext } from '../context/stepContext';

const Button = ({type}) => {
  const {setActiveStep} =  useContext(StepContext)
  const [isHover, setIsHover] = useState(false);

  if (type === "next") {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
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
  }
}

export default Button;
