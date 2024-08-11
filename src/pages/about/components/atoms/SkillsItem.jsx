// Dependences
import { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import getScrollAnimation from "../../../../library/utils/GetScrollAnimation.jsx";

const SkillsItem = ({ index, icon, text }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <motion.article variants={scrollAnimation} custom={{ duration: index + 1 }} className="skills_item">
            <ion-icon name={icon}></ion-icon>
            <span>{text}</span>
        </motion.article>
    );
};

SkillsItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SkillsItem;
