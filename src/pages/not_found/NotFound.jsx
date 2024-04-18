import "./notFound.scss";

import LoadingPage from "../../library/loadingPage/LoadingPage.jsx";
import Nav from "../../library/nav/Nav.jsx";
import Footer from "../../library/footer/Footer.jsx";

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
