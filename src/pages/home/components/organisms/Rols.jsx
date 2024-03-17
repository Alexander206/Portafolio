import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../molecules/Card";
import BtnGeneric from "../../../../library/btns/BtnGeneric";

const Rols = ({ titleRols, btn, cards }) => {
    const cardList = cards.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} tags={item.tags} />
    ));

    return (
        <article className="rols" id="rols">
            <article className="role_header">
                <h2>{titleRols}</h2>
                <BtnGeneric route={btn.route} text={btn.text} icon="chevron-forward-outline" />
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
