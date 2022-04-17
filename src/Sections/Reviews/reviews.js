import React from "react";
import './reviews.css'
const Reviews = () => {


    return (
        <>
         {/*<!--Reviews-->*/}
      <div id="reviews">
        {/*<!--Title-->*/}
        <div className="reviewTitle">
          <h1>What Clients Are Saying</h1>
        </div>
        <div className="reviewBlocks">
          <div className="review">
            <h3>Prepared and Supported</h3>
            <p>
              "When we met Laurie it was an instant connection. She had a very
              calming and friendly presence th..."
            </p>
            <br />
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">
              Read Full Review
            </a>
            <p className="name">Tania - 2021-07-29</p>
          </div>

          {/*<!--Add More reviews here -->*/}

          <div className="review">
            <h3>Your Review Comming Soon</h3>
            <p>"Your review here"</p>
            <br />
            <br />
            <br />
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">Read Full Review</a>
            <p className="name"> 2022</p>
          </div>
        </div>
      </div>
        </>
    )
};

export default Reviews;