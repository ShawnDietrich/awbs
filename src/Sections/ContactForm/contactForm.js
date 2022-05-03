import React, { useEffect, useRef } from 'react'
import './contactForm.css'
import { Link } from 'react-router-dom'
import contactImage from '../../pictures/teal.teacup.jpg'
import emailjs from '@emailjs/browser'
import dotenv from 'dotenv';
dotenv.config();

const serviceID = process.env.SERVICE_ID;//'service_whc1zke'
const templateID = process.env.TEMPLATE_ID; //'template_zbl8m8g'
const giftTemplateID = process.env.GIFT_TEMPLATE; //'template_untp5bh'
const userID = process.env.USER_ID //'TeUXPLxcH5kdiJWOr'

const ContactForm = (props) => {
  const form = useRef()


  useEffect(() => {
    windowScroll();
  }, [])

  const windowScroll = () => {
    window.scrollTo({
      top: 1500,
      behavior: 'smooth',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        serviceID,
        props.gift ? giftTemplateID : templateID,
        form.current,
        userID,
      )
      .then(
        (result) => {
          props.gift
            ? alert('Your Gift Certificate Request Has Been Received')
            : alert('Booking Received')

          console.log(result)
        },
        (error) => {
          alert('Something went wrong please try again')
          console.log(error)
        },
      )
  }

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
          {!props.gift && (
            <div className="row">
              <div className="colLbl">
                <label htmlFor="fDue">Due Date:</label>
              </div>
              <div className="colInput">
                <input type="text" id="fDue" name="DueDate" />
              </div>
            </div>
          )}
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
              <Link to={'/'}>
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
  )
}

export default ContactForm
