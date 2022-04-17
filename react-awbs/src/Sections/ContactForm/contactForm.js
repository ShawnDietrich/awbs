import React from "react";
import "./contactForm.css";
import { Link } from "react-router-dom";
import contactImage from '../../pictures/teal.teacup.jpg'
const ContactForm = () => {
  return (
    <>
    <div class="contactUsImage">
          <img src={contactImage} alt="Let's Chat!"
          width="50%"/>
        </div>

      <div className="consultForm">
        <form
          id="form"
        >
          <div className="row">
            <div className="colLbl">
              <label for="fName">Name:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fName" name="Name" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label for="fStreet">Street Address:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fStreet" name="Street" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label for="fCity">City:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fCity" name="City" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label for="fDue">Due Date:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fDue" name="DueDate" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label for="fPhone">Phone Number:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fPhone" name="Phone" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label for="fEmail">E-mail:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fEmail" name="Email" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label for="fGift">Gift Card Recipient (if applicable):</label>
            </div>
            <div className="colInput">
              <input type="text" id="fGift" name="Gift" />
            </div>
          </div>
          <div className="row">
            <div className="colInput buttons">
              <input type="submit" />
              <Link to={"/"}>
                <button type="button" className="backButton">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </form>
        <div className="backInput"></div>
      </div>
    </>
  );
};

export default ContactForm;
