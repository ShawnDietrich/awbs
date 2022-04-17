import React from "react";
import doulaPic from "../../pictures/Let_s.Doula.This.png";
import './bookNow.css';
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <>
      <div className="bookNow">
        {/*<!--Title-->*/}
        <div className="reviewTitle">
          <h1>Book Now</h1>
        </div>
        <img src={doulaPic} alt="Let's Doula this!!" />
        <div className="bookTitle">
          <h2>Free 30min consultation to see if we'd make a great team</h2>
        </div>
        <div className="bookButtons">
          <Link to="/form">Book Now</Link>
          <Link to="/form">Send a Gift Certificate</Link>
        </div>
      </div>
    </>
  );
};

export default BookNow;
