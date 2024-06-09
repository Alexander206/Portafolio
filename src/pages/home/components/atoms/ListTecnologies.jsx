import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../../library/utils/GetScrollAnimation.jsx";

const ListTecnologies = ({ tecnologies }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const list = tecnologies.map((item, index) => {
        const img = new URL(`../../../../assets/icon/${item.icon}`, import.meta.url).pathname;
        const duration = 0.5 + index;

        return (
            <motion.li
                variants={scrollAnimation}
                key={index}
                custom={{ duration: duration > 7 ? 7 : duration }}
                className="slide"
            >
                <img src={img} alt={`Imagen de la tecnología de ${item.name}`} />
            </motion.li>
        );
    });

    return (
        <>
            {list}
            {list}
        </>
    );
};

ListTecnologies.propTypes = {
    tecnologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListTecnologies;
