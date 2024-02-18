import React from "react";

import "./styles.scss";

const Title = ({ title, text1, textSpan, text2 }) => {
    return (
        <section className="title">
            <h1>{title}</h1>

            <div className="separator"></div>

            <p>
                {text1} <span>{textSpan}</span> {text2}
            </p>
        </section>
    );
};

export default Title;
