import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./sass/styles.scss";

//--    pages
import Home from "./pages/home";
import About from "./pages/about";

//--    components
import Header from "./components/header";

const App = () => {
  return (
    <HashRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
