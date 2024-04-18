// Dependences
import { useState, useContext } from "react";
import PropTypes from "prop-types";

// Components
import GrabZone from "../atoms/GrabZone";
import ModalProject from "../../../../library/modalProject/ModalProject";

// Resourses
import ProjectsContext from "../../../../context/ProjectsContext";

const Project = ({ id }) => {
    let imgLink;

    const [cursorGrabbed, setCursorGrabbed] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const gameOver = false;

    const projectData = useContext(ProjectsContext)[id];

    const img = new URL(`../../assets/proyects/${projectData.img}`, import.meta.url).pathname;

    const handleCursorGrabbed = () => {
        setCursorGrabbed(true);
        setTimeout(() => {
            setCursorGrabbed(false);
        }, 1500);
    };

    const screenStyle = cursorGrabbed ? { cursor: "none" } : {};

    const formattedCategories = projectData.category.map((item, index) => {
        return index !== projectData.category.length - 1 ? `${item} - ` : item;
    });

    const categories = formattedCategories.map((item, index) => {
        return (
            <span key={index} className="projects_category">
                {item}
            </span>
        );
    });

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

    const iconLink = projectData.link ? (
        <a href={projectData.link} target="_blank">
            <ion-icon name="earth-outline"></ion-icon>
        </a>
    ) : (
        <span className="upss">Aún está en construcción</span>
    );

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
                <article>{categories}</article>
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

Project.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Project;
