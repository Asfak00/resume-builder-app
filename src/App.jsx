import React from "react";

// react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

// pages components
import HomePage from "./Pages/HomePage";
import CreateResumePage from "./Pages/CreateResumePage";

// reset style file
import "./Sass/_reset.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-resume" element={<CreateResumePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
