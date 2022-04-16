import React from "react";
import doulaPic from "../../pictures/Let_s.Doula.This.png";
import './bookNow.css';

const BookNow = () => {
  return (
    <>
      <div class="bookNow">
        {/*<!--Title-->*/}
        <div class="reviewTitle">
          <h1>Book Now</h1>
        </div>
        <img src={doulaPic} alt="Let's Doula this!!" />
        <div class="bookTitle">
          <h2>Free 30min consultation to see if we'd make a great team</h2>
        </div>
        <div class="bookButtons">
          <a href="./form.html">Book Now</a>
          <a href="./form.html">Send a Gift Certificate</a>
        </div>
      </div>
    </>
  );
};

export default BookNow;
