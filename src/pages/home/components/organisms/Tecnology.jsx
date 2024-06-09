import PropTypes from "prop-types";

// Components
import AccordionTecnologies from "../molecules/AccordionTecnologies";

const Tecnology = ({ data }) => {
    const tecnologiesArray = Object.keys(data.list).map((key) => ({
        name: key,
        icon: data.list[key],
    }));

    return (
        <article className="tecnology" id="tecnologyID">
            <h3>{data.title}</h3>
            <AccordionTecnologies tecnologies={tecnologiesArray} />
        </article>
    );
};

Tecnology.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Tecnology;
