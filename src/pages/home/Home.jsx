import { useContext } from "react";

import "./home.scss";

import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";
import BtnScroll from "../../library/btns/BtnScroll.jsx";

import Banner from "./components/templates/Banner";
import Skills from "./components/templates/Skills.jsx";

import GeneralContext from "../../context/GeneralContext";

// Resourses
import imgProfile from "../../assets/pages/home/me.png";
import ilustrationMe from "../../assets/pages/home/me-ilustration.svg";
import imgArrow from "../../assets/icon/arrow-right.svg";
import data from "./data.json";

const Home = () => {
    const { route, social } = useContext(GeneralContext);

    return (
        <>
            <Nav classPage={"header_home"} />
            <BtnScroll href="#skills" />

            <main className="main_home">
                <Banner
                    text={{
                        title: ["Jeisson Alexander Gavilán Murcia", "Software Developer"],
                        greeting: {
                            timer: 100,
                            greeting: "¡Hola a todos!",
                            profession: ["Les doy la bienvenida a mi portafolio web"],
                        },
                        btns: [
                            { text: "Proyectos", url: route.projects, icon: "code-slash" },
                            { text: "Servicios", url: route.services, icon: "cube" },
                        ],
                    }}
                    image={{
                        logo: data.banner.logo,
                        profile: imgProfile,
                        social: [
                            { icon: data.banner.linkedin, url: social.linkedin },
                            { icon: data.banner.github, url: social.github },
                            { icon: data.banner.instagram, url: social.instagram },
                        ],
                    }}
                    tectonologies={{
                        title: "Algunas de las tecnologías y herrmaintas que he usado",
                        list: data.tectonologies,
                    }}
                />

                <Skills
                    text={[
                        "En mi trayectoria como <span>desarrollador de software</span> he colaborado en proyectos significativos, donde he tenido el privilegio de trabajar con instituciones destacadas como la <span>Pontificia Universidad Javeriana</span> y la <span>Universidad Pedagógica Nacional</span>. Mi formación como <span>Licenciado</span> ha sido esencial, permitiéndome combinar habilidades técnicas con capacidades comunicativas.",
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

            <Footer />
        </>
    );
};

export default Home;
