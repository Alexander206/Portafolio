import { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import SocialLink from "../../../../library/utils/SocialLink";

import getScrollAnimation from "../../../../library/utils/GetScrollAnimation.jsx";

const BannerImage = ({ data }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const socialElements = data.social.map((item, index) => {
        const icon = new URL(`../../../../assets/icon/${item.icon}`, import.meta.url).pathname;
        return <SocialLink key={index} icon={icon} link={item.url} />;
    });

    return (
        <motion.figure variants={scrollAnimation} className="banner_image">
            <ul className="decoration">
                <div></div>
                <div></div>
                <div></div>
            </ul>

            <img className="picture" src={data.profile} alt="Fotografia Jeisson Alexander" />

            <ul className="banner_social">{socialElements}</ul>
        </motion.figure>
    );
};

BannerImage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BannerImage;
