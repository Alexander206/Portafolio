// Dependences
import React from "react";

// Components
import SkillsAboutContainer from "./organims/SkillsAboutContainer";

// Principal component
const Skills = ({ text, ability, imgMe, images, imgDesing, imgCurriculum, imgResponsive, link }) => {
    const routeImg = (img) => new URL(`../assets/${img}`, import.meta.url).pathname;

    imgMe = routeImg(imgMe);
    imgDesing = routeImg(imgDesing);
    imgCurriculum = routeImg(imgCurriculum);
    imgResponsive = routeImg(imgResponsive);

    return (
        <>
            <section className="about" id="Sobremi">
                <article className="container">
                    <SkillsAboutContainer text={text} ability={ability} imgMe={imgMe} images={images} />

                    <a href={link} className="btn_curriculum" target="_blank">
                        <button className="custom-btn btn-8">
                            <span>Hoja de vida</span>
                        </button>
                    </a>
                </article>
            </section>
        </>
    );
};

export default Skills;
