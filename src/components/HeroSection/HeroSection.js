import React from "react";
import "../../App";
//import { Button } from "../button/Button";
import "./HeroSection.css";
import comD5 from "../../image/Company-logo.png";
import rectangle from "../../image/highlight.png";
import pcPhone from "../../image/phonePCFirstPage.png";

function HeroSection() {
  return (
    <div className="hero-container">
      <button className="login-btn">Login</button>
      <img className="company-logo" src={comD5} alt="ComD5 logo" />
      <img
        className="pcPhone-comd5"
        src={pcPhone}
        alt="Devices showing ComD5 services"
      />

      <h1>
        Your <img className="rectangle-size" src={rectangle} alt="#" />
        <div className="text-on-image">Navigator</div> in <br /> the World of{" "}
        <br /> Commodity Trade
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
