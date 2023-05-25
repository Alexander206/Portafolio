import React from "react";

// Components
import AbilityTarget from "../atoms/AbilityTarget";

const SkillsAbilitiesContainer = ({ imgDesing, imgCurriculum, imgResponsive }) => {
    return (
        <article className="abilities_container">
            <article className="ability">
                <AbilityTarget
                    img={imgDesing}
                    title="Simple y claro"
                    text="Comunicación clara y amigable con el usuario mediante el uso de Illustrator, Photoshop, Adobe XD y Figma en el diseño."
                />

                <AbilityTarget
                    img={imgCurriculum}
                    title="Mis tecnologías"
                    text="Uso HTML, CSS, JavaScript y React en el FrontEnd y Node Js con Express en el BackEnd."
                />

                <AbilityTarget
                    img={imgResponsive}
                    title="Diseño responsivo"
                    text="Diseño sitios web 100% adaptable a diferentes tamaños de dispositivos, asegurando la accesibilidad y la mejor experiencia de usuario."
                />
            </article>
        </article>
    );
};

export default SkillsAbilitiesContainer;
