// Dependencies
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HashLink = ({ icon, text, route, setActiveLink, activeLink }) => {
    const [classState, setClassState] = useState("");

    useEffect(() => {
        if (activeLink === route) {
            setClassState("active");
        } else {
            setClassState("");
        }
    }, [activeLink, route]);

    const onUpdateActiveLink = (data) => {
        setActiveLink(data);
    };

    return (
        <li onClick={() => onUpdateActiveLink(text)} className={`${classState} clickable`}>
            <Link to={route}>
                <ion-icon name={icon}></ion-icon>

                <span>{text}</span>
            </Link>
        </li>
    );
};

HashLink.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    setActiveLink: PropTypes.func.isRequired,
    activeLink: PropTypes.string.isRequired,
};

export default HashLink;
