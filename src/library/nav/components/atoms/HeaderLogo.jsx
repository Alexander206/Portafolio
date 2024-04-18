import PropTypes from "prop-types";

// Resources
import logo from "../../assets/me.webp";

const HeaderLogo = () => {
    return (
        <a href="/" className="header_logo">
            <img src={logo} alt="logo profile" />
        </a>
    );
};

HeaderLogo.propTypes = {
    logo: PropTypes.string.isRequired,
};

export default HeaderLogo;
