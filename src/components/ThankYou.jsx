import ThankYouCSS from "./ThankYou.module.css"
import Success from "../assets/svg-components/Success"

const ThankYou = () => {
  return (
    <div className={ThankYouCSS.container}>
      <Success />
      <h1 className={ThankYouCSS.title} >Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ThankYou
