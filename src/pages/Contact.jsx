// Dependences
import React from "react";

// Componets
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingPage";
import ProjectsTitle from "../components/ProjectsTitle";

// Styles
import "../styles/pages/contact.scss";

// Resources
import data from "../_data/contact.json";

// Principal component
const Contact = () => {
    return (
        <>
            <LoadingPage />
            <Header classPage={"header_contact"} />
            <main className="main_contact">
                <ProjectsTitle title={data.title} text1={data.text1} textSpan={data.textSpan} text2={data.text2} />
                
            </main>
            <Footer />
        </>
    );
};

export default Contact;
