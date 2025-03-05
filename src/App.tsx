import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/common/WhatsAppButton";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WorkWithUs from "./pages/WorkWithUs";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobrenos" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/trabalheconosco" element={<WorkWithUs />} />
      </Routes>
      {/* WhatsApp Button aparece em todas as páginas */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
