// Dependencias
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

/* Context */
import GeneralContext from "../context/GeneralContext";

// Componentes
import Cursor from "../library/cursor/Cursor.jsx";
import Splash from "../library/splash/Splash.jsx";

// Data
import data from "../_data/general.json";
import Routes from "./Routes.jsx";

// Principal component
const App = () => {
    const { social, route } = data;

    const [cursorActive, setCursorActive] = useState(false);
    const [theme, setTheme] = useState("light");
    const [firstLoad, setFirstLoad] = useState(true);

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
                {firstLoad && <Splash onFinish={() => setFirstLoad(false)} />}
                <Cursor cursorActive={cursorActive} setCursorActive={setCursorActive} />

                <Routes route={route} />
            </BrowserRouter>
        </GeneralContext.Provider>
    );
};

export default App;
