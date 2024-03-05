import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Btn = ({ text, url, icon }) => {
    return (
        <Link to={url} className="btn_curriculum btn_projetcs">
            <button className="custom-btn">
                <ion-icon name={icon}></ion-icon>
                <span>{text}</span>
            </button>
        </Link>
    );
};

Btn.propTypes = {};

export default Btn;
