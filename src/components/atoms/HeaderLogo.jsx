import React from "react";

// Resources
import logo from "../../assets/me.jpg";

const HeaderLogo = () => {
    return (
        <a href="/" className="header_logo">
            <img src={logo} alt="logo profile" />
        </a>
    );
};

export default HeaderLogo;
