import React from "react";

// Components
import HashLink from "../atoms/HashLink.jsx";
import SocialLink from "../atoms/SocialLink.jsx";

// Resources
import navIconLinkedin from "../../assets/icon/nav-icon1.svg";
import navIconGithub from "../../assets/icon/nav-icon2.svg";
import navIconInstagram from "../../assets/icon/nav-icon3.svg";

const HeaderNavbar = ({ handlerMenu, activeLink, setActiveLink }) => {
    return (
        <nav className={`header_navbar ${handlerMenu ? "open" : "close"}`}>
            <div className="navbar_list routes">
                <HashLink route="/" text="Inicio" setActiveLink={setActiveLink} activeLink={activeLink} />
                <HashLink route="/#skills" text="Sobre mi" setActiveLink={setActiveLink} activeLink={activeLink} />
                <HashLink route="/projects" text="Proyectos" setActiveLink={setActiveLink} activeLink={activeLink} />
            </div>

            <ul className="navbar_list social_icon">
                <SocialLink icon={navIconLinkedin} link="https://www.linkedin.com/in/jeisson-alexander/" />
                <SocialLink icon={navIconGithub} link="https://github.com/Alexander206" />
                <SocialLink icon={navIconInstagram} link="https://www.instagram.com/amarokdev/" />
            </ul>

            <div className="navbar_list btn_contact">
                <HashLink route="/contact" text="Contáctame" setActiveLink={setActiveLink} activeLink={activeLink} />
            </div>
        </nav>
    );
};

export default HeaderNavbar;
