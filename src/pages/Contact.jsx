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
                <section className="contact" id="contact">
                    <ProjectsTitle title={data.title} text1={data.text1} textSpan={data.textSpan} text2={data.text2} />

                    <figure className="contact_links_container">
                        <ul className="contact_links_list">
                            <li className="contact_links_item">
                                <a href="https://www.linkedin.com/in/jeisson-alexander/" target="_blank">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                            <li className="contact_links_item">
                                <a href="https://github.com/Alexander206" target="_blank">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>
                            <li className="contact_links_item">
                                <a href="https://www.instagram.com/amarokdev/" target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>
                            <li className="contact_links_item">
                                <a href="https://chatwith.io/es/s/62faf8a10ca60" target="_blank">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </figure>

                    {/* <article className="contact_form">
                        <h2 className=" form_title"> Enviame un mensaje </h2>

                        <form className="enviarMensaje" action="">
                            <label htmlFor="name">
                                <input type="text" id="name" placeholder="Nombre" required />
                            </label>
                            <label htmlFor="correo">
                                <input type="email" id="email__mensaje" placeholder="Correo electrónico" required />
                            </label>
                            <label htmlFor="asunto">
                                <input type="text" id="asunto" placeholder="Asunto" required />
                            </label>
                            <label htmlFor="mensaje">
                                <textarea
                                    className="mensajeTextArea"
                                    id="mensaje"
                                    name="mensaje"
                                    rows="5"
                                    placeholder="Tu mensaje ..."
                                ></textarea>
                            </label>

                            <button type="submit" className="btn_curriculum">
                                <div className="custom-btn btn-8">
                                    <span>Enviar</span>
                                </div>
                            </button>
                        </form>
                    </article> */}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
