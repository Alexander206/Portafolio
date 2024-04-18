import { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import SocialLink from "../../../../library/utils/SocialLink";

import getScrollAnimation from "../../../../library/utils/GetScrollAnimation.jsx";

const BannerImage = ({ imgProfile, imgSocial }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const socialElements = imgSocial.map((item, index) => {
        return <SocialLink key={index} icon={item.icon} link={item.url} />;
    });

    return (
        <motion.figure variants={scrollAnimation} className="banner_image">
            <ul className="decoration">
                <div></div>
                <div></div>
                <div></div>
            </ul>

            <img className="picture" src={imgProfile} alt="Fotografia Jeisson Alexander" />

            <ul className="banner_social">{socialElements}</ul>
        </motion.figure>
    );
};

BannerImage.propTypes = {
    imgProfile: PropTypes.string.isRequired,
    imgSocial: PropTypes.array.isRequired,
};

export default BannerImage;
