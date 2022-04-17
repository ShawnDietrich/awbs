import React, { useRef } from "react";
import "./contactForm.css";
import { Link } from "react-router-dom";
import contactImage from "../../pictures/teal.teacup.jpg";
import { SendFormAPI } from "../../FormAPI/SendForm";
import emailjs from "@emailjs/browser";
const serviceID = 'service_whc1zke';
const templateID = 'template_zbl8m8g';
const userID = 'TeUXPLxcH5kdiJWOr';

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, userID)
    .then((result) => {
      alert('Booking Received')
      
      console.log(result);
    }, 
    (error)=> {console.log(error);});
  };

  return (
    <>
      <div className="contactUsImage">
        <img src={contactImage} alt="Let's Chat!" width="50%" />
      </div>

      <div className="consultForm">
        <form id="form" ref={form} onSubmit={handleSubmit}>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fName">Name:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fName" name="Name" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fStreet">Street Address:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fStreet" name="Street" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fCity">City:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fCity" name="City" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fDue">Due Date:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fDue" name="DueDate" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fPhone">Phone Number:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fPhone" name="Phone" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fEmail">E-mail:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fEmail" name="Email" />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fGift">
                Gift Card Recipient (if applicable):
              </label>
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