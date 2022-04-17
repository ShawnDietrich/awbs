import "./App.css";
import Header from "./Sections/Header/header";
import Home from "./pages/Home";
import Footer from "./Sections/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Contact from "./pages/Contact";
import GiftCert from "./pages/GiftCert";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Contact />} />
        <Route path="/gift" element={<GiftCert/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
