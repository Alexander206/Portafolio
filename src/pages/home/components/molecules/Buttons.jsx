import { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import getScrollAnimation from "../../../../library/utils/GetScrollAnimation.jsx";

import BtnGeneric from "../../../../library/btns/BtnGeneric";

// Components

const Buttons = ({ btns }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const listButtons = btns.map((item, index) => (
        <BtnGeneric key={index} text={item.text} route={item.url} className="btn_projetcs" icon={item.icon} />
    ));

    return (
        <motion.article variants={scrollAnimation} custom={{ duration: 3 }} className="buttons">
            {listButtons}
        </motion.article>
    );
};

Buttons.propTypes = {
    btns: PropTypes.array.isRequired,
};

export default Buttons;
