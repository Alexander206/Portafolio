import PropTypes from "prop-types";

const SkillsItem = ({ icon, text }) => (
    <article className="skills_item">
        <ion-icon name={icon}></ion-icon>
        <span>{text}</span>
    </article>
);

SkillsItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SkillsItem;
