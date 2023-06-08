import React, { useState } from "react";

// Componets
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Game from "../components/Game";
import Project from "../components/Project";
import CategoriesComponent from "../components/CategoriesComponent";

// Style
import "../styles/pages/projects.scss";

// Resourses
import data from "../_data/projects.json";

const Proyects = () => {
    const [selectCategory, setSelectCategory] = useState(true);
    const [itemSelect, setItemSelect] = useState("Todos");

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

    const Projects = data.projects.map((item, index) => {
        return (
            <Project
                key={index}
                img={item.img}
                title={item.title}
                category={item.category}
                date={item.date}
                text={item.text}
                author={item.author}
                location={item.location}
                link={item.link}
            />
        );
    });

    return (
        <>
            <LoadingPage />
            <Header />
            <main className="main_projects">
                <section className="title">
                    <h1>{data.title}</h1>
                    <p>
                        {data.text1} <span>{data.textSpan}</span> {data.text2}
                    </p>
                </section>

                <section className="container">
                    <article className="filtrer">
                        <h2>{data.categoryText}</h2>
                        <ul>{Categories}</ul>
                    </article>

                    <article className="projects_container">{Projects}</article>
                </section>
            </main>
            <Game />
            <Footer />
        </>
    );
};

export default Proyects;
