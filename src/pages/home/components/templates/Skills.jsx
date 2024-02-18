// Dependences
import React from "react";

// Components
import SkillsAboutContainer from "../organisms/SkillsAboutContainer";

// Principal component
const Skills = ({ text, ability, images, imgMe, arrow, btnlink }) => {
    return (
        <>
            <section className="about">
                <article className="container">
                    <SkillsAboutContainer text={text} ability={ability} images={images} imgMe={imgMe} arrow={arrow} />

                    <a href={btnlink.cvUrl} className="btn_curriculum" target="_blank">
                        <button className="custom-btn btn-8">
                            <span>{btnlink.text}</span>
                        </button>
                    </a>
                </article>
            </section>
        </>
    );
};

export default Skills;
