import React from "react";

const AbilityTarget = ({ img, title, text, link, textLink }) => {
    return (
        <article className="ability_target">
            <img src={img} alt="img target ability" />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link} target="_blank">
                {textLink}
            </a>
        </article>
    );
};

export default AbilityTarget;
