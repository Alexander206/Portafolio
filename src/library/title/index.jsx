import PropTypes from "prop-types";

import "./styles.scss";

const Title = ({ title, text1, textSpan, text2 }) => {
    return (
        <section className="title">
            <h1>{title}</h1>

            <div className="separator"></div>

            <p>
                {text1} <span>{textSpan}</span> {text2}
            </p>
        </section>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    textSpan: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
};

export default Title;
