import React from "react";
import headShot from '../../pictures/lauriejeansstairs.jpg';
import './about.css';

const About = () => {

    return (
        <>
         {/*<!--About Section-->*/}
      <div id="about">
        {/* <!--Title-->*/}
        <div className="aboutTitle">
          <h1>About</h1>
        </div>
        {/*<!--Name section-->*/}
        <div className="Name">
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
        <img src={headShot} alt="HeadShot" />
      </div>

        </>
    )
};

export default About;