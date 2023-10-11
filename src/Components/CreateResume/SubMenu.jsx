import React, { useContext, useState } from "react";

// react icons
import { BiFontColor, BiSolidDownload, BiSolidEditAlt } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";

// style file
import styles from "../../Sass/SubMenu.module.scss";

// react router dom
import { Link } from "react-router-dom";

// component
import ResumeTemplete from "./Preview/ResumeTemplete";
import { FontColorContext } from "../../Context/FontColorContext";
import { EducationContext } from "../../Context/EducationContext";

const SubMenu = ({ setActive, active }) => {
  const [preview, setPreview] = useState(false);

  const { education } = useContext(EducationContext);
  console.log(education);

  return (
    <>
      <div className={styles.sidebar}>
        <Link className={styles.font_color} onClick={() => setPreview(true)}>
          <IoMdEye size={28} />
          <div className={styles.tooltip2}>View Resume</div>
        </Link>

        <Link className={styles.font_color} onClick={() => setActive(!active)}>
          <BiFontColor size={32} />
          <div className={styles.tooltip1}>Font Color</div>
        </Link>
      </div>

      {preview && <ResumeTemplete preview={preview} setPreview={setPreview} />}
    </>
  );
};

export default SubMenu;
