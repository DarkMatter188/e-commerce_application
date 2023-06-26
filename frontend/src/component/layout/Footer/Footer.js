import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>APP TO DOWNLOAD</h4>
        <p>Install our Apps</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>Where Quality is essence.</p>

        <p>Copyrights 2023 &copy; Apoorv Ranjan</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/apoorv213/">Instagram</a>
        <a href="https://www.instagram.com/apoorv213/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
