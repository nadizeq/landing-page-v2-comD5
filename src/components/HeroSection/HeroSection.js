import React from "react";
import "../../App";
//import { Button } from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>
        Your Navigator in <br /> the World of <br /> Commodity Trade
      </h1>

      <p>
        Find the commodity data you need- whether you’re <br />
        looking to trade on a new exchange, invest in a fresh <br />
        currency or take a view on the big picture in global <br />
        market
      </p>
      <button className="start-now-btn">Start Now</button>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
