import React, { useContext, useState } from "react";

// styles
import styles from "../../Sass/FontColor.module.scss";

// react icons
import { CgColorPicker } from "react-icons/cg";

// context
import { FontColorContext } from "../../Context/FontColorContext";

const FontColor = () => {
  const [color, setColor] = useState("");

  // context
  const { setFontColor } = useContext(FontColorContext);

  // handle multi color
  const handleColorChange = (e) => {
    const colorCode = e.target.value;
    setColor(colorCode);
  };

  setFontColor(color);
  return (
    <div className={styles.font_color}>
      <input
        value="#00a9ff"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset1}`}
        onClick={(e) => setColor(e.target.value)}
      />
      <input
        value="#00b533"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset2}`}
        onClick={(e) => setColor(e.target.value)}
      />
      <input
        value="#ff00ff"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset3}`}
        onClick={(e) => setColor(e.target.value)}
      />
      <input
        value="#ff8c00"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset4}`}
        onClick={(e) => setColor(e.target.value)}
      />
      <input
        value="#00e5ff"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset5}`}
        onClick={(e) => setColor(e.target.value)}
      />
      <input
        value="#ffe900"
        name=""
        id=""
        className={`${styles.preset} ${styles.preset6}`}
        onClick={(e) => setColor(e.target.value)}
      />
      <div className={styles.mutli_color}>
        <input type="color" name="" id="" onChange={handleColorChange} />
        <CgColorPicker className={styles.picker_btn} />
      </div>
    </div>
  );
};

export default FontColor;
