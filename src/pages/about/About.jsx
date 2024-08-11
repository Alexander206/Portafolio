import { useContext } from "react";

import "./about.scss";

import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";

import Skills from "./components/templates/Skills.jsx";

// Resourses
import ilustrationMe from "../../assets/pages/home/me-ilustration.svg";
import imgArrow from "../../assets/icon/arrow-right.svg";
import data from "./data.json";

import GeneralContext from "../../context/GeneralContext";

const About = () => {
    const { route, social } = useContext(GeneralContext);

    return (
        <>
            <Nav classPage={"header_home"} />
            <main className="main_about">
                <Skills
                    text={[
                        "En mi trayectoria como <span>desarrollador de software</span> he colaborado en proyectos significativos, donde he tenido el privilegio de trabajar con organizaciones destacadas como la <span>Pontificia Universidad Javeriana</span> y la <span>Universidad Pedagógica Nacional</span>. Mi formación como <span>Licenciado</span> ha sido esencial, permitiéndome combinar habilidades técnicas con capacidades comunicativas.",
                    ]}
                    ability={[
                        { icon: "people-circle", text: "COMUNICACIÓN" },
                        { icon: "heart-half", text: "AUTONOMÍA" },
                        { icon: "layers", text: "ORGANIZACIÓN" },
                        { icon: "body", text: "ADAPTABILIDAD" },
                    ]}
                    images={[
                        { img: data.tectonologies.react, id: "react" },
                        { img: data.tectonologies.sass, id: "sass" },
                        { img: data.tectonologies.spring, id: "spring" },
                        { img: data.tectonologies.nodejs, id: "nodejs" },
                    ]}
                    imgMe={ilustrationMe}
                    arrow={imgArrow}
                    btnlink={{
                        cvUrl: social.cv,
                        text: "Hoja de vida",
                    }}
                />
            </main>
            <Footer theme="white" />
        </>
    );
};

export default About;
