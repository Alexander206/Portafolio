// Dependences
import React, { useState, useEffect } from "react";

// Styles
import "../styles/components/loadingPage.scss";

// Principal component
const LoadingPage = () => {
    // Estado para cambiar las clases del componente
    const [stateID, setStateID] = useState("");
    const [stateClass, setStateClass] = useState("Loading__Page");

    // Hook cuando cargue la página
    useEffect(() => {
        setStateID("pagina__cargada");
    }, []);

    // Función para la animación del componente
    const handlerAnimation = () => {
        setStateClass("Loading__Page off");
    };

    return (
        <section className={stateClass} id={stateID} onAnimationEnd={handlerAnimation}>
            <article className="spinner-grow text-light" role="status">
                <span className="visually-hidden"></span>
            </article>
        </section>
    );
};

export default LoadingPage;
