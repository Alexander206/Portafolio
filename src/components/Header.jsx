// Dependencies
import React from "react";
import { useState, useEffect } from "react";

// Styles
import "../styles/components/header.scss";

// Components
import HeaderLogo from "./atoms/HeaderLogo";
import HeaderNavbar from "./organims/HeaderNavbar";
import HeaderCenterBtn from "./atoms/HeaderCenterBtn";

// Principal component
const Header = () => {
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
        <header className={`header${scrolled ? " scrolled" : ""}`}>
            <section className="container">
                <HeaderLogo />

                <HeaderCenterBtn handlerMenu={handlerMenu} setHandlerMenu={setHandlerMenu}/>

                <HeaderNavbar handlerMenu={handlerMenu} activeLink={activeLink} setActiveLink={setActiveLink} />
            </section>
        </header>
    );
};

export default Header;
