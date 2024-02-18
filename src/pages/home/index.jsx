// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Header from "../../library/header";
import Footer from "../../library/footer";

import Banner from "./components/templates/Banner";
import Skills from "./components/templates/Skills";

// Resourses
import imgProfile from "../../assets/pages/home/me.png";
import ilustrationMe from "../../assets/pages/home/me-ilustration.svg";
import imgArrow from "../../assets/icon/arrow-right.svg";

import { cv } from "../../_data/general.json";

// Principal component
const Home = () => {
    return (
        <>
            <LoadingPage />
            <Header classPage={"header_home"} />

            <main className="main_home">
                <Banner
                    imgProfile={imgProfile}
                    title={{
                        timer: 2000,
                        greeting: "Hola! Soy Jeisson Alexander,",
                        profession: [" Software Developer", " Front-End Developer", " Back-End Developer", " Web Designer"],
                    }}
                    description="Tengo experiencia en proyectos de desarrollo de software y diseño web. He trabajado en proyectos con instituciones de renombre como la Universidad Pedagógica Nacional."
                    btn="Ver proyectos"
                />

                <Skills
                    text={[
                        "Soy un apasionado desarrollador que se destaca por enfrentar desafíos en situaciones nuevas y complejas. Esta mentalidad me impulsa a buscar constantemente nuevas formas de mejorar y ampliar mis habilidades en el campo de la tecnología. Además, como",
                        "Licenciado en Diseño Tecnológico, ",
                        "poseo la capacidad de liderar equipos con eficacia, adaptándome fácilmente y comunicándome de manera asertiva.",
                    ]}
                    ability={[
                        { icon: "people-circle", text: "COMUNICACIÓN" },
                        { icon: "heart-half", text: "AUTONOMÍA" },
                        { icon: "layers", text: "ORGANIZACIÓN" },
                        { icon: "body", text: "ADAPTABILIDAD" },
                    ]}
                    images={[
                        { img: "HTML.svg", id: "html" },
                        { img: "CSS.svg", id: "css" },
                        { img: "javaScript.svg", id: "javaScript" },
                        { img: "react.svg", id: "react" },
                        { img: "node.svg", id: "node" },
                    ]}
                    imgMe={ilustrationMe}
                    arrow={imgArrow}
                    btnlink={{
                        cvUrl: cv,
                        text: "Hoja de vida",
                    }}
                />
            </main>

            <Footer />
        </>
    );
};

export default Home;
