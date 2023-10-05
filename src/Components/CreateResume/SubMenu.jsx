import React from "react";

// react icons
import { BiFontColor, BiSolidDownload, BiSolidEditAlt } from "react-icons/bi";

// style file
import styles from "../../Sass/SubMenu.module.scss";

// react router dom
import { Link } from "react-router-dom";

const SubMenu = ({ setActive, active }) => {
  return (
    <div className={styles.sidebar}>
      <Link className={styles.font_color} onClick={() => setActive(!active)}>
        <BiFontColor size={32} />
        <div className={styles.tooltip1}>Font Color</div>
      </Link>

      <Link className={styles.download} onClick={() => setActive(3)}>
        <BiSolidDownload />
        <div className={styles.tooltip3}>Download</div>
      </Link>
    </div>
  );
};

export default SubMenu;
