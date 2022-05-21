import giftCertPic from '../../pictures/giftCard.png'
import paymentPic from '../../pictures/paymentPlan.png'
import registeryPic from '../../pictures/registery.png'
import React from 'react'
import './doulaCare.css'

const DoulaCare = () => {
  return (
    <div className="pictures">
        <div className='picture'>
            <img src={giftCertPic} alt="gift pic" />
            <h2>Gift Cards Available</h2>
            <p>Let Family and Friends, even from afar, help get you the support you need!</p>
        </div>
        <div className='picture'>
            <img src={registeryPic} alt="registery pic"  />
            <h2>Be Her Village Registery</h2>
            <p>Available at Behervillage.com (registry seervice for suport not stuff)</p>
        </div>
        <div className='picture'>
            <img src={paymentPic} alt= "payment pic"/>
            <h2>Flexible Payment Plans</h2>
            <p>That works out to b $133 per month of your pregancy. Payment plans available</p>
        </div>
      
      
    </div>
  )
}

export default DoulaCare
