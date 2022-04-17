import React from "react";
import facebook from '../../pictures/facebook.png'
import instagram from '../../pictures/instagram.png'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div id="contactUs">
        <div className="contactTitle">
          <h1>Connect With Us</h1>
        </div>
        <div className="contactText">
          <div className="location">
            <h2>Located In Milton, Ontario</h2>
          </div>

          <div className="information">
            <p>
              We service most areas within a 1hr radius, including Oakville,
              Burlington, Georgetown, Acton, Mississauga, West Toronto, Vaughn,
              North York, Hamilton, Grimsby, Cambridge, Kitchener, Guelph.
            </p>
          </div>

          <div className="email">
            <p>Email:</p>
            <a href="mailto:ancientwisdombirth@gmail.com">
              ancientwisdombirth@gmail.com
            </a>
          </div>

          <div id="socialMedia">
            <div className="media">
              <a href="https://www.instagram.com/ancientwisdombirth_doula/">
                <img src={instagram} alt=''/>
              </a>
            </div>
            <div className="media">
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