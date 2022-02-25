import React from "react";
import secondFeature from "../../image/walletFeature.png";
import "./Card.css";

function CardWallet() {
  const arr = ["cards", "bg2"];
  return (
    <div className={arr.join(" ")}>
      <h1 className="feature-title">Wallet</h1>
      <p className="feature-description">
        Withdraw or Top-up your wallet then never stop trading till you drop
      </p>
      <p></p>
      <img
        className="center"
        src={secondFeature}
        alt="Showcase Real Time feature"
      />
    </div>
  );
}

export default CardWallet;
