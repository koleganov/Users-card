import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./index.scss";

function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
