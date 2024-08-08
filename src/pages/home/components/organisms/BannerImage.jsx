import { useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@nextui-org/react";

import Image from "../../../../library/image/Image.jsx";
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

            <Image className="picture" src={data.profile} alt="Fotografia de Jeisson Alexander" />

            <ul className="banner_social">{socialElements}</ul>
        </motion.figure>
    );
};

BannerImage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BannerImage;
