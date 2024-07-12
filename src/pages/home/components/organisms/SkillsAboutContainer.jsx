// Dependences
import { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import getScrollAnimation from "../../../../library/utils/GetScrollAnimation.jsx";

// Components
import SkillsItem from "../atoms/SkillsItem";

// Principal component
const SkillsAboutContainer = ({ text, ability, images, imgMe, arrow }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    // Texto de presentación
    const paragraphs = text.map((item, index) => <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>);

    // Lista de componentes de habilidades blandas
    const componentSkills = ability.map((item, index) => {
        return <SkillsItem key={index} index={index} icon={item.icon} text={item.text} />;
    });

    // Lista de imagenes de tecnologías
    const componentImages = images.map((item, index) => {
        const img = new URL(`../../../../assets/icon/${item.img}`, import.meta.url).pathname;

        return (
            <motion.img
                variants={scrollAnimation}
                custom={{ duration: 2 }}
                key={index}
                className={`${item.id}_img animate__animated animate__zoomIn`}
                src={img}
                alt="Programing image"
            />
        );
    });

    return (
        <article className="text">
            <figure className="img">
                <motion.img
                    variants={scrollAnimation}
                    custom={{ duration: 2 }}
                    className="principal_img"
                    src={imgMe}
                    alt="Programing image"
                />
                {componentImages}
            </figure>

            <article>
                <motion.article variants={scrollAnimation} custom={{ duration: 1 }} className="paragraphs">
                    {paragraphs}
                </motion.article>

                <article className="skills_items">{componentSkills}</article>

                <motion.article variants={scrollAnimation} custom={{ duration: 2 }}>
                    <Link to="/contact" className="clickable">
                        Contácta conmigo <img src={arrow} alt="contact img" />
                    </Link>
                </motion.article>
            </article>
        </article>
    );
};

SkillsAboutContainer.propTypes = {
    text: PropTypes.array.isRequired,
    ability: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    imgMe: PropTypes.string.isRequired,
    arrow: PropTypes.string.isRequired,
};

export default SkillsAboutContainer;
