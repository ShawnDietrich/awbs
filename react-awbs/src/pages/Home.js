import React from "react";

const Home = () => {
  return (
    <>
      {/*<!--What we do section-->*/}
      <div id="purpose">
        <div class="quote"></div>
        {/*<!--Title-->*/}
        <h1>What Do Doulas Do?</h1>
        <div class="purposeText">
          {/*purpose 1 */}
          <h3>PHYSICAL SUPPORT</h3>
          <p>
            As a birth doula, I offer women physical support throughout their
            pregnancy, labour and birth, and into early postpartum.
          </p>
          <p>
            Even with a partner on the scene, I am there to offer hands-on
            support if desired, guide the partner through effective techniques,
            relieve the partner when a break is needed, and generally "read the
            room" to ensure a safe and nurturing environment for the labouring
            woman is created and maintained.
          </p>
          {/*purpose 2 */}
          <h3>EMOTIONAL SUPPORT</h3>
          <p>
            The adventurous journey from pregnancy to parenting can be a wild
            ride!
          </p>

          <p>
            I offer authentic, caring check-ins, and a friendly listening ear. I
            will support you and your partner emotionally, as you navigate this
            path through the specific challenges of your journey.
          </p>
          {/* purpose 3 */}
          <h3>INFORMATION AND ADVOCACY</h3>
          <p>
            With so much information out there, I help you find evidence-based
            information that sits well with your soul. As much as there is to
            learn on this journey, there is also much to unlearn to ensure you
            are being true to your authentic self. We will work through
            discovering what it is that you truly desire, and finding your voice
            to advocate for your vision.
          </p>
        </div>
      </div>

      {/* What you Get Section */}
      <div id="services">
        {/* Title */}
        <h1>The Doula Experience Includes</h1>
        <div class="serviceText">
          {/* Service and cost */}
          <div class="service">
            <h3>ANCIENT WISDOM BIRTH PACKAGE</h3>
            <h3 class="price">$1200</h3>
          </div>
          {/* Service List */}
          <h3 class="includes">Includes:</h3>
          <div class="serviceList">
            <ul>
              <li>2 prenatal visits (details provided in Welcome Package)</li>
              <li>Mother Blessing Ceremony facilitation</li>
              <li>
                Guidance on creating both a written and a visual birth plan
              </li>
              <li>On-going support via text or e-mail</li>
              <li>On-call at 38 weeks of pregnancy</li>
              <li>Labour and birth support</li>
              <li>
                1 postnatal visit, including basic breastfeeding support,
                babywearing consult, cloth diaper and elimination communication
                support
              </li>
            </ul>
          </div>
          <div class="service">
            <h3>BIRTH POOL RENTAL (for clients only)</h3>
            <h3 class="price">$100</h3>
          </div>
          <div class="serviceList">
            <ul>
              <li>Made In Water birth pool </li>
              <li>Includes liner</li>
              <li>
                Client will need: air pump, fresh water hose, net, and
                thermometer
              </li>
            </ul>
          </div>
          <div class="serviceFooter">
            <p>
              Postpartum services are available at the cost of $40/hr with a
              minimum of 4 consecutive hours per booking.
            </p>
            <p>
              **Clients over twenty kilometers from Milton, ON will be changed
              an additional fee of $0.60/km per in-person visit**
            </p>
          </div>
        </div>
      </div>

      {/*<!--About Section-->*/}
      <div id="about">
        {/* <!--Title-->*/}
        <div class="aboutTitle">
          <h1>About</h1>
        </div>
        {/*<!--Name section-->*/}
        <div class="Name">
          <h3>LAURIE DIETRICH, BIRTH DOULA</h3>
        </div>
        {/*<!--About content-->*/}
        <p>
          I have been eager to work in the birth field for many years. Now, as
          my children grow, and we've reached a point where the world won't fall
          apart without me if I'm away from home for an extended period of time,
          I am excited to be able to step into the birth-professional scene as a
          doula. Being a birth doula is a natural fit with my interests in birth
          and natural health, and my personality of being a nurturer. I look
          forward to this new chapter of being able to serve and support my
          community and share what knowledge I have accumulated (and just as
          importantly, what I have unlearned) over my 15 year parenting journey
          while at the same time, supporting you by respecting your unique
          choices and stepping back to let your journey unfold as it will.{" "}
        </p>
        <br />
        <p>
          I have trained with Discover Birth and am working towards full DONA
          Certification.
        </p>
        <img src="../../public/pictures/287.jpeg" alt="HeadShot" />
      </div>

      {/*<!--Reviews-->*/}
      <div id="reviews">
        {/*<!--Title-->*/}
        <div class="reviewTitle">
          <h1>What Clients Are Saying</h1>
        </div>
        <div class="reviewBlocks">
          <div class="review">
            <h3>Prepared and Supported</h3>
            <p>
              "When we met Laurie it was an instant connection. She had a very
              calming and friendly presence th..."
            </p>
            <br />
            <a href="https://doulamatch.net/profile/27858/laurie-dietrich">
              Read Full Review
            </a>
            <p class="name">Tania - 2021-07-29</p>
          </div>

          {/*<!--Add More reviews here -->*/}

          <div class="review">
            <h3>Your Review Comming Soon</h3>
            <p>"Your review here"</p>
            <br />
            <br />
            <br />
            <a href="#">Read Full Review</a>
            <p class="name"> 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;