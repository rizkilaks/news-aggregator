import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerItems">
          <div className="fiCompany">
            <img src="Blue-2.png" alt="" />
            <span>
              +62-1234-5678-900 <br /> <br />
              support@worldmedia.com
            </span>
          </div>
        </div>
        <div className="footerItems">
          <div className="fiDirectories">
            <h4>Quick Links</h4>
            <div className="fiDirectoriesItems">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
            <div className="fiDirectoriesItems">
              <span>FAQ</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
        <div className="footerItems">
          <div className="fiSubscribe">
            <h4>Weekly Newsletter</h4>
            <div>
              <input type="text" id="emailInput" placeholder="Get weekly updates" />
              <button id="subscribeBtn">
                <FontAwesomeIcon icon={faArrowRight} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <div className="hLine"></div>
        <div className="fcBottom">
          <div className="socialMedia">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="trademark">2024 World Media. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
