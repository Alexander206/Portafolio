import React from "react";

const AbilityTarget = ({ img, title, text }) => {
    return (
        <article className="ability_target">
            <img src={img} alt="img target ability" />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
    );
};

export default AbilityTarget;
