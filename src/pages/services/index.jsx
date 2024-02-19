// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";

const Services = () => {
    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />
            Services
            <Footer />
        </>
    );
};

export default Services;
