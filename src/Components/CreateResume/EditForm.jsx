import React, { useState } from "react";

// styles
import styles from "../../Sass/EditForm.module.scss";
import BasicInformation from "./BasicInformation";

const EditForm = ({ setFontColorActive }) => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div
        className={styles.form_navigation}
        onClick={() => setFontColorActive(false)}>
        <div
          className={`${styles.tab} ${active === 1 && styles.active}`}
          onClick={() => setActive(1)}>
          <h3>Basic Information</h3>
        </div>
        <div
          className={`${styles.tab} ${active === 2 && styles.active}`}
          onClick={() => setActive(2)}>
          <h3>Education</h3>
        </div>
        <div
          className={`${styles.tab} ${active === 3 && styles.active}`}
          onClick={() => setActive(3)}>
          <h3>Work Experience</h3>
        </div>
        <div
          className={`${styles.tab} ${active === 4 && styles.active}`}
          onClick={() => setActive(4)}>
          <h3>Skill</h3>
        </div>
        <div
          className={`${styles.tab} ${active === 5 && styles.active}`}
          onClick={() => setActive(5)}>
          <h3>Projects</h3>
        </div>
        <div
          className={`${styles.tab} ${active === 6 && styles.active}`}
          onClick={() => setActive(6)}>
          <h3>Achievements</h3>
        </div>
        <div
          className={`${styles.tab} ${active === 7 && styles.active}`}
          onClick={() => setActive(7)}>
          <h3>Others</h3>
        </div>
      </div>

      {active === 1 && <BasicInformation />}
    </>
  );
};

export default EditForm;
