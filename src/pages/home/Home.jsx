import { useContext } from "react";

// Styles
import "./home.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";
import BtnScroll from "../../library/btns/BtnScroll";

import Banner from "./components/templates/Banner";
import Tecnology from "./components/templates/Tecnology";

// Context
import GeneralContext from "../../context/GeneralContext";

// Resourses
import imgProfile from "../../assets/pages/home/me.png";
import data from "./data.json";

// Principal component
const Home = () => {
    const { route, social } = useContext(GeneralContext);

    const pathImage = (imgName) => new URL(`../../assets/icon/${imgName}`, import.meta.url).pathname;

    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />
            <BtnScroll href="#rols" />

            <main className="main_home">
                <Banner
                    imgLogo={pathImage(data.icons.logo)}
                    imgProfile={imgProfile}
                    imgSocial={[
                        { icon: pathImage(data.icons.linkedin), url: social.linkedin },
                        { icon: pathImage(data.icons.github), url: social.github },
                        { icon: pathImage(data.icons.instagram), url: social.instagram },
                    ]}
                    title={["Jeisson Alexander Gavilán Murcia", "Software Developer"]}
                    greeting={{
                        timer: 100,
                        greeting: "¡Hola a todos!",
                        profession: ["Les doy la bienvenida a mi portafolio en línea"],
                    }}
                    btns={[
                        { text: "Proyectos", url: route.projects, icon: "code-slash" },
                        { text: "Servicios", url: route.services, icon: "cube" },
                    ]}
                />

                <Tecnology
                    title="Algunas de las tecnologías y herrmaintas que he usado"
                    pathImage={pathImage}
                    tecnologies={[
                        data.icons.office,
                        data.icons.adobe,
                        data.icons.figma,
                        data.icons.notion,
                        data.icons.postman,
                        data.icons.visual,
                        data.icons.wordpress,
                        data.icons.moodle,
                        data.icons.git,

                        data.icons.javascript,
                        data.icons.java,
                        data.icons.php,

                        data.icons.mysql,
                        data.icons.mongodb,

                        data.icons.nodejs,
                        data.icons.express,
                        data.icons.react,
                        data.icons.sass,
                    ]}
                    titleRols="¿En qué rol me puedo desempeñar?"
                    btn={{ route: route.about, text: "Concer más" }}
                    cards={[
                        {
                            img: pathImage(data.icons.software),
                            title: "Desarrollador de Software",
                            description:
                                "Soy un apasionado desarrollador de software con experiencia en el diseño, desarrollo e implementación de soluciones robustas y escalables. Mi enfoque se centra en la creación de aplicaciones que no solo cumplen con los requisitos funcionales, sino que también priorizan la eficiencia y la seguridad.",
                            tags: ["Patrones de diseño", "Arquitectura de software", "Desarrollo ágil"],
                        },
                        {
                            img: pathImage(data.icons.backend),
                            title: "Desarrollador Backend",
                            description:
                                "Como desarrollador backend, me especializo en la construcción y mantenimiento de la lógica y la funcionalidad detrás de las aplicaciones web. Desde la gestión de bases de datos hasta la implementación de APIs robustas, mi enfoque es garantizar un rendimiento óptimo y una escalabilidad sin problemas.",
                            tags: ["APIs", "SQL", "NoSQL", "seguridad informática"],
                        },
                        {
                            img: pathImage(data.icons.frontend),
                            title: "Desarrollador Frontend",
                            description:
                                "Como desarrollador frontend, me dedico a crear interfaces de usuario atractivas y funcionales que brinden una experiencia excepcional al usuario. Mi enfoque se centra en la usabilidad, la accesibilidad y la optimización del rendimiento para garantizar que las aplicaciones sean intuitivas y receptivas.",
                            tags: ["JavaScript", "React", "CSS3"],
                        },
                    ]}
                />
            </main>

            <Footer />
        </>
    );
};

export default Home;
