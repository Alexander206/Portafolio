// Components
import Greeting from "../molecules/Greeting";
import Title from "../molecules/Title";
import Buttons from "../molecules/Buttons";

// Principal component
const BannerText = ({ greeting, title, description, btns }) => {
    return (
        <>
            <article className="text">
                <Title title={title} />

                <Greeting greeting={greeting} />

                {/* <p>{description}</p> */}

                <Buttons btns={btns} />
            </article>
        </>
    );
};

export default BannerText;
