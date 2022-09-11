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

        <div className="aboutSection">
          <p> Hi, I’m Laurie. </p>
          <br />
          <p> I’m a lifelong Miltonian and mother to three. I have degrees in Psychology and Child & Youth Studies. In a past life I was a teacher,
            but resigned 7 years ago to dedicate my time to my family. </p>
          <br />

          <p> Being a birth doula is a natural fit with my interests in birth and natural health, and my personality of being a nurturer.</p>
          <br />
          <p>They say it takes a village to raise a child, and I am thankful that my village is pretty awesome. I couldn’t do what doulas do
            without them in my corner. Between parents who live down the street, a husband willing to make his work days flexible,
            an older child who can hold down the fort while I’m gone, and a ton of amazingly supportive homeschooling friends and families to lean on,
            I always know my kids are in good hands so I can give 100% of myself to mothering the mother on her big day.</p>
          <br />
          <p>I enjoy being able to support my community outside of “the system” and share what knowledge I have learned (and most importantly, what I have unlearned)
            over my 17 year parenting journey while at the same time, supporting clients by respecting their unique choices and stepping back to let their  journeys unfold as they will</p>
          <br />
          <p>
            I trained with Stephanie Antunes of Discover Birth.
          </p>
        </div>

        <img src={headShot} alt="HeadShot" />
      </div>

    </>
  )
};

export default About;