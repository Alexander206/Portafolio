// Dependencias
import { useEffect, useState } from "react";
import { Routes as RoutesReact, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "../pages/home/Home.jsx";
import Proyects from "../pages/projects/Projects.jsx";
import Services from "../pages/services/Services.jsx";
import Contact from "../pages/contact/Contact.jsx";
import NotFound from "../pages/not_found/NotFound.jsx";

import LoadingPage from "../library/loadingPage/LoadingPage.jsx";

function Routes({ route }) {
    const location = useLocation();
    const [showLoad, setShowLoad] = useState(true);

    useEffect(() => {
        setShowLoad(true);
    }, [location]);

    const handleLoadFinish = () => {
        setShowLoad(false);
    };

    return (
        <>
            {showLoad && <LoadingPage onFinish={handleLoadFinish} />}

            <RoutesReact>
                <Route path={route.home} element={<Home />} />
                <Route path={route.projects} element={<Proyects />} />
                <Route path={route.services} element={<Services />} />
                <Route path={route.contact} element={<Contact />} />
                <Route path={route.notFound} element={<NotFound />} />
            </RoutesReact>
        </>
    );
}

Routes.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Routes;
