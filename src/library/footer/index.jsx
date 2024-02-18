// Components
import SocialLink from "../header/components/atoms/SocialLink";

// Styles
import "./styles.scss";

// Resources
import navIconLinkedin from "../../assets/icon/linkedin.svg";
import navIconGithub from "../../assets/icon/github.svg";
import navIconInstagram from "../../assets/icon/instagram.svg";

import data from "../../_data/general.json";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer_data"> © 2023 Jeisson Gavilán. Todos los derechos reservados. </p>
            <ul className="footer_links">
                <ul className="navbar_list social_icon">
                    <SocialLink icon={navIconLinkedin} link={data.linkedin} />
                    <SocialLink icon={navIconGithub} link={data.github} />
                    <SocialLink icon={navIconInstagram} link={data.instagram} />
                </ul>
            </ul>
        </footer>
    );
};

export default Footer;
