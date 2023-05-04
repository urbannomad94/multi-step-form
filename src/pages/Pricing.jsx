import { useState } from 'react'
import PricingDisplay from '../components/PricingDisplay'
import SideBar from '../components/SideBar'
import ThankYou from '../components/ThankYou'

const Pricing = () => {
  const [confirmed, setConfirmed] = useState(false);
  const confirm = (e) => {
    setConfirmed(true);
  }

  return (
    <main>
      <SideBar />
      {confirmed ? <ThankYou /> : <PricingDisplay confirm={confirm} />} 
    </main>
  )
}

export default Pricing
