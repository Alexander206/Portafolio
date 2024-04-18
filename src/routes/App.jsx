// Dependencias
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Context */
import GeneralContext from "../context/GeneralContext";

// Componentes
import Cursor from "../library/cursor/Cursor.jsx";

import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Proyects from "../pages/projects/Projects.jsx";
import Services from "../pages/services/Services.jsx";
import Contact from "../pages/contact/Contact.jsx";
import NotFound from "../pages/not_found/NotFound.jsx";

// Data
import data from "../_data/general.json";

// Principal component
function App() {
    const { social, route } = data;

    const [cursorActive, setCursorActive] = useState(false);
    const [theme, setTheme] = useState("light");

    const activeCursor = () => {
        setCursorActive(true);
    };

    const inactiveCursor = () => {
        setCursorActive(false);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <GeneralContext.Provider value={{ social, route, inactiveCursor, activeCursor, theme, toggleTheme }}>
            <BrowserRouter>
                <Cursor cursorActive={cursorActive} setCursorActive={setCursorActive} />

                <Routes>
                    <Route path={route.home} element={<Home />} />
                    <Route path={route.about} element={<About />} />
                    <Route path={route.projects} element={<Proyects />} />
                    <Route path={route.services} element={<Services />} />
                    <Route path={route.contact} element={<Contact />} />
                    <Route path={route.notFound} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </GeneralContext.Provider>
    );
}

export default App;
