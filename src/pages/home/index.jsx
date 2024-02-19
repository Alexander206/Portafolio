// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";

import Banner from "./components/templates/Banner";

// Resourses
import imgProfile from "../../assets/pages/home/me.png";

// Principal component
const Home = () => {
    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />

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
            </main>

            <Footer />
        </>
    );
};

export default Home;
