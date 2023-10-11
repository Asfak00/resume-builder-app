import React, { useState } from "react";

// react icons
import { BiFontColor, BiSolidDownload, BiSolidEditAlt } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";

// style file
import styles from "../../Sass/SubMenu.module.scss";

// react router dom
import { Link } from "react-router-dom";

// component
import ResumeTemplete from "./Preview/ResumeTemplete";

// context
import { useContext } from "react";
import { SkillContext } from "../../Context/SkillContext";

const SubMenu = ({ setActive, active }) => {
  const [preview, setPreview] = useState(false);

  const { skill } = useContext(SkillContext);

  console.log(skill);

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

        <Link className={styles.download} onClick={() => setActive(3)}>
          <BiSolidDownload size={28} />
          <div className={styles.tooltip3}>Download</div>
        </Link>
      </div>

      {preview && <ResumeTemplete preview={preview} setPreview={setPreview} />}
    </>
  );
};

export default SubMenu;
