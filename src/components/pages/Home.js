import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import FirstFeature from "../CardFeature/CardRealTime";
import SecondFeature from "../CardFeature/CardWallet";
import FinalSection from "../FinalSection/FinalSection";
import CreativeTeam from "../CardCreativeTeam/CreativeTeam";

function Home() {
  return (
    <>
      <HeroSection />
      <FirstFeature />
      <SecondFeature />
      <CreativeTeam />
      <FinalSection />
    </>
  );
}

export default Home;
