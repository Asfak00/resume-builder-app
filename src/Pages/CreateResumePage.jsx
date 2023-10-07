import React, { useState } from "react";

// components
import Navbar from "../Components/Home/Navbar";
import SubMenu from "../Components/CreateResume/SubMenu";
import FontColor from "../Components/CreateResume/FontColor";
import EditForm from "../Components/CreateResume/EditForm";

const CreateResumePage = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar />
      <SubMenu setActive={setActive} active={active} />
      {active && <FontColor />}

      <EditForm setFontColorActive={setActive} />
    </>
  );
};

export default CreateResumePage;
