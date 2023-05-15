import React from "react";

import AbilityTarget from "./atoms/AbilityTarget";
import SkillsItem from "./atoms/SkillsItem";

import img1 from "../assets/design.svg";
import img2 from "../assets/curriculum.svg";
import img3 from "../assets/responsive.svg";

const Habilities = ({ text }) => {
    return (
        <section className="about">
            <article className="about_container">
                <article className="text">
                    <h2>Mi habilidad</h2>
                    <p>{text}</p>
                </article>

                <article className="skills">
                    <SkillsItem icon="people-circle-outline" text="TRABAJO EN EQUIPO" />
                    <SkillsItem icon="layers-outline" text="ORGANIZADO" />
                    <SkillsItem icon="body-outline" text="ADAPTABILIDAD" />
                    <SkillsItem icon="heart-half-outline" text="GUSTO POR APRENDER Y ENSEÑAR" />
                </article>

                <article className="ability">
                    <AbilityTarget
                        img={img1}
                        title="Simple y claro"
                        link="https://drive.google.com/file/d/1JKiCzcFTjonYolxr6VlYsgMUUBKpcYHI/view?usp=share_link"
                        textLink="Ver ejemplo"
                        text="Comunicación clara y amigable con el usuario mediante el uso de Illustrator, Photoshop, Adobe XD y Figma en el diseño."
                    />

                    <AbilityTarget
                        img={img2}
                        title="Mis tecnologías"
                        link="https://drive.google.com/file/d/1sF0PBac5Z58viBODipNhiSbGKZyUKm0f/view?usp=share_link"
                        textLink="Hoja de vida"
                        text="Uso HTML, CSS, JavaScript y React en el FrontEnd y Node Js con Express en el BackEnd."
                    />

                    <AbilityTarget
                        img={img3}
                        title="Diseño responsivo"
                        link="./examples/index.html"
                        textLink="Ver ejemplo"
                        text="Diseño sitios web 100% adaptable a diferentes tamaños de dispositivos, asegurando la accesibilidad y la mejor experiencia de usuario."
                    />
                </article>
            </article>
        </section>
    );
};

export default Habilities;
