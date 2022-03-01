import React from "react";
import "./Footer.css";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";
import { AiOutlineChrome } from "react-icons/ai";
import WebsiteIcon from "../../image/websiteIcon.png";

function Footer() {
  let iconStyles = { color: "white", fontSize: "1.8em" };
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <IoCallOutline style={iconStyles} />
            <text className="contact-number"> +60123456789</text>
            <div></div>
            <AiOutlineMail style={iconStyles} />
            <text className="email-address">
              syarusnadvishaimyaz@besquare.com.my
            </text>
            <div></div>
            <AiOutlineChrome style={iconStyles} />

            <text className="url-link">www.comd5.com.my</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
