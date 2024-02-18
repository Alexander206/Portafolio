import React from "react";

const SkillsItem = ({ icon, text }) => {
    return (
        <article className="skills_item">
            <ion-icon name={icon}></ion-icon>
            <span>{text}</span>
        </article>
    );
};

export default SkillsItem;
