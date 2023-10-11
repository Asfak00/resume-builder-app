import React from "react";

// styles
import styles from "../Sass/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy; All Right Reserved by
        <a href="https://asfakahmed.netlify.app/"> asfak ahmed</a>
      </p>
    </div>
  );
};

export default Footer;
