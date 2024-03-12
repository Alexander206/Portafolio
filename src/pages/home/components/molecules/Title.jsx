import PropTypes from "prop-types";

const Title = ({ title }) => {
    return (
        <article className="title">
            <h2>{title[0]}</h2>

            <span>
                {title[1]} <div className="separator" />
            </span>
        </article>
    );
};

Title.propTypes = {
    title: PropTypes.array.isRequired,
};

export default Title;
