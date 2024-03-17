// Dependences
import React from "react";

// Components
import SkillsAboutContainer from "../organisms/SkillsAboutContainer";
import BtnGeneric from "../../../../library/btns/BtnGeneric";

// Principal component
const Skills = ({ text, ability, images, imgMe, arrow, btnlink }) => {
    return (
        <>
            <section className="about">
                <article className="container">
                    <SkillsAboutContainer text={text} ability={ability} images={images} imgMe={imgMe} arrow={arrow} />

                    <BtnGeneric text={btnlink.text} url={btnlink.cvUrl} target="_blank" variant={true} />
                </article>
            </section>
        </>
    );
};

export default Skills;
