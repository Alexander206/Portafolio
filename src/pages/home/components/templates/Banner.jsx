// Components
import BannerText from "../organisms/BannerText";
import BannerImage from "../organisms/BannerImage";
import Waves from "../atoms/Waves";

// Component principal
const Banner = ({ imgLogo, imgProfile, imgSocial, title, greeting, description, btns }) => {
    return (
        <section className="banner">
            <article className="container">
                <img className="banner_logo" src={imgLogo} alt="Logo" />

                <BannerText title={title} greeting={greeting} description={description} btns={btns} />

                <BannerImage imgProfile={imgProfile} imgSocial={imgSocial} />
            </article>

            <Waves />
        </section>
    );
};

export default Banner;
