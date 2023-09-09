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
            <h2>Prepared and Supported</h2>
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
            <h2>Above and Beyond</h2>
            <p>"Laurie went above and beyond with prenatal, birth and postpartum care. My labor didn’t go as planned but thanks to Laurie’s guidance, we managed to deliver a beautiful baby naturally"</p>

            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">Read Full Review</a>
            <p className="name">Lenka - 2022-08-25</p>
          </div>

          <div className="review">
            <h2>Knowledgeable</h2>
            <p>"Laurie is knowledgeable, caring, and supportive. She eased my anxieties about childbirth by directing me to evidence-based research and knowledge... </p>
            <br/>
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">Read Full Review</a>
            <p className="name">Dorothy - 2022-09-06</p>
          </div>

           <div className="review">
            <h2>Dream delivery</h2>
            <p>"I’m thankful for her being there for me in ways I didn’t realize I needed. As a calming presence she eased my mind of the noise which allowed me to focus on my labour and ultimately my dream delivery of my last baby..."</p>
            <br/>
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">Read Full Review</a>
            <p className="name">Ania  2023-08-04</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Reviews;