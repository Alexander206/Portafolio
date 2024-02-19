// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./styles.scss";

// Components
import Navbar from "./components/organisms/Navbar";

// Principal component
const Nav = ({ classPage }) => {
    const searchParams = window.location.pathname;
    const [activeLink, setActiveLink] = useState(searchParams);

    const navItems = [
        {
            icon: "home",
            route: "/",
            text: "Inicio",
        },
        {
            icon: "bulb",
            route: "/about",
            text: "Sobre mí",
        },
        {
            icon: "cube",
            route: "/services",
            text: "Servicios",
        },
        {
            icon: "code-slash",
            route: "/projects",
            text: "Proyectos",
        },
        {
            icon: "call",
            route: "/contact",
            text: "Contacto",
        },
    ];

    return (
        <nav className={`header ${classPage}`}>
            <article className="container">
                <Navbar navItems={navItems} activeLink={activeLink} setActiveLink={setActiveLink} />
            </article>
        </nav>
    );
};

export default Nav;
