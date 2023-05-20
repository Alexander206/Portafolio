// Dependences
import React, { useState, useEffect } from "react";

// Componets
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Skills from "../components/Skills";

// Estyles
import "../styles/pages/home.scss";

// Resourses

const Home = () => {
    return (
        <>
            <LoadingPage />
            <Header />

            <main>
                <Banner
                    timer="2000"
                    welcome="Ver proyectos"
                    greeting="Hola! Soy Jeisson Alexander,"
                    profession={[" Web Developer", " Front-End Developer", " Back-End Developer", " Web Designer"]}
                    description="Tengo experiencia en proyectos de programación y diseño web. He trabajado en diversos proyectos con instituciones de renombre como la Universidad Pedagógica Nacional."
                />

                <Skills />
            </main>

            <Footer />
        </>
    );
};

export default Home;
