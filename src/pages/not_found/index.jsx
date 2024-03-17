// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage/";
import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/";

// Principal component
const NotFound = () => {
    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />
            Services
            <Footer />
        </>
    );
};

export default NotFound;
