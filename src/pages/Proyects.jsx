import React, { useEffect } from "react";

// Componets
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Game from "../components/Game";

const Proyects = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <Game />
            <Footer />
        </>
    );
};

export default Proyects;
