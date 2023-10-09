import React from "react";

// react icons
import { MdOutlineTipsAndUpdates } from "react-icons/md";

// style
import styles from "../../Sass/Tips.module.scss";

const Tips = () => {
  return (
    <div className={styles.tipsContainer}>
      <MdOutlineTipsAndUpdates className={styles.icon} />
      <p>
        To get a good preview of the resume you can fill in all the input fields
        and then view the preview or download your resume.
      </p>
    </div>
  );
};

export default Tips;
