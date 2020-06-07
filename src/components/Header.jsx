import React from "react";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

function Header() {
  function handleHamburger() {
    const nav = document
      .querySelector("#nav")
      .classList.contains("header__hidden");
    const icon = document.querySelector("#icon").removeAttribute("src");
    if (nav === true) {
      const icon = document.querySelector("#icon").setAttribute("src", close);
      const nav = document
        .querySelector("#nav")
        .classList.remove("header__hidden");
    } else {
      const icon = document
        .querySelector("#icon")
        .setAttribute("src", hamburger);
      const nav = document
        .querySelector("#nav")
        .classList.add("header__hidden");
    }
  }

  return (
    <header className="header">
      <div className="container">
        <img className="header__logo" src={logo} alt="Logo" />
        <div>
          <img
            id="icon"
            className="header__icon"
            src={hamburger}
            alt="Menu"
            onClick={handleHamburger}
          />
          <nav id="nav" className="header__nav header__hidden">
            <a href="/" className="header__link">
              Product
            </a>
            <a href="/" className="header__link">
              Features
            </a>
            <a href="/" className="header__link">
              Pricing
            </a>
            <div className="header__separator"></div>
            <a href="/" className="header__link">
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
