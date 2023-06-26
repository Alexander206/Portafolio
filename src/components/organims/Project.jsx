// Dependences
import React, { useState, useContext } from "react";

// Components
import GrabZone from "../atoms/GrabZone";
import ModalProject from "../atoms/ModalProject";

// Resourses
import ProjectsContext from "../../context/ProjectsContext";

const Project = ({ id }) => {
    let imgLink;

    // Estados para el modal y el "juego"
    const [cursorGrabbed, setCursorGrabbed] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    // Contexto de los proyectos
    const projectData = useContext(ProjectsContext)[id];

    // Enrutamiento de las imagenes
    const img = new URL(`../../assets/proyects/${projectData.img}`, import.meta.url).pathname;

    const handleCursorGrabbed = () => {
        setCursorGrabbed(true);
        setTimeout(() => {
            setCursorGrabbed(false);
        }, 1500);
    };

    const screenStyle = cursorGrabbed ? { cursor: "none" } : {};

    // Validacin si tiene o no link para hacer el "Juego"
    if (projectData.link.length < 1) {
        imgLink = (
            <div className="container_game">
                <button className="projects_img" onClick={() => setModalShow(true)}>
                    <img src={img} alt="image project" />
                </button>

                <div className="grab-zone-wrapper">
                    <GrabZone onCursorGrabbed={handleCursorGrabbed} cursorGrabbed={cursorGrabbed} gameOver={gameOver} />
                </div>
            </div>
        );
    } else {
        imgLink = (
            <button className="projects_img" onClick={() => setModalShow(true)}>
                <img src={img} alt="image project" />
            </button>
        );
    }

    // Validación para los links
    const iconLink = projectData.link ? (
        <a href={projectData.link} target="_blank">
            <ion-icon name="earth-outline"></ion-icon>
        </a>
    ) : (
        <span className="upss">Aún está en construcción</span>
    );

    // Validación para el repositorio
    const iconRepo = projectData.repo ? (
        <a href={projectData.repo} target="_blank">
            <ion-icon name="logo-github"></ion-icon>
        </a>
    ) : (
        false
    );

    return (
        <article className="projects_link" style={screenStyle}>
            {imgLink}

            <article className="projects_data">
                <span className="projects_category"> {projectData.category} </span>
                <a href={projectData.link} className="projects_title" target="_blank">
                    {projectData.title}
                </a>
                <span className="projects_date"> {projectData.date} </span>
                <p className="projects_text">{projectData.text}</p>
                <p className="projects_location">{projectData.location}</p>
            </article>

            <article className="container_btns">
                {iconLink}
                {iconRepo}
            </article>

            <ModalProject id={id} show={modalShow} onHide={() => setModalShow(false)} />
        </article>
    );
};

export default Project;
