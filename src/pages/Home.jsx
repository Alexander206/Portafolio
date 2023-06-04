// Dependences
import React from "react";

// Componets
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Abilities from "../components/Abilities";

// Estyles
import "../styles/pages/home.scss";

// Resourses
import data from "../_data/home.json";

const bannerData = data.banner;
const skillsData = data.skills;

const Home = () => {
    return (
        <>
            <LoadingPage />
            <Header />

            <main>
                <Banner
                    timer={bannerData.timer}
                    welcome={bannerData.welcome}
                    greeting={bannerData.greeting}
                    profession={bannerData.profession}
                    description={bannerData.description}
                />

                <Skills
                    text={skillsData.text}
                    ability={skillsData.ability}
                    imgMe={skillsData.imgMe}
                    images={skillsData.images}
                    imgDesing={skillsData.imgDesing}
                    imgCurriculum={skillsData.imgCurriculum}
                    imgResponsive={skillsData.imgResponsive}
                    link={skillsData.link}
                />

                <Abilities />
            </main>

            <Footer />
        </>
    );
};

export default Home;
