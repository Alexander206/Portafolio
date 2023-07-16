import React from "react";

const SocialLink = ({ icon, link }) => {
    return (
        <li>
            <a href={link} target="_blank" aria-label="icon social">
                <img src={icon} alt="icon social" />
            </a>
        </li>
    );
};

export default SocialLink;
