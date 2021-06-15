import React from "react";

import BlogBox from "./BottomSection/BlogBox";
import Footer from "./BottomSection/Footer";
import ImageSlider from "./BottomSection/ImageSlider";
import HomeRental from "./MiddleSection/HomeRental";
import TravellerGuide from "./MiddleSection/TravellerGuide";

// import { Routes } from "./ThingsTodo/Routes";

import { NavBar } from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      {/* Navbar add below   @ kandur*/}
      <NavBar />

      {/* <Routes/> */}
      {/* middle section add below  @ uday*/}
      {/* middle section add below  @ uday*/}
      <HomeRental />
      <TravellerGuide />
      {/* bottom section add below @ satya*/}
      <ImageSlider />
      <br />
      <br />
      <br />
      <br />
      <BlogBox />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
