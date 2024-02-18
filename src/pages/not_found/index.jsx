// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Header from "../../library/header";
import Footer from "../../library/footer";

// Principal component
const NotFound = () => {
    return (
        <>
            <LoadingPage />
            <Header classPage={"header_home"} />
            Services
            <Footer />
        </>
    );
};

export default NotFound;
