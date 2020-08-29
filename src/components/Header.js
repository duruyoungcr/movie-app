import React from "react";
import "../styles/Header.css";

const Header = () => {
  const toggleMenu = () => {
    const checkbox = document.querySelector(".nav__checkbox");
    checkbox.toggleAttribute("checked");
  };

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    console.log(window);
    if (window.scrollY > 100) {
      nav.style.backgroundColor = "slateblue";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });

  return (
    <header>
      <nav>
        <input type="checkbox" class="nav__checkbox" id="nav-toggle"></input>
        <div className="nav__logo">RMA</div>
        <div className="nav__toggler" onClick={toggleMenu}>
          <div className="nav__line nav__line1"></div>
          <div className="nav__line nav__line2"></div>
          <div className="nav__line nav__line3"></div>
        </div>
        <div className="nav__mobileMenu">
          <ul className="nav__links">
            <li className="nav__link">home</li>
            <li className="nav__link">movies</li>
            <li className="nav__link">series</li>
            <li className="nav__link">kids</li>
            <li className="nav__link">documentaries</li>
          </ul>
          <div className="nav__mobileMenuButtons">
            <button className="hero__button">Login</button>
            <button className="hero__button">Register</button>
          </div>
        </div>
        <div className="nav__linksBg"></div>
      </nav>
    </header>
  );
};

export default Header;
