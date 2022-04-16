import React from "react";
import './packages.css';


const Packages = () => {


    return (
        <>
         {/* What you Get Section */}
      <div id="services">
        {/* Title */}
        <h1>The Doula Experience Includes</h1>
        <div class="serviceText">
          {/* Service and cost */}
          <div class="service">
            <h3>ANCIENT WISDOM BIRTH PACKAGE</h3>
            <h3 class="price">$1200</h3>
          </div>
          {/* Service List */}
          <h3 class="includes">Includes:</h3>
          <div class="serviceList">
            <ul>
              <li>2 prenatal visits (details provided in Welcome Package)</li>
              <li>Mother Blessing Ceremony facilitation</li>
              <li>
                Guidance on creating both a written and a visual birth plan
              </li>
              <li>On-going support via text or e-mail</li>
              <li>On-call at 38 weeks of pregnancy</li>
              <li>Labour and birth support</li>
              <li>
                1 postnatal visit, including basic breastfeeding support,
                babywearing consult, cloth diaper and elimination communication
                support
              </li>
            </ul>
          </div>
          <div class="service">
            <h3>BIRTH POOL RENTAL (for clients only)</h3>
            <h3 class="price">$100</h3>
          </div>
          <div class="serviceList">
            <ul>
              <li>Made In Water birth pool </li>
              <li>Includes liner</li>
              <li>
                Client will need: air pump, fresh water hose, net, and
                thermometer
              </li>
            </ul>
          </div>
          <div class="serviceFooter">
            <p>
              Postpartum services are available at the cost of $40/hr with a
              minimum of 4 consecutive hours per booking.
            </p>
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

export default Packages;