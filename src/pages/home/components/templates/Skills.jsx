// Dependences
import PropTypes from "prop-types";

import ScrollAnimationWrapper from "../../../../library/utils/ScrollAnimationWrapper";

// Components
import SkillsAboutContainer from "../organisms/SkillsAboutContainer";
import BtnGeneric from "../../../../library/btns/BtnGeneric";

// Principal component
const Skills = ({ text, ability, images, imgMe, arrow, btnlink }) => (
    <ScrollAnimationWrapper className="skills" id="skills">
        <article className="container">
            <h2>Sobre mi</h2>
            <SkillsAboutContainer text={text} ability={ability} images={images} imgMe={imgMe} arrow={arrow} />
            <BtnGeneric text={btnlink.text} url={btnlink.cvUrl} target="_blank" variant={true} />
        </article>
    </ScrollAnimationWrapper>
);

Skills.propTypes = {
    text: PropTypes.array.isRequired,
    ability: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    imgMe: PropTypes.string.isRequired,
    arrow: PropTypes.string.isRequired,
    btnlink: PropTypes.object.isRequired,
};

export default Skills;
