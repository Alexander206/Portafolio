// Dependences
import { Link } from "react-router-dom";

// Components
import Greeting from "../molecules/Greeting";

// Principal component
const BannerText = ({ title, description, btn }) => {
    return (
        <>
            <article className="text">
                <Greeting title={title} />

                <p>{description}</p>

                <Link to="/projects" className="btn_curriculum btn_projetcs">
                    <button className="custom-btn">
                        <span>{btn}</span>
                    </button>
                </Link>
            </article>
        </>
    );
};

export default BannerText;
