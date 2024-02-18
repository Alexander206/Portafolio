// Components
import BannerText from "../organisms/BannerText";
import Waves from "../atoms/Waves";

// Component principal
const Banner = ({ imgProfile, title, description, btn }) => {
    return (
        <section className="banner">
            <article className="container">
                <img className="banner_image" src={imgProfile} alt="Fotografia" />

                <BannerText title={title} description={description} btn={btn} />
            </article>

            <Waves />
        </section>
    );
};

export default Banner;
