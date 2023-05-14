// Dependences
import React from "react";

// Componets
import Header from "../components/Header";
import Banner from "../components/Banner";

// Estyles
import "../styles/pages/home.scss";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                <Banner
                    timer="1000"
                    welcome="Bienvenido a mi portafolio"
                    greeting="Hola! Soy Alexander"
                    profession={[" Web Developer", " Front-End Developer", " Back-End Developer", " Web Designer"]}
                    description="Tengo experiencia en proyectos de programación y diseño web. He trabajado en diversos proyectos con
                instituciones de renombre como la Universidad Pedagógica Nacional. Me apasiona enfrentar desafíos en
                situaciones nuevas y complejas, lo que me impulsa a estar Siempre buscar nuevas formas de mejorar y
                ampliar mis habilidades."
                />

                <section className="habilities">
                    <article>
                        <h1></h1>

                        <p></p>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Home;
