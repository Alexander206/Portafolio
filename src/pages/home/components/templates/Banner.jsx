// Components
import BannerText from "../organisms/BannerText";
import BannerImage from "../organisms/BannerImage";
import Waves from "../atoms/Waves";

// Component principal
const Banner = ({ imgLogo, imgProfile, imgSocial, title, greeting, description, btn }) => {
    return (
        <section className="banner">
            <article className="container">
                <img className="banner_logo" src={imgLogo} alt="Logo" />

                <BannerText title={title} greeting={greeting} description={description} btn={btn} />

                <BannerImage imgProfile={imgProfile} imgSocial={imgSocial} />
            </article>

            <Waves />
        </section>
    );
};

export default Banner;
