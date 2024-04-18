import { useContext } from "react";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import ProjectsContext from "../../context/ProjectsContext";

import "./styles.scss";

const ModalProject = (props) => {
    // Contexto del modal
    const projectData = useContext(ProjectsContext)[props.id];

    // Imagenes del modal
    const carouselImages = projectData.modal.images.map((item, index) => {
        // Enrutamiento de las imagenes
        const img = new URL(`../../assets/proyects/${item[0]}`, import.meta.url).pathname;
        const img2 = new URL(`../../assets/proyects/${item[1]}`, import.meta.url).pathname;

        return (
            <Carousel.Item key={index}>
                <img src={img} alt="First slide" />
                <img src={img2} alt="First slide" />
            </Carousel.Item>
        );
    });

    // tecnologias del modal
    const tecnologies = projectData.modal.technologies.map((item, index) => {
        return (
            <span className="slide" key={index}>
                {item}
            </span>
        );
    });

    // Logros alcanzados
    const achievements = projectData.modal.achievements.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    // Validación para los links
    const iconLink = projectData.link ? (
        <a href={projectData.link} target="_blank">
            <ion-icon name="earth-outline"></ion-icon>
            Sitio web
        </a>
    ) : (
        <span className="upss">Aún está en construcción</span>
    );

    // Validación para el repositorio
    const iconRepo = projectData.repo ? (
        <a href={projectData.repo} target="_blank">
            <ion-icon name="logo-github"></ion-icon>
            Repositorio
        </a>
    ) : (
        false
    );

    // Lista de autores del proyecto
    const listAuthor = projectData.author.map((item, index) => {
        return (
            <li key={index}>
                {item} <br />
            </li>
        );
    });

    return (
        <Modal
            {...props}
            className="modal_personalized"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={projectData.title}
        >
            <section className="modal_header">
                <button onClick={props.onHide}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </section>

            <section className="modal_body">
                <Carousel data-bs-theme="dark">{carouselImages}</Carousel>

                <article className="text">
                    <article className="slider">
                        <div className="slide-track">{tecnologies}</div>
                    </article>

                    <article className="info">
                        <ul className="links">
                            {iconLink}
                            {iconRepo}
                        </ul>

                        <div className="separator"></div>

                        <ul className="author">
                            <h4>Autores</h4>
                            {listAuthor}
                        </ul>

                        <div className="separator"></div>

                        <ul className="achievements">
                            <h4>Logros significativos y Retos superados</h4>
                            {achievements}
                        </ul>
                    </article>
                </article>
            </section>
        </Modal>
    );
};

ModalProject.propTypes = {
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
};

export default ModalProject;
