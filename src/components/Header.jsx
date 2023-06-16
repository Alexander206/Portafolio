// Dependencies
import React from "react";
import { useState, useEffect } from "react";

// Styles
import "../styles/components/header.scss";

// Components
import HeaderLogo from "./atoms/HeaderLogo";
import HeaderNavbar from "./organims/HeaderNavbar";
import HeaderCenterBtn from "./atoms/HeaderCenterBtn";

// Resources
import data from "../_data/general.json";

// Principal component
const Header = ({ classPage }) => {
    const searchParams = window.location.pathname;
    const [activeLink, setActiveLink] = useState(searchParams);
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
        <header className={`header${scrolled ? " scrolled" : ""} ${classPage}`}>
            <section className="container">
                <HeaderLogo />

                <HeaderCenterBtn handlerMenu={handlerMenu} setHandlerMenu={setHandlerMenu} />

                <HeaderNavbar
                    handlerMenu={handlerMenu}
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                    linkedin={data.linkedin}
                    github={data.github}
                    instagram={data.instagram}
                />
            </section>
        </header>
    );
};

export default Header;
