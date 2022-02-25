import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import FirstFeature from "../CardFeature/CardRealTime";
import SecondFeature from "../CardFeature/CardWallet";

function Home() {
  return (
    <>
      <HeroSection />
      <FirstFeature />
      <SecondFeature />
    </>
  );
}

export default Home;
