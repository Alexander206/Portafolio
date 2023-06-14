// Dependences
import React from "react";
import { Link } from "react-router-dom";

// Components
import Greeting from "../atoms/Greeting";

// Principal component
const BannerText = ({ welcome, greeting, description, timer, profession }) => {
    return (
        <>
            <article className="text">
                <Greeting greeting={greeting} timer={timer} profession={profession} />

                <p>{description}</p>

                <Link to="/projects" className="btn_curriculum">
                    <button className="custom-btn btn-8">
                        <span>{welcome}</span>
                    </button>
                </Link>
            </article>
        </>
    );
};

export default BannerText;
