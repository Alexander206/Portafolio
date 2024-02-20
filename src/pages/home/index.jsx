// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";

import Banner from "./components/templates/Banner";

// Resourses
import imgProfile from "../../assets/pages/home/me.png";
import logo from "../../assets/icon/logo.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import github from "../../assets/icon/github.svg";
import instagram from "../../assets/icon/instagram.svg";

import data from "../../_data/general.json";

// Principal component
const Home = () => {
    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />

            <main className="main_home">
                <Banner
                    imgLogo={logo}
                    imgProfile={imgProfile}
                    imgSocial={[
                        { icon: linkedin, url: data.linkedin },
                        { icon: github, url: data.github },
                        { icon: instagram, url: data.instagram },
                    ]}
                    title={["Jeisson Alexander Gavilán Murcia", "Software Developer"]}
                    greeting={{
                        timer: 2000,
                        greeting: "Hola!",
                        profession: ["Una línea de código a la vez"],
                    }}
                    description="Tengo experiencia en proyectos de desarrollo de software y diseño web. He trabajado en proyectos con instituciones de renombre como la Universidad Pedagógica Nacional."
                    btn="Ver proyectos"
                />
            </main>

            <Footer />
        </>
    );
};

export default Home;
