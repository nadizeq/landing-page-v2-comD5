import React from "react";
import "./FinalSection.css";
import GooglePlay from "../../image/googlePlay.png";

function FinalSection() {
  return (
    <div className="">
      <h1 className="feature-title">Commodify</h1>
      <p className="feature-description">
        Join our active community with over a million traders worldwide and
        start trading commodities and modify your life.
      </p>
      <button className="">Start Now</button>
      <p>
        “For ease of trading anywhere and anytime, ComD5 can help you to achieve
        it”
      </p>
      <img className="center" src={GooglePlay} alt="Show Google Play logo" />
    </div>
  );
}

export default FinalSection;
