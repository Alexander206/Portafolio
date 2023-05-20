// Dependences
import React from "react";
import { Link } from "react-router-dom";

// Components
import Greeting from "./atoms/Greeting";
import Interactive from "./Interactive";

// Styles
import "../styles/components/banner.scss";

// Resources
import imgText from "../assets/icon/header-img.svg";
import imgbanner from "../assets/me.jpg";

// Component principal
const Banner = ({ welcome, greeting, description, timer, profession }) => {
    return (
        <section className="banner">
            <article className="container">
                <article className="text">
                    <Greeting greeting={greeting} timer={timer} profession={profession} />

                    <p>{description}</p>

                    <Link to="/projects" className="btn_projects">
                        <button className="custom-btn btn-8">
                            <span>{welcome}</span>
                        </button>
                    </Link>
                </article>
            </article>

            <Interactive />
        </section>
    );
};

export default Banner;
