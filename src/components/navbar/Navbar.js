import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../image/Company-logo.png";
import "./styles.css";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../button/Button";

function Navbar() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
          <img
            className="position"
            src={companyLogo}
            alt="company logo"
            width="80"
            height="30"
          />
        </Link>
        <div className="menu-icon-" onClick={handleClick}></div>
        <ul>
          <li className="nav-item">
            <Link to="/signup" className="nav-links-mobile">
              Login
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">LOGIN</Button>}
      </nav>
    </>
  );
}
export default Navbar;
