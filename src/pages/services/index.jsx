// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Header from "../../library/header";
import Footer from "../../library/footer";

const Services = () => {
    return (
        <>
            <LoadingPage />
            <Header classPage={"header_home"} />
            Services
            <Footer />
        </>
    );
};

export default Services;
