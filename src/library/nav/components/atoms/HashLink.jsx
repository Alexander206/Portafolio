// Dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HashLink = ({ icon, text, route, setActiveLink, activeLink }) => {
    const [classState, setClassState] = useState("");

    useEffect(() => {
        if (activeLink === route) {
            setClassState("active");
        } else {
            setClassState("");
        }
    }, []);

    const onUpdateActiveLink = (data) => {
        setActiveLink(data);
    };

    return (
        <li onClick={() => onUpdateActiveLink(text)} className={classState}>
            <Link to={route}>
                <ion-icon name={icon}></ion-icon>
            </Link>
        </li>
    );
};

export default HashLink;
