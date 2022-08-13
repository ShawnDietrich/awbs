import React from 'react'
import './packages.css'

const Packages = () => {
  return (
    <>
      {/* What you Get Section */}
      <div id="services">
        {/* Title */}
        <h1>The Doula Experience Includes</h1>
        <div className="serviceText">
          {/* Service and cost */}
          <div className="service">
            <h3>ANCIENT WISDOM BIRTH PACKAGE</h3>
            <h3 className="price">$1,500</h3>
          </div>
          {/* Service List */}
          <h3 className="includes">Includes:</h3>
          <div className="serviceList">
            <ul>
              <li>Two prenatal visits (details in Welcome Package)</li>
              <li>Ongoing telephone and e-mail support throughout pregnancy</li>
              <li>Mother Blessing Facilitation</li>
              <li>On-call at 38 weeks</li>
              <li>Labour and Birth support</li>
              <li>
                1 postnatal visit, including basic breastfeeding support,
                babywearing consult, cloth diaper and elimination communication
                support
              </li>
            </ul>
          </div>
          <div className="service">
            <h3>BIRTH POOL RENTAL (for clients only)</h3>
            <h3 className="price">$200</h3>
          </div>
          <div className="serviceList">
            <ul>
              <li>Made In Water birth pool </li>
              <li>
                Includes single-use liner and accessories (air pump, fresh water
                hose, faucet adapters, thermometer, single-use net, discharge
                hose, submersible pump, and 5 gallon bucket)
              </li>
            </ul>
          </div>
          <div className="service">
            <h3>POSTPARTUM CARE</h3>
          </div>
          <div className="serviceList">
            <ul>
              <li>
                On-demand hours (min. 3 consecutive hours per booking) $40/hr
              </li>
              <li>12hr Package (min. 3 consecutive hours per booking) $420</li>
            </ul>
          </div>
          <div className="serviceFooter">
            <p>
              **Clients over twenty kilometers from Milton, ON will be changed
              an additional fee of $0.60/km per in-person visit**
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Packages
