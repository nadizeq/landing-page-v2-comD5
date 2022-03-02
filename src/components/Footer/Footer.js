import React from "react";
import "./Footer.css";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";
import { AiOutlineChrome } from "react-icons/ai";
import ComD5White from "../../image/CompanyLogo/comD5-white.png";

function Footer() {
  let iconStyles = { color: "white", fontSize: "1.8em" };
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <text className="contact-number">
              <IoCallOutline style={iconStyles} />
              +60123456789
            </text>
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

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <img className="comD5-logo-white" src={ComD5White} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
