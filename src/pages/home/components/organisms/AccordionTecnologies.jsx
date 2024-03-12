import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

// Components
import ListTecnologies from "../molecules/ListTecnologies";

const TECHNOLOGY_WIDTH = 180;
const ANIMATION_DURATION = 4;

const generateScrollAnimation = (length) => keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-${length}px);
    }
`;

const SlideTrack = styled.ul`
    list-style: none;
    display: flex;
    width: ${(props) => TECHNOLOGY_WIDTH * props.$tecnologies.length * 2}px;
    animation: ${(props) => generateScrollAnimation(props.$tecnologies.length * TECHNOLOGY_WIDTH)}
        ${(props) => props.$tecnologies.length * ANIMATION_DURATION}s linear infinite;
`;

const AccordionTecnologies = ({ pathImage, tecnologies }) => {
    return (
        <article className="slider">
            <SlideTrack $tecnologies={tecnologies}>
                <ListTecnologies pathImage={pathImage} tecnologies={tecnologies} />
            </SlideTrack>
        </article>
    );
};

AccordionTecnologies.propTypes = {
    pathImage: PropTypes.func.isRequired,
    tecnologies: PropTypes.array.isRequired,
};

export default AccordionTecnologies;
