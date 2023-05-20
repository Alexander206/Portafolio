import React, { useState, useEffect } from "react";

import "../styles/components/loadingPage.scss";

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
        <div className={stateClass} id={stateID} onAnimationEnd={handlerAnimation}>
            <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default LoadingPage;
