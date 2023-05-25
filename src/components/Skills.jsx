// Dependences
import React from "react";

// Components
import SkillsAboutContainer from "./organims/SkillsAboutContainer";
import SkillsAbilitiesContainer from "./organims/SkillsAbilitiesContainer";

// Principal component
const Skills = ({ text, ability, imgMe, images, imgDesing, imgCurriculum, imgResponsive, link }) => {
    const routeImg = (img) => new URL(`../assets/${img}`, import.meta.url).pathname;

    imgMe = routeImg(imgMe);
    imgDesing = routeImg(imgDesing);
    imgCurriculum = routeImg(imgCurriculum);
    imgResponsive = routeImg(imgResponsive);

    return (
        <>
            <section className="about" id="skills">
                <article className="container">
                    <SkillsAboutContainer text={text} ability={ability} imgMe={imgMe} images={images} />
                </article>
            </section>

            <section className="about targets">
                <article className="container">
                    <SkillsAbilitiesContainer
                        imgDesing={imgDesing}
                        imgCurriculum={imgCurriculum}
                        imgResponsive={imgResponsive}
                    />

                    <a href={link} target="_blank" className="btn_curriculum">
                        <span>Ver hoja de vida</span>
                    </a>
                </article>
            </section>
        </>
    );
};

export default Skills;
