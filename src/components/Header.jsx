// Dependencies
import React from "react";
import { useState, useEffect } from "react";

// Styles
import "../styles/components/header.scss";

// Resources
import logo from "../assets/Logo.jpg";
import menuIcon from "../assets/icon/menu-icon.svg";
import navIconLinkedin from "../assets/icon/nav-icon1.svg";
import navIconGithub from "../assets/icon/nav-icon2.svg";
import navIconInstagram from "../assets/icon/nav-icon3.svg";

// Components
import HashLink from "./atoms/HashLink.jsx";

const SocialLink = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
      <img src={icon} alt="" />
    </a>
  );
};

// Principal component
const Header = () => {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [handlerMenu, setHandlerMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <a href="/" className="header_logo">
        <img src={logo} alt="logo profile" />
      </a>

      <button className="header_btn" onClick={() => setHandlerMenu(!handlerMenu)}>
        <img src={menuIcon} alt="Button header" />
      </button>

      <nav className={`header_navbar ${handlerMenu ? "open" : "close"}`}>
        <div className="navbar_list routes">
          <HashLink route="/" text="Inicio" setActiveLink={setActiveLink} activeLink={activeLink} />
          <HashLink route="/#projects" text="Proyectos" setActiveLink={setActiveLink} activeLink={activeLink} />
          <HashLink route="/#education" text="Educación" setActiveLink={setActiveLink} activeLink={activeLink} />
        </div>

        <ul className="navbar_list social_icon">
          <SocialLink icon={navIconLinkedin} link="https://www.linkedin.com/in/jeisson-alexander/" />
          <SocialLink icon={navIconGithub} link="https://github.com/Alexander206" />
          <SocialLink icon={navIconInstagram} link="https://www.instagram.com/amarokdev/" />
        </ul>

        <div className="navbar_list btn_contact">
          <HashLink route="/#contact" text="Contáctame" setActiveLink={setActiveLink} activeLink={activeLink} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
