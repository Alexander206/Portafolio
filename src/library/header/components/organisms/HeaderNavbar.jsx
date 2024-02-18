import React from "react";

// Components
import HashLink from "../atoms/HashLink.jsx";
import SocialLink from "../atoms/SocialLink.jsx";

// Assets
import navIconLinkedin from "../../../../assets/icon/linkedin.svg";
import navIconGithub from "../../../../assets/icon/github.svg";
import navIconInstagram from "../../../../assets/icon/instagram.svg";

const HeaderNavbar = ({ navItems, handlerMenu, activeLink, setActiveLink }) => {
    const navItemsElements = navItems.map((item, index) => {
        return (
            <HashLink
                key={index}
                icon={item.icon}
                route={item.route}
                text={item.text}
                setActiveLink={setActiveLink}
                activeLink={activeLink}
            />
        );
    });

    return (
        <nav className={`header_navbar ${handlerMenu ? "open" : "close"}`}>
            <ul className="navbar_list routes">{navItemsElements}</ul>

            {/* <ul className="navbar_list social_icon">
                <SocialLink icon={navIconLinkedin} link="https://www.linkedin.com/in/jeisson-alexander/" />
                <SocialLink icon={navIconGithub} link="https://github.com/Alexander206" />
                <SocialLink icon={navIconInstagram} link="https://www.instagram.com/amarokdev/" />
            </ul> */}
        </nav>
    );
};

export default HeaderNavbar;
