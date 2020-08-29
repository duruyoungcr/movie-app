import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <i className="fa fa-copyright"></i> 2020 | Made with{" "}
        <i className="fa fa-heart"></i> by {""}
        <a href="http://rayced.com" target="_blank" rel="noopener noreferrer">
          ray
        </a>
      </p>
    </footer>
  );
};

export default Footer;
