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
            <br />
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">
              Read Full Review
            </a>
            <p className="name">Tania - 2021-07-29</p>
          </div>

          {/*<!--Add More reviews here -->*/}
          <div className="review">
            <h3>Above and Beyond</h3>
            <p>"Laurie went above and beyond with prenatal, birth and postpartum care. My labor didn’t go as planned but thanks to Laurie’s guidance, we managed to deliver a beautiful baby naturally"</p>

            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">Read Full Review</a>
            <p className="name">Lenka - 2022-08-25</p>
          </div>

          <div className="review">
            <h3>Knowledgeable</h3>
            <p>"Laurie is knowledgeable, caring, and supportive. She eased my anxieties about childbirth by directing me to evidence-based research and knowledge... </p>
            <br/>
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">Read Full Review</a>
            <p className="name">Dorothy - 2022-09-06</p>
          </div>


          
          
        </div>
      </div>
    </>
  )
};

export default Reviews;