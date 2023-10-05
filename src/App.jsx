import React from "react";

// react router dom
import { Routes, Route } from "react-router-dom";

// pages components
import HomePage from "./Pages/HomePage";
import CreateResumePage from "./Pages/CreateResumePage";

// reset style file
import "./Sass/_reset.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateResumePage />} />
      </Routes>
    </>
  );
};

export default App;
