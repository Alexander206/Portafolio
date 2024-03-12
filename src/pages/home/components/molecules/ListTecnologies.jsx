import PropTypes from "prop-types";

const ListTecnologies = ({ pathImage, tecnologies }) => {
    const list = tecnologies.map((item, index) => {
        const img = pathImage(item);

        return (
            <li key={index} className="slide">
                <img src={img} alt={`Imagen de la tecnología de ${item}`} />
            </li>
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
    pathImage: PropTypes.func.isRequired,
    tecnologies: PropTypes.array.isRequired,
};

export default ListTecnologies;
