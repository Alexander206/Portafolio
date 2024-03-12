import PropTypes from "prop-types";

// Components
import BannerText from "../organisms/BannerText";
import BannerImage from "../organisms/BannerImage";
import Waves from "../atoms/Waves";

const Banner = ({ imgLogo, imgProfile, imgSocial, title, greeting, btns }) => {
    return (
        <section className="banner">
            <article className="container">
                <img className="banner_logo" src={imgLogo} alt="Logo" />

                <BannerText title={title} greeting={greeting} btns={btns} />

                <BannerImage imgProfile={imgProfile} imgSocial={imgSocial} />
            </article>

            <Waves />
        </section>
    );
};

Banner.propTypes = {
    imgLogo: PropTypes.string.isRequired,
    imgProfile: PropTypes.string.isRequired,
    imgSocial: PropTypes.array.isRequired,
    title: PropTypes.array.isRequired,
    greeting: PropTypes.object.isRequired,
    btns: PropTypes.array.isRequired,
};

export default Banner;
