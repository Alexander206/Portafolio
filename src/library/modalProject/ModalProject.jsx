import { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import "./modalProject.scss";

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";

import Carousel from "../carousel/Carousel";
import ProjectsContext from "../../context/ProjectsContext";

const ModalProject = ({ modalShow, id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        setTimeout(() => {
            onOpen();
        }, 200);
    };

    useEffect(() => {
        modalShow ? onOpen() : onClose();
    }, [modalShow]);

    // Contexto del modal
    const projectData = useContext(ProjectsContext)[id];

    return (
        <>
            {projectData.link ? (
                <Button className="btn_modal" onPress={() => handleOpen()}>
                    <span>Saber más</span>
                    <ion-icon name="open"></ion-icon>
                </Button>
            ) : (
                false
            )}

            <Modal
                size="5xl"
                isOpen={isOpen}
                onClose={onClose}
                placement="top"
                shouldBlockScroll
                backdrop="blur"
                className="modal_personalized"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalBody className="modal_body">
                                <Carousel images={projectData.modal.images} />

                                <article className="text">
                                    <article className="slider">
                                        <div className="slide-track">
                                            {projectData.modal.technologies.map((item, index) => {
                                                return (
                                                    <span className="slide" key={index}>
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </article>

                                    <article className="info">
                                        <ul className="links">
                                            {projectData.link ? (
                                                <a href={projectData.link} target="_blank">
                                                    <ion-icon name="earth"></ion-icon>
                                                    Sitio web
                                                </a>
                                            ) : (
                                                <span className="upss">Aún está en construcción</span>
                                            )}

                                            {projectData.repo ? (
                                                <a href={projectData.repo} target="_blank">
                                                    <ion-icon name="logo-github"></ion-icon>
                                                    Repositorio
                                                </a>
                                            ) : (
                                                false
                                            )}
                                        </ul>

                                        <div className="separator"></div>

                                        <ul className="author">
                                            <h4>Autores</h4>

                                            {projectData.author.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {item} <br />
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <div className="separator"></div>

                                        <ul className="achievements">
                                            <h4>Logros significativos y Retos superados</h4>

                                            {projectData.modal.achievements.map((item, index) => {
                                                return <li key={index}>{item}</li>;
                                            })}
                                        </ul>
                                    </article>
                                </article>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

ModalProject.propTypes = {
    modalShow: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default ModalProject;
