import React from "react";

const Title = ({ title }) => {
    return (
        <article className="title">
            <h2>{title[0]}</h2>

            <span>
                {title[1]} <div className="separator" />
            </span>
        </article>
    );
};

export default Title;
