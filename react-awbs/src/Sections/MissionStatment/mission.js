import React from "react";
import './mission.css';

const Mission = () => {
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
    </>
  );
};

export default Mission;
