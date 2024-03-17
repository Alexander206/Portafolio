import React from "react";
import PropTypes from "prop-types";

import Tag from "../atoms/Tag";

const Card = ({ img, title, description, tags }) => {
    const listTags = tags.map((item, index) => <Tag key={index} text={item} />);

    return (
        <div className="card_contend">
            <figure className="card_image">
                <img src={img} alt="Rol image" />
            </figure>

            <div className="card_body">
                <h4>{title}</h4>
                <p>{description}</p>

                <div className="tags">{listTags}</div>
            </div>
        </div>
    );
};

Card.propTypes = {};

export default Card;
