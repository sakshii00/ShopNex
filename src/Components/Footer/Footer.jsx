import React, { useContext } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const { theme } = useContext(ShopContext);
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className={`footer_${theme}`}>
          <Link className={`link_${theme}`} to="/" onClick={scrollToTop}>
            ShopNex
          </Link>
        </p>
      </div>
      <ul className={"footer-links_" + theme}>
        <li>Company</li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/" onClick={scrollToTop}>
            Products
          </Link>
        </li>
        <li>Offices</li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/about">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={`footer-copyright_${theme}`}>
        <hr className={`hr_${theme}`} />
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
