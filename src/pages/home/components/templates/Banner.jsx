import { useContext } from "react";
import PropTypes from "prop-types";

import GeneralContext from "../../../../context/GeneralContext";
import Tecnology from "../organisms/Tecnology";
import ScrollAnimationWrapper from "../../../../library/utils/ScrollAnimationWrapper";

// Components
import BannerText from "../organisms/BannerText";
import BannerImage from "../organisms/BannerImage";

const Banner = ({ text, image, tectonologies }) => {
    const { route } = useContext(GeneralContext);
    const logo = new URL(`../../../../assets/icon/${image.logo}`, import.meta.url).pathname;

    return (
        <ScrollAnimationWrapper className="banner">
            <article className="container">
                <a href={route.home}>
                    <img className="banner_logo" src={logo} alt="Logo" />
                </a>

                <BannerText data={text} />
                <BannerImage data={image} />
            </article>

            <Tecnology data={tectonologies} />
        </ScrollAnimationWrapper>
    );
};

Banner.propTypes = {
    text: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
    tectonologies: PropTypes.object.isRequired,
};

export default Banner;
