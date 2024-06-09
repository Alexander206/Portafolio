import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./btnGeneric.scss";

const BodyBtn = ({ variant, icon, text }) => (
    <button className={`custom-btn ${variant ? "variant" : ""} clickable`}>
        {icon ? <ion-icon name={icon}></ion-icon> : false}
        <span>{text}</span>
    </button>
);

const BtnGeneric = ({ route, url, className, variant, icon, text }) => {
    const classCondition = `btn_generic ${className ? className : ""} ${!variant ? "variant" : ""} clickable`;

    if (route) {
        return (
            <Link to={route} className={classCondition}>
                <BodyBtn variant={variant} icon={icon} text={text} />
            </Link>
        );
    } else if (url) {
        return (
            <a href={url} className={classCondition} target="_blank">
                <BodyBtn variant={variant} icon={icon} text={text} />
            </a>
        );
    } else {
        <span>Boton no disponible</span>;
    }
};

BodyBtn.propTypes = {
    variant: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
};

BtnGeneric.propTypes = {
    route: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default BtnGeneric;
