import React from "react";
import Hello from "./Component/Hello";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Projects from "./Component/Projects";
import CV from "./Component/MyCV";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />¢
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
