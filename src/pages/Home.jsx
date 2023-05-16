// Dependences
import React, { useState } from "react";

// Componets
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Habilities from "../components/Habilities";

// Estyles
import "../styles/pages/home.scss";

// Resourses

const Home = () => {
    const [gradient, setgradient] = useState([-1000, -1000]);

    const handlerGradient = (event) => {
        setgradient([event.clientX, event.clientY]);
    };

    return (
        <>
            <Header />

            <main onMouseMove={handlerGradient}>
                <Banner
                    timer="2000"
                    welcome="Bienvenido a mi portafolio"
                    greeting="Hola! Soy Alexander"
                    profession={[" Web Developer", " Front-End Developer", " Back-End Developer", " Web Designer"]}
                    description="Tengo experiencia en proyectos de programación y diseño web. He trabajado en diversos proyectos con
                instituciones de renombre como la Universidad Pedagógica Nacional. Me apasiona enfrentar desafíos en
                situaciones nuevas y complejas, lo que me impulsa a estar Siempre buscar nuevas formas de mejorar y
                ampliar mis habilidades."
                />

                <Habilities
                    text="Como Licenciado en Diseño Tecnológico, he desarrollado habilidades que me han permitido mejorar
                        en la comunicación, la dirección de grupos y la adaptabilidad."
                />
            </main>

            <Footer />

            <div
                className="gradient"
                onMouseMove={handlerGradient}
                style={{
                    background: `radial-gradient(circle at ${gradient[0]}px ${gradient[1]}px, rgba(20,20,20,0.6446953781512605) 0%, rgba(20,20,20,0.4906337535014006) 32%, rgba(20,20,20,0.7315301120448179) 100%)`,
                }}
            ></div>
        </>
    );
};

export default Home;
