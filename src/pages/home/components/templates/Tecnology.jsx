import PropTypes from "prop-types";

// Components
import AccordionTecnologies from "../organisms/AccordionTecnologies";
import Rols from "../organisms/Rols";

const Tecnology = ({ title, pathImage, tecnologies, titleRols, btn, cards }) => {
    return (
        <section className="tecnology" id="tecnologyID">
            <h3>{title}</h3>

            <AccordionTecnologies pathImage={pathImage} tecnologies={tecnologies} />

            <Rols titleRols={titleRols} btn={btn} cards={cards} />
        </section>
    );
};

Tecnology.propTypes = {
    title: PropTypes.string.isRequired,
    pathImage: PropTypes.func.isRequired,
    tecnologies: PropTypes.array.isRequired,
    titleRols: PropTypes.string.isRequired,
    btn: PropTypes.object.isRequired,
    cards: PropTypes.array.isRequired,
};

export default Tecnology;
