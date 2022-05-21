import React from "react";
import About from "../Sections/About/about";
import BookNow from "../Sections/BookNow/bookNow";
import DoulaCare from "../Sections/DoulaCare/doulaCare";
import Mission from "../Sections/MissionStatment/mission";
import Packages from "../Sections/Packages/packages";
import Reviews from "../Sections/Reviews/reviews";

const Home = () => {
  return (
    <>
    <Mission/>
    <Packages/>
    <DoulaCare/>
    <About/>
    <Reviews/>
    <BookNow/>
    </>
  );
};


export default Home;