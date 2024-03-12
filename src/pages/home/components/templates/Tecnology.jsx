import PropTypes from "prop-types";

// Components
import AccordionTecnologies from "../organisms/AccordionTecnologies";

const Tecnology = ({ title, pathImage, tecnologies }) => {
    return (
        <section className="tecnology" id="tecnologyID">
            <h3>{title}</h3>

            <AccordionTecnologies pathImage={pathImage} tecnologies={tecnologies} />
        </section>
    );
};

Tecnology.propTypes = {
    title: PropTypes.string.isRequired,
    pathImage: PropTypes.func.isRequired,
    tecnologies: PropTypes.array.isRequired,
};

export default Tecnology;
