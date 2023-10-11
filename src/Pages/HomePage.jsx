import React, { useContext } from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default HomePage;
