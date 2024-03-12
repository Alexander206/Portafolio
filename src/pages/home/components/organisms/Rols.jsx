import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../molecules/Card";

const Rols = ({ titleRols, btn, cards }) => {
    const cardList = cards.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} tags={item.tags} />
    ));

    return (
        <article className="rols">
            <article className="role_header">
                <h2>{titleRols}</h2>
                <Link to={btn.route}>{btn.text}</Link>
            </article>

            <article className="role_cards">{cardList}</article>
        </article>
    );
};

Rols.propTypes = {
    titleRols: PropTypes.string.isRequired,
    btn: PropTypes.object.isRequired,
    cards: PropTypes.array.isRequired,
};

export default Rols;
