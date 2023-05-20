import React from "react";
import { Link } from "react-router-dom";

import AbilityTarget from "./atoms/AbilityTarget";
import SkillsItem from "./atoms/SkillsItem";

// Resources
import imgText from "../assets/icon/header-img.svg";
import img from "../assets/me.svg";
import imgHtml from "../assets/icon/HTML.svg";
import imgCss from "../assets/icon/CSS.svg";
import imgJavaScript from "../assets/icon/javaScript.svg";
import imgReact from "../assets/icon/react.svg";
import imgNode from "../assets/icon/node.svg";
import img1 from "../assets/design.svg";
import img2 from "../assets/curriculum.svg";
import img3 from "../assets/responsive.svg";

const Skills = () => {
    return (
        <section className="about" id="skills">
            <article className="container">
                <article className="about_container">
                    <h2>Skills</h2>

                    <article className="text">
                        <article>
                            <h2>Sobre mi</h2>

                            <p>
                                Me apasiona enfrentar desafíos en situaciones nuevas y complejas, lo que me impulsa a
                                estar siempre en la busqueda de nuevas formas de <span>mejorar y ampliar</span> mis
                                habilidades. Como Licenciado en Diseño Tecnológico, he desarrollado habilidades que me
                                han permitido mejorar en la comunicación, la dirección de grupos y la adaptabilidad.
                            </p>

                            <article className="skills">
                                <SkillsItem icon="people-circle-outline" text="COMUNICACIÓN" />
                                <SkillsItem icon="heart-half-outline" text="AUTONOMÍA" />
                                <SkillsItem icon="layers-outline" text="ORGANIZACIÓN" />
                                <SkillsItem icon="body-outline" text="ADAPTABILIDAD" />
                            </article>

                            <Link to="/#contact">
                                Contácta conmigo <img src={imgText} />
                            </Link>
                        </article>

                        <figure className="img">
                            <img className="principal_img" src={img} alt="Programing image" />

                            <img
                                className="html_img animate__animated animate__zoomIn"
                                src={imgHtml}
                                alt="Programing image"
                            />
                            <img
                                className="css_img animate__animated animate__zoomIn"
                                src={imgCss}
                                alt="Programing image"
                            />
                            <img
                                className="javaScript_img animate__animated animate__zoomIn"
                                src={imgJavaScript}
                                alt="Programing image"
                            />
                            <img
                                className="react_img animate__animated animate__zoomIn"
                                src={imgReact}
                                alt="Programing image"
                            />
                            <img
                                className="node_img animate__animated animate__zoomIn"
                                src={imgNode}
                                alt="Programing image"
                            />
                        </figure>
                    </article>
                </article>

                <article className="abilities_container">
                    <article className="ability">
                        <AbilityTarget
                            img={img1}
                            title="Simple y claro"
                            text="Comunicación clara y amigable con el usuario mediante el uso de Illustrator, Photoshop, Adobe XD y Figma en el diseño."
                        />

                        <AbilityTarget
                            img={img2}
                            title="Mis tecnologías"
                            text="Uso HTML, CSS, JavaScript y React en el FrontEnd y Node Js con Express en el BackEnd."
                        />

                        <AbilityTarget
                            img={img3}
                            title="Diseño responsivo"
                            text="Diseño sitios web 100% adaptable a diferentes tamaños de dispositivos, asegurando la accesibilidad y la mejor experiencia de usuario."
                        />
                    </article>
                </article>

                <a
                    href="https://drive.google.com/file/d/1sF0PBac5Z58viBODipNhiSbGKZyUKm0f/view?usp=share_link"
                    target="_blank"
                    className="btn_projects"
                >
                    <button className="custom-btn btn-8">
                        <span>Ver hoja de vida</span>
                    </button>
                </a>
            </article>
        </section>
    );
};

export default Skills;
