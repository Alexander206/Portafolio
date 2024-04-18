// Dependences
import { useState, useEffect } from "react";

import "./loadingPage.scss";

const LoadingPage = () => {
    const [stateID, setStateID] = useState("");
    const [stateClass, setStateClass] = useState("Loading__Page");

    useEffect(() => {
        setStateID("pagina__cargada");
    }, []);

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
