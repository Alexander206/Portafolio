import React from "react";

// Componets
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingPage";

import Interactive from "../components/Interactive";

const Contact = () => {
    return (
        <>
            <LoadingPage />
            <Header />
            <main>
                <Interactive />
            </main>
            <Footer />
        </>
    );
};

export default Contact;
