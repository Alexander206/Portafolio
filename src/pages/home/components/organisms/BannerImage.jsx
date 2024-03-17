import PropTypes from "prop-types";
import SocialLink from "../../../../library/utils/SocialLink";

const BannerImage = ({ imgProfile, imgSocial }) => {
    const socialElements = imgSocial.map((item, index) => {
        return <SocialLink key={index} icon={item.icon} link={item.url} />;
    });

    return (
        <figure className="banner_image">
            <ul className="decoration">
                <div></div>
                <div></div>
                <div></div>
            </ul>

            <img className="picture" src={imgProfile} alt="Fotografia Jeisson Alexander" />

            <ul className="banner_social">{socialElements}</ul>
        </figure>
    );
};

BannerImage.propTypes = {
    imgProfile: PropTypes.string.isRequired,
    imgSocial: PropTypes.array.isRequired,
};

export default BannerImage;
