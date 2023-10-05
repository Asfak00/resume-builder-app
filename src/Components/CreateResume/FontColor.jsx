import React from "react";

// styles
import styles from "../../Sass/FontColor.module.scss";

// react icons
import { CgColorPicker } from "react-icons/cg";

const FontColor = () => {
  const handleColorChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.font_color}>
      <input
        value="#00a9ff"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset1}`}
      />
      <input
        value="#00b533"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset2}`}
      />
      <input
        value="#ff00ff"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset3}`}
      />
      <input
        value="#ff8c00"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset4}`}
      />
      <input
        value="#00e5ff"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset5}`}
      />
      <input
        value="#ffe900"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset6}`}
      />
      <div className={styles.mutli_color}>
        <input type="color" name="" id="" onChange={handleColorChange} />
        <CgColorPicker className={styles.picker_btn} />
      </div>
    </div>
  );
};

export default FontColor;
