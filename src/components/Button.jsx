import { useState } from 'react'
import ButtonCSS from "./Button.module.css"

const Button = ({type, updateStep}) => {
  const [isHover, setIsHover] = useState(false);

  if (type === "next") {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => updateStep(prevStep => prevStep + 1)}
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
        onClick={() => updateStep(prevStep => prevStep - 1)}
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
