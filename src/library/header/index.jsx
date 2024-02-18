// Dependencies
import React from "react";
import { useState, useEffect } from "react";

// Styles
import "./styles.scss";

// Components
import HeaderNavbar from "./components/organisms/HeaderNavbar";

// Resources
import data from "../../_data/general.json";

// Principal component
const Header = ({ classPage }) => {
    const searchParams = window.location.pathname;
    const [activeLink, setActiveLink] = useState(searchParams);
    const [handlerMenu, setHandlerMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        {
            icon: "home",
            route: "/",
            text: "Inicio",
        },
        {
            icon: "bulb",
            route: "/contact",
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
        <header className={`header${scrolled ? " scrolled" : ""} ${classPage}`}>
            <section className="container">
                <HeaderNavbar navItems={navItems} handlerMenu={handlerMenu} activeLink={activeLink} setActiveLink={setActiveLink} />
            </section>
        </header>
    );
};

export default Header;
