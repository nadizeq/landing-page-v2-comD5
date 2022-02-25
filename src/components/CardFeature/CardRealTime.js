import React from "react";
import firstFeature from "../../image/realTimeFeature.png";
import "./Card.css";

function CardRealTime() {
  const arr = ["cards", "bg1"];
  return (
    <div className={arr.join(" ")}>
      <h1 className="feature-title">Real-Time Price</h1>
      <p className="feature-description">
        Find the commodities real-time price you need
      </p>
      <p></p>
      <img
        className="center"
        src={firstFeature}
        alt="Showcase Real Time feature"
      />
    </div>
  );
}

export default CardRealTime;
