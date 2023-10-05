import React from "react";

// style file
import styles from "../../Sass/Hero.module.scss";

// banner image
import banner from "../../assets/banner.png";

// react icons
import { MdOutlineLibraryAdd } from "react-icons/md";

const Hero = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_left}>
        <h1>Resume Builder</h1>
        <p>
          With the Resume Builder app, you can create your resume very easily.
          And you can download that resume for free. You can set the color of
          your choice for the font add photos if you want and remove them if you
          don't want. So why delay try the app now.
        </p>
        <button>
          <MdOutlineLibraryAdd size={15} />
          create resume
        </button>
      </div>
      <img src={banner} alt="banner/image" />
    </div>
  );
};

export default Hero;
