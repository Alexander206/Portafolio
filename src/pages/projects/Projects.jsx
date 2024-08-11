import { useState, useMemo } from "react";
import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@nextui-org/react";

import "./projects.scss";
import "./components/templates/game.scss";

import ScrollAnimationWrapper from "../../library/utils/ScrollAnimationWrapper";
import getScrollAnimation from "../../library/utils/GetScrollAnimation.jsx";

import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";
import CategoriesComponent from "./components/templates/CategoriesComponent.jsx";
import Project from "./components/organisms/Project.jsx";

import ProjectsContext from "../../context/ProjectsContext.jsx";
import data from "./data.json";
import BtnUp from "../../library/btns/BtnUp.jsx";
import BtnScroll from "../../library/btns/BtnScroll.jsx";

const Projects = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
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
            <BtnScroll href="#id_4" />
            <main className="main_projects">
                <section className="container_filter">
                    <ScrollAnimationWrapper className="filtrer" variants={scrollAnimation}>
                        <motion.article variants={scrollAnimation}>
                            <article className="text">
                                <h2>Proyectos</h2>
                                <p>Cada proyecto ha sido una oportunidad para crecer personal y profesionalmente. </p>
                            </article>

                            <Accordion className="categories" defaultExpandedKeys={["1"]}>
                                <AccordionItem className="filters_box" key="1" aria-label="Filtros" title="Filtros">
                                    <ul>{listCategories}</ul>
                                </AccordionItem>
                            </Accordion>
                        </motion.article>
                    </ScrollAnimationWrapper>

                    <article className="projects_container">
                        {filteredProjects.map((item, index) => (
                            <Project key={index} id={item.id} count={index + 1} />
                        ))}
                    </article>
                </section>
            </main>
            <Footer />
        </ProjectsContext.Provider>
    );
};

export default Projects;
