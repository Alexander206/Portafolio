import React from "react";

import SocialLink from "./atoms/SocialLink";

import navIconLinkedin from "../assets/icon/nav-icon1.svg";
import navIconGithub from "../assets/icon/nav-icon2.svg";
import navIconInstagram from "../assets/icon/nav-icon3.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer_data"> © 2023 Jeisson Gavilán. Todos los derechos reservados. </p>
            <ul className="footer_links">
                <ul className="navbar_list social_icon">
                    <SocialLink icon={navIconLinkedin} link="https://www.linkedin.com/in/jeisson-alexander/" />
                    <SocialLink icon={navIconGithub} link="https://github.com/Alexander206" />
                    <SocialLink icon={navIconInstagram} link="https://www.instagram.com/amarokdev/" />
                </ul>
            </ul>
        </footer>
    );
};

export default Footer;
