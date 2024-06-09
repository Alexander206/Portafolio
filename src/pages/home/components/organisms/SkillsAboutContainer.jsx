// Dependences
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import SkillsItem from "../atoms/SkillsItem";

// Principal component
const SkillsAboutContainer = ({ text, ability, images, imgMe, arrow }) => {
    // Texto de presentación
    const paragraphs = text.map((item, index) => <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>);

    // Lista de componentes de habilidades blandas
    const componentSkills = ability.map((item, index) => {
        return <SkillsItem key={index} icon={item.icon} text={item.text} />;
    });

    // Lista de imagenes de tecnologías
    const componentImages = images.map((item, index) => {
        const img = new URL(`../../../../assets/icon/${item.img}`, import.meta.url).pathname;

        return (
            <img
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
                <img className="principal_img" src={imgMe} alt="Programing image" />
                {componentImages}
            </figure>

            <article>
                <article className="paragraphs">{paragraphs}</article>
                <article className="skills_items">{componentSkills}</article>

                <Link to="/contact" className="clickable">
                    Contácta conmigo <img src={arrow} alt="contact img" />
                </Link>
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
