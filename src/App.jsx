import React, { useState } from "react";

// react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

// pages components
import HomePage from "./Pages/HomePage";
import CreateResumePage from "./Pages/CreateResumePage";

// reset style file
import "./Sass/_reset.scss";

// context files
import { BasicInfoContext } from "./Context/BasicInfoContext";
import { EducationContext } from "./Context/EducationContext";
import { ExperienceContext } from "./Context/ExperienceContext";
import { SummaryContext } from "./Context/SummaryContext";
import { SkillContext } from "./Context/SkillContext";
import { ProjectsContext } from "./Context/ProjectsContext";
import { LanguageContext } from "./Context/LanguageContext";
import { FontColorContext } from "./Context/FontColorContext";

const App = () => {
  // basic info tab
  const [basicInfo, setBasicInfo] = useState({
    image: "",
    name: "",
    title: "",
    website: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // summary tab
  const [summary, setSummary] = useState("");

  // education tab
  const [education, setEducation] = useState([]);

  // experience tab
  const [experience, setExperience] = useState([]);

  // skill tab
  const [skill, setSkill] = useState([]);

  // project tab
  const [project, setProject] = useState([]);

  // language
  const [language, setLanguage] = useState([]);

  // colors for font
  const [fontColor, setFontColor] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create-resume"
          element={
            <BasicInfoContext.Provider value={{ basicInfo, setBasicInfo }}>
              <EducationContext.Provider value={{ education, setEducation }}>
                <ExperienceContext.Provider
                  value={{ experience, setExperience }}>
                  <SummaryContext.Provider value={{ summary, setSummary }}>
                    <SkillContext.Provider value={{ skill, setSkill }}>
                      <ProjectsContext.Provider value={{ project, setProject }}>
                        <LanguageContext.Provider
                          value={{ language, setLanguage }}>
                          <FontColorContext.Provider
                            value={{ fontColor, setFontColor }}>
                            <CreateResumePage />
                          </FontColorContext.Provider>
                        </LanguageContext.Provider>
                      </ProjectsContext.Provider>
                    </SkillContext.Provider>
                  </SummaryContext.Provider>
                </ExperienceContext.Provider>
              </EducationContext.Provider>
            </BasicInfoContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
