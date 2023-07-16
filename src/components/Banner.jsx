// Dependences
import React from "react";

// Components
import BannerText from "./organims/BannerText";
import Waves from "./atoms/Waves";

// Component principal
const Banner = ({ welcome, greeting, description, timer, profession }) => {
    return (
        <section className="banner">
            <article className="container">
                <BannerText welcome={welcome} greeting={greeting} description={description} timer={timer} profession={profession} />
            </article>

            <Waves />
        </section>
    );
};

export default Banner;
