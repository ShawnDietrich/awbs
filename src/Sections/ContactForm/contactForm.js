import React, { useEffect, useRef } from "react";
import "./contactForm.css";
import { Link } from "react-router-dom";
import contactImage from "../../pictures/teal.teacup.jpg";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
dotenv.config();

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const giftTemplateID = process.env.REACT_APP_GIFT_TEMPLATE;
const userID = process.env.REACT_APP_USER_ID;

const ContactForm = (props) => {
  const form = useRef();

  useEffect(() => {
    windowScroll();
  }, []);

  const windowScroll = () => {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        serviceID,
        props.gift ? giftTemplateID : templateID,
        form.current,
        userID
      )
      .then(
        (result) => {
          props.gift
            ? alert("Your Gift Certificate Request Has Been Received")
            : alert("Booking Received");

          console.log(result);
        },
        (error) => {
          alert("Something went wrong please try again");
          console.log(error);
        }
      );
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
              <input type="text" id="fName" name="Name" required />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fStreet">Street Address:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fStreet" name="Street" required />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fCity">City:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fCity" name="City" required />
            </div>
          </div>
          {!props.gift && (
            <div className="row">
              <div className="colLbl">
                <label htmlFor="fDue">Due Date:</label>
              </div>
              <div className="colInput">
                <input type="text" id="fDue" name="DueDate" required />
              </div>
            </div>
          )}
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fPhone">Phone Number:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fPhone" name="Phone" required />
            </div>
          </div>
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fEmail">E-mail:</label>
            </div>
            <div className="colInput">
              <input type="text" id="fEmail" name="Email" required />
            </div>
          </div>
          {!props.gift && (
            <>
              <div className="row">
                <label htmlFor="fCareProvider">
                  Current care provider (O.B., Midwife, TBA, Self):
                </label>
                <div className="colInput">
                  <input type="text" id="fCareProvider" name="CareProvider" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="fIntendedPlaceBirth">
                  Intended place of birth:
                </label>
                <div className="colInput">
                  <input
                    type="text"
                    id="fIntendedPlaceBirth"
                    name="BrithPlace"
                  />
                </div>
              </div>
            </>
          )}
          <div className="row">
            <div className="colLbl">
              <label htmlFor="fHearAbout">
                How did you hear about me? (Google search, referral, market):
              </label>
            </div>
            <div className="colInput">
              <input type="text" id="fHearAbout" name="HearAbout" />
            </div>
          </div>
          {props.gift && (
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
          )}
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
