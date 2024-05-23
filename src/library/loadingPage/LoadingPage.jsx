// Dependences
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import "./loadingPage.scss";

const LoadingPage = ({ onFinish }) => {
    const [stateID, setStateID] = useState("");
    const [stateClass, setStateClass] = useState("loading_page");
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setStateID("page_loaded");
    }, []);

    const handlerAnimation = () => {
        setStateClass("loading_page off");
        onFinish();
    };

    return (
        <section className={stateClass} id={stateID} onAnimationEnd={handlerAnimation}>
            <article className="spinner-grow text-light" role="status">
                <span className="visually-hidden"></span>
            </article>
        </section>
    );
};

LoadingPage.propTypes = {
    onFinish: PropTypes.func.isRequired,
};

export default LoadingPage;
