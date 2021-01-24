import React from "react";

import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/CAP68.png";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img className="footer-logo" src={Logo} alt="Cap 68" />
        <ScrollLink
          className="scroll-link-footer"
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Back to the top
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;
