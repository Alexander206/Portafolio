import React from "react";

// Resources
import logo from "../../assets/icon/dark_logo.svg";

const HeaderLogo = () => {
    return (
        <a href="/" className="header_logo">
            <img src={logo} alt="logo profile" />
        </a>
    );
};

export default HeaderLogo;
