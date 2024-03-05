import { useContext } from "react";

// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";

import Banner from "./components/templates/Banner";
import Redirect from "./components/templates/Redirect";

// Context
import GeneralContext from "./../../context/GeneralContext";

// Resourses
import imgProfile from "../../assets/pages/home/me.png";
import logo from "../../assets/icon/logo.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import github from "../../assets/icon/github.svg";
import instagram from "../../assets/icon/instagram.svg";

// Principal component
const Home = () => {
    const { route, social } = useContext(GeneralContext);

    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />

            <main className="main_home">
                <Banner
                    imgLogo={logo}
                    imgProfile={imgProfile}
                    imgSocial={[
                        { icon: linkedin, url: social.linkedin },
                        { icon: github, url: social.github },
                        { icon: instagram, url: social.instagram },
                    ]}
                    title={["Jeisson Alexander Gavilán Murcia", "Software Developer"]}
                    greeting={{
                        timer: 100,
                        greeting: "¡Hola!, Bienvenidos,",
                        profession: ['"Superando desafíos con determinación"'],
                    }}
                    description="Tengo experiencia en proyectos de desarrollo de software y diseño web. He trabajado en proyectos con instituciones de renombre como la Universidad Pedagógica Nacional."
                    btns={[
                        { text: "Proyectos", url: route.projects, icon: "code-slash" },
                        { text: "Servicios", url: route.services, icon: "cube" },
                    ]}
                />

                <Redirect />
            </main>

            <Footer />
        </>
    );
};

export default Home;
