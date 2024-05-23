import { useState, useEffect } from "react";

import "./projects.scss";
import "./components/templates/game.scss";

import LoadingPage from "../../library/loadingPage/LoadingPage.jsx";
import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";
import ProjectsTitle from "../../library/title/Title.jsx";
import CategoriesComponent from "./components/templates/CategoriesComponent.jsx";
import Project from "./components/organisms/Project.jsx";

import ProjectsContext from "../../context/ProjectsContext.jsx";
import data from "./data.json";

const Proyects = () => {
    const [selectCategory, setSelectCategory] = useState(true);
    const [itemSelect, setItemSelect] = useState("Todos");
    const [stateProjects, setStateProjects] = useState();

    const Categories = data.categories.map((item, index) => {
        return (
            <CategoriesComponent
                key={index}
                id={item}
                category={item}
                componentClass={selectCategory && itemSelect === item ? "btn_active" : "btn_desactive"}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
                itemSelect={itemSelect}
                setItemSelect={setItemSelect}
            />
        );
    });

    const FilterProjects = data.projects.filter((item) => {
        return item.category.some((elemento) => elemento.toUpperCase().includes(itemSelect.toUpperCase()));
    });

    const Projects = FilterProjects.map((item, index) => {
        return <Project key={index} id={item.id} />;
    });

    const AllProjects = data.projects.map((item, index) => {
        return <Project key={index} id={index} />;
    });

    useEffect(() => {
        data.categories.forEach((item) => {
            if (itemSelect === item) {
                setStateProjects(Projects);
            } else if (itemSelect === "Todos") {
                setStateProjects(AllProjects);
            }
        });
    }, [itemSelect, Projects, AllProjects]);

    return (
        <ProjectsContext.Provider value={data.projects}>
            <Nav classPage={"header_projects"} />
            <main className="main_projects">
                <ProjectsTitle title={data.title} text1={data.text1} textSpan={data.textSpan} text2={data.text2} />

                <section className="container_filter">
                    <article className="filtrer">
                        <h2>{data.categoryText}</h2>
                        <ul>{Categories}</ul>
                    </article>

                    <article className="projects_container">{stateProjects}</article>
                </section>
            </main>
            <Footer />
        </ProjectsContext.Provider>
    );
};

export default Proyects;
