import React from "react";

// Resources
import logo from "../../assets/me.webp";

const HeaderLogo = () => {
    return (
        <a href="/" className="header_logo">
            <img src={logo} alt="logo profile" />
        </a>
    );
};

export default HeaderLogo;
