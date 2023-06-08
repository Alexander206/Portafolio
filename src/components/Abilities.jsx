import React from "react";

const Tecnology = ({ img }) => {
    return (
        <li>
            <img src={img} alt="tecnology" />
        </li>
    );
};

const Abilities = () => {
    return (
        <section className="abilities">
            <article className="container">
                <article className="abilities_container">
                    <h2>Tecnologías</h2>

                    <ul>
                        <Tecnology />
                        <Tecnology />
                        <Tecnology />
                        <Tecnology />
                        <Tecnology />
                    </ul>
                </article>
            </article>
        </section>
    );
};

export default Abilities;
