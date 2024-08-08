// Dependencias
import { useEffect, useState, lazy, Suspense } from "react";
import { Routes as RoutesReact, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Home = lazy(() => import("../pages/home/Home.jsx"));
const Projects = lazy(() => import("../pages/projects/Projects.jsx"));
const Services = lazy(() => import("../pages/services/Services.jsx"));
const Contact = lazy(() => import("../pages/contact/Contact.jsx"));
const NotFound = lazy(() => import("../pages/not_found/NotFound.jsx"));

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
            <Suspense fallback={<></>}>
                <RoutesReact>
                    <Route path={route.home} element={<Home />} />
                    <Route path={route.projects} element={<Projects />} />
                    <Route path={route.services} element={<Services />} />
                    <Route path={route.contact} element={<Contact />} />
                    <Route path={route.notFound} element={<NotFound />} />
                </RoutesReact>
            </Suspense>
        </>
    );
}

Routes.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Routes;
