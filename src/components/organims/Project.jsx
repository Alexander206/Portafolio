import React, { useState } from "react";

import GrabZone from "../atoms/GrabZone";

const Project = ({ img, title, category, date, text, author, location, link, repo }) => {
    img = new URL(`../../assets/proyects/${img}`, import.meta.url).pathname;

    let imgLink;

    const [cursorGrabbed, setCursorGrabbed] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const handleCursorGrabbed = () => {
        setCursorGrabbed(true);
        setTimeout(() => {
            setCursorGrabbed(false);
        }, 1000);
    };

    const handleButtonClicked = () => {
        setGameOver(true);
        setTimeout(() => {
            setGameOver(false);
        }, 4000);
    };

    const screenStyle = cursorGrabbed ? { cursor: "none" } : {};

    const listAuthor = author.map((item, index) => {
        return (
            <div key={index}>
                {item} <br />
            </div>
        );
    });

    if (link.length < 1) {
        imgLink = (
            <div className="container_game">
                <button className="projects_img" onClick={handleButtonClicked}>
                    <img src={img} alt="image project" />
                </button>
                <div className="grab-zone-wrapper">
                    <GrabZone onCursorGrabbed={handleCursorGrabbed} cursorGrabbed={cursorGrabbed} gameOver={gameOver} />
                </div>
            </div>
        );
    } else {
        imgLink = (
            <a className="projects_img" href={link} target="_blank">
                <img src={img} alt="image project" />
            </a>
        );
    }

    const iconLink = link ? (
        <a href={link} target="_blank">
            <ion-icon name="earth-outline"></ion-icon>
        </a>
    ) : (
        <span className="upss">Aún está en construcción</span>
    );

    const iconRepo = repo ? (
        <a href={repo} target="_blank">
            <ion-icon name="logo-github"></ion-icon>
        </a>
    ) : (
        false
    );

    return (
        <article className="projects_link" style={screenStyle}>
            {imgLink}
            <article className="projects_data">
                <span className="projects_category"> {category} </span>
                <a href={link} className="projects_title">
                    {title}
                </a>
                <span className="projects_date"> {date} </span>

                <p className="projects_text">{text}</p>

                <p className="projects_location">{location}</p>

                <span className="projects_author">{listAuthor}</span>
            </article>

            <article className="container_btns">
                {iconLink}

                {iconRepo}
            </article>
        </article>
    );
};

export default Project;
