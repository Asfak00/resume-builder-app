import React, { useState } from "react";

// components
import Navbar from "../Components/Home/Navbar";
import SubMenu from "../Components/CreateResume/SubMenu";
import FontColor from "../Components/CreateResume/FontColor";
import EditForm from "../Components/CreateResume/EditForm";
import Tips from "../Components/CreateResume/Tips";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { BasicInfoContext } from "../Context/BasicInfoContext";

const CreateResumePage = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar />
      <SubMenu setActive={setActive} active={active} />
      <Tips />
      {active && <FontColor />}

      <EditForm setFontColorActive={setActive} />
      <Footer />
    </>
  );
};

export default CreateResumePage;
