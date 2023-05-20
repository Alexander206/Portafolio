import React from "react";

const BannerImage = ({ img }) => {
    return (
        <figure className="img">
            <img className="principal_img" src={img} alt="Programing image" />
        </figure>
    );
};

export default BannerImage;
