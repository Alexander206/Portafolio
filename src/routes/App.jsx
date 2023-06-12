// Dependencias
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import Proyects from "../pages/Proyects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Principal component
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Proyects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
