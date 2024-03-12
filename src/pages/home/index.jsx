import { useContext } from "react";

// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";
import BtnScroll from "../../library/btns/BtnScroll";

import Banner from "./components/templates/Banner";
import Tecnology from "./components/templates/Tecnology";

// Context
import GeneralContext from "./../../context/GeneralContext";

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
            <BtnScroll href="#tecnologyID" />

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
                />
            </main>

            <Footer />
        </>
    );
};

export default Home;
