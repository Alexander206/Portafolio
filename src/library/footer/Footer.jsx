import { useContext } from "react";

import "./footer.scss";

import SocialLink from "../utils/SocialLink";

import GeneralContext from "../../context/GeneralContext";

import navIconLinkedin from "../../assets/icon/linkedin.svg";
import navIconGithub from "../../assets/icon/github.svg";
import navIconInstagram from "../../assets/icon/instagram.svg";

const Footer = () => {
    const { social } = useContext(GeneralContext);
    return (
        <footer className="footer">
            <p className="footer_data"> © 2024 Jeisson Gavilán. Todos los derechos reservados. </p>
            <ul className="footer_links">
                <ul className="navbar_list social_icon">
                    <SocialLink icon={navIconLinkedin} link={social.linkedin} />
                    <SocialLink icon={navIconGithub} link={social.github} />
                    <SocialLink icon={navIconInstagram} link={social.instagram} />
                </ul>
            </ul>
        </footer>
    );
};

export default Footer;
