// Dependences
import { Link } from "react-router-dom";

// Components
import Greeting from "../molecules/Greeting";
import Title from "../molecules/Title";

// Principal component
const BannerText = ({ greeting, title, description, btn }) => {
    return (
        <>
            <article className="text">
                <Title title={title} />

                <Greeting greeting={greeting} />

                {/* <p>{description}</p> */}

                <Link to="/projects" className="btn_curriculum btn_projetcs">
                    <button className="custom-btn">
                        <span>{btn}</span>
                        <ion-icon name="code-slash"></ion-icon>
                    </button>
                </Link>
            </article>
        </>
    );
};

export default BannerText;
