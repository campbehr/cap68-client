import React, { useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import "./navbar.styles.css";

import Logo from "../../assets/CAP68.png";
import HamburgerBtn from "../../assets/Hamburger.png";
import XBtn from "../../assets/X.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-spacer" />
      </div>
      <div className="navbar-center">
        <img className="logo" src={Logo} alt="Cap 68" />
      </div>
      <div className="navbar-right">
        <div className={click ? "dropdown" : "dropdown hide"}>
          <ScrollLink
            className="scroll-link"
            activeClass="active"
            to="mission"
            spy={true}
            smooth={true}
            offset={-180}
            duration={1000}
            onClick={closeMobileMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            className="scroll-link"
            activeClass="active"
            to="subscribe"
            spy={true}
            smooth={true}
            offset={-180}
            duration={1000}
            onClick={closeMobileMenu}
          >
            Subscribe
          </ScrollLink>
        </div>
        {!click ? (
          <img
            className="hamburger"
            src={HamburgerBtn}
            alt="List"
            onClick={handleClick}
          />
        ) : (
          <img
            className="hamburger"
            src={XBtn}
            alt="List"
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
