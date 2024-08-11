import { useContext } from "react";

import "./home.scss";

import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";
import Banner from "./components/templates/Banner";

import GeneralContext from "../../context/GeneralContext";

// Resourses
import imgProfile from "../../assets/pages/home/me.webp";
import data from "./data.json";

const Home = () => {
    const { route, social } = useContext(GeneralContext);

    return (
        <>
            <Nav classPage={"header_home"} />
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
                            { text: "Contacto", url: route.contact, icon: "call" },
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
            </main>
            <Footer />
        </>
    );
};

export default Home;
