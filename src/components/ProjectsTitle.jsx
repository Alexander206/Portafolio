import React from "react";

const ProjectsTitle = ({ title, text1, textSpan, text2 }) => {
    return (
        <section className="title">
            <h1>{title}</h1>
            <p>
                {text1} <span>{textSpan}</span> {text2}
            </p>
        </section>
    );
};

export default ProjectsTitle;
