import { useState, useContext } from "react";
import PropTypes from "prop-types";

import "./nav.scss";

import Navbar from "./components/organisms/Navbar";

import GeneralContext from "../../context/GeneralContext";

const Nav = ({ classPage }) => {
    const searchParams = window.location.pathname;
    const [activeLink, setActiveLink] = useState(searchParams);
    const { route } = useContext(GeneralContext);

    const navItems = [
        {
            icon: "bulb",
            route: route.home,
            text: "Sobre mí",
        },
        {
            icon: "cube",
            route: route.services,
            text: "Servicios",
        },
        {
            icon: "code-slash",
            route: route.projects,
            text: "Proyectos",
        },
        {
            icon: "call",
            route: route.contact,
            text: "Contacto",
        },
        /* {
            icon: "color-palette",
            route: route.resume,
            text: "Tema",
        }, */
    ];

    return (
        <nav className={`header ${classPage}`}>
            <article className="container">
                <Navbar navItems={navItems} activeLink={activeLink} setActiveLink={setActiveLink} />
            </article>
        </nav>
    );
};

Nav.propTypes = {
    classPage: PropTypes.string.isRequired,
};

export default Nav;
