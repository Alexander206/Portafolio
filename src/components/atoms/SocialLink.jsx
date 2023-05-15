import React from "react";

const SocialLink = ({ icon, link }) => {
    return (
        <a href={link} target="_blank">
            <img src={icon} alt="" />
        </a>
    );
};

export default SocialLink;
