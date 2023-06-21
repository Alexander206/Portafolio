import React, { useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import ProjectsContext from "../../context/ProjectsContext";

import "../../styles/components/atoms/modalPersonalized.scss";

const ModalProject = (props) => {
    // Contexto del modal
    const projectData = useContext(ProjectsContext)[props.id];

    const carouselImages = projectData.modal.images.map((item, index) => {
        // Enrutamiento de las imagenes
        const img = new URL(`../../assets/proyects/${item}`, import.meta.url).pathname;

        return (
            <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt="First slide" />
            </Carousel.Item>
        );
    });

    return (
        <Modal {...props} className="modal_personalized" size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <section className="modal_header">
                <button onClick={props.onHide}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </section>

            <section className="modal_body">
                <Carousel data-bs-theme="dark">{carouselImages}</Carousel>

                <article className="text">
                    <article className="slider">
                        <div className="slide-track">
                            <span className="slide">hola1</span>
                            <span className="slide">hola2</span>
                            <span className="slide">hola3</span>

                            <span className="slide">hola1</span>
                            <span className="slide">hola2</span>
                            <span className="slide">hola3</span>
                        </div>
                    </article>

                    <h4>{projectData.title}</h4>
                    <h4>{projectData.title}</h4>
                    <h4>{projectData.title}</h4>
                </article>
            </section>
        </Modal>
    );
};

export default ModalProject;
