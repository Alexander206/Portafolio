// Dependences
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Greeting from "./atoms/Greeting";

// Estyles
import "../styles/pages/home.scss";

// Resources
import img from "../assets/me.svg";
import light from "../assets/light.svg";
import imgHtml from "../assets/icon/HTML.svg";
import imgCss from "../assets/icon/CSS.svg";
import imgJavaScript from "../assets/icon/javaScript.svg";
import imgReact from "../assets/icon/react.svg";
import imgNode from "../assets/icon/node.svg";
import headerImg from "../assets/icon/header-img.svg";

const Banner = ({ welcome, greeting, description, timer, profession }) => {
    return (
        <section className="banner">
            <article className="container">
                <article className="text">
                    <figure className="light">
                        <img src={light} alt="ligth" />
                        <img src={light} alt="ligth" />
                        <img src={light} alt="ligth" />
                    </figure>

                    <span>{welcome}</span>

                    <Greeting greeting={greeting} timer={timer} profession={profession} />

                    <p>{description}</p>

                    <Link to="/#contact">
                        Contácta conmigo <img src={headerImg} />
                    </Link>
                </article>

                <figure className="img">
                    <img className="principal_img" src={img} alt="Programing image" />

                    <img className="html_img animate__animated animate__zoomIn" src={imgHtml} alt="Programing image" />
                    <img className="css_img animate__animated animate__zoomIn" src={imgCss} alt="Programing image" />
                    <img
                        className="javaScript_img animate__animated animate__zoomIn"
                        src={imgJavaScript}
                        alt="Programing image"
                    />
                    <img
                        className="react_img animate__animated animate__zoomIn"
                        src={imgReact}
                        alt="Programing image"
                    />
                    <img className="node_img animate__animated animate__zoomIn" src={imgNode} alt="Programing image" />
                </figure>
            </article>
        </section>
    );
};

export default Banner;
