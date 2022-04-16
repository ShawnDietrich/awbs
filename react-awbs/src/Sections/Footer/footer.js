import React from "react";
import facebook from '../../pictures/facebook.png'
import instagram from '../../pictures/instagram.png'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div id="contactUs">
        <div class="contactTitle">
          <h1>Connect With Us</h1>
        </div>
        <div class="contactText">
          <div class="location">
            <h2>Located In Milton, Ontario</h2>
          </div>

          <div class="information">
            <p>
              We service most areas within a 1hr radius, including Oakville,
              Burlington, Georgetown, Acton, Mississauga, West Toronto, Vaughn,
              North York, Hamilton, Grimsby, Cambridge, Kitchener, Guelph.
            </p>
          </div>

          <div class="email">
            <p>Email:</p>
            <a href="mailto:ancientwisdombirth@gmail.com">
              ancientwisdombirth@gmail.com
            </a>
          </div>

          <div id="socialMedia">
            <div class="media">
              <a href="https://www.instagram.com/ancientwisdombirth_doula/">
                <img src={instagram} alt=''/>
              </a>
            </div>
            <div class="media">
              <a href="https://www.facebook.com/AncientWisdomBirth">
                <img src={facebook} alt=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Footer;