import PropTypes from "prop-types";

const SocialLink = ({ icon, link }) => (
    <li>
        <a className="clickable" href={link} target="_blank" aria-label="icon social">
            <img src={icon} alt="icon social" />
        </a>
    </li>
);

SocialLink.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialLink;
