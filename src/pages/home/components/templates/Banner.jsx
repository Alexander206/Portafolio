// Components
import BannerText from "../organisms/BannerText";
import Waves from "../atoms/Waves";

// Component principal
const Banner = ({ imgProfile, title, description, btn }) => {
    return (
        <section className="banner">
            <article className="container">
                <BannerText title={title} description={description} btn={btn} />

                <img className="banner_image" src={imgProfile} alt="Fotografia" />
            </article>

            <Waves />
        </section>
    );
};

export default Banner;
