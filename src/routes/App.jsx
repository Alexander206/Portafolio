// Dependencias
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/home";
import About from "../pages/about";
import Proyects from "../pages/projects";
import Services from "../pages/services";
import Contact from "../pages/contact";
import NotFound from "../pages/not_found";

// Principal component
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Proyects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
