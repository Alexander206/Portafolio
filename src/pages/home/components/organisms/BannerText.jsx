import PropTypes from "prop-types";

// Components
import Greeting from "../molecules/Greeting";
import Title from "../molecules/Title";
import Buttons from "../molecules/Buttons";

// Principal component
const BannerText = ({ title, greeting, btns }) => {
    return (
        <>
            <article className="text">
                <Title title={title} />

                <Greeting greeting={greeting} />

                <Buttons btns={btns} />
            </article>
        </>
    );
};

BannerText.propTypes = {
    title: PropTypes.array.isRequired,
    greeting: PropTypes.object.isRequired,
    btns: PropTypes.array.isRequired,
};

export default BannerText;
