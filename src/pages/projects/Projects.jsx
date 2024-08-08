import { useState, useMemo } from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

import "./projects.scss";
import "./components/templates/game.scss";

import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";
import CategoriesComponent from "./components/templates/CategoriesComponent.jsx";
import Project from "./components/organisms/Project.jsx";

import ProjectsContext from "../../context/ProjectsContext.jsx";
import data from "./data.json";
import BtnUp from "../../library/btns/BtnUp.jsx";

import Carousel from "../../library/carousel/Carousel.jsx";

const Projects = () => {
    const [itemSelect, setItemSelect] = useState(0);
    const { projects, categories } = data;
    const categoriesList = categories.map((item) => item.toLocaleUpperCase());

    // Filtrar proyectos basados en la categoría seleccionada
    const filteredProjects = useMemo(() => {
        return projects.filter((item) =>
            itemSelect !== 0 ? item.category.some((category) => category === categoriesList[itemSelect]) : true
        );
    }, [itemSelect]);

    const listCategories = categories.map((item, index) => {
        return (
            <CategoriesComponent
                key={index}
                id={index}
                category={item}
                itemSelect={itemSelect}
                setItemSelect={setItemSelect}
            />
        );
    });

    return (
        <ProjectsContext.Provider value={projects}>
            <Nav classPage="header_projects" />
            <BtnUp />
            <main className="main_projects">
                <section className="container_filter">
                    <article className="filtrer">
                        <article className="text">
                            <h2>Proyectos</h2>
                            <p>
                                Cada proyecto ha sido una oportunidad para crecer personal y profesionalmente.{" "}
                                <span>¿Quieres obtener más detalles?</span> No dudes en contactarme.
                            </p>
                        </article>

                        <Accordion className="categories">
                            <AccordionItem className="filters_box" key="1" aria-label="Filtros" title="Filtros">
                                <ul>{listCategories}</ul>
                            </AccordionItem>
                        </Accordion>
                    </article>

                    <article className="projects_container">
                        {filteredProjects.map((item, index) => (
                            <Project key={index} id={item.id} />
                        ))}
                    </article>
                </section>
            </main>
            <Footer />
        </ProjectsContext.Provider>
    );
};

export default Projects;
