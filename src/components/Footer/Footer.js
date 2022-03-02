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
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <div className="contact-number">
              <IoCallOutline style={iconStyles} />
              +60123456789
            </div>
            <div></div>
            <AiOutlineMail style={iconStyles} />
            <div className="email-address">
              syarusnadvishaimyaz@besquare.com.my
            </div>
            <div></div>
            <AiOutlineChrome style={iconStyles} />

            <div className="url-link">www.comd5.com.my</div>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <img className="comD5-logo-white" src={ComD5White} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
