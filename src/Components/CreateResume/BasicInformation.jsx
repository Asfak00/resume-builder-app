import React, { useState } from "react";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react icons
import { TbCameraPlus } from "react-icons/tb";

// image
import image from "../../assets/image.jpg";

const BasicInformation = () => {
  const [photoUrl, setPhotoUrl] = useState(null);
  // handleImageChange
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  return (
    <div className={`${styles.BasicInformation}`}>
      <form>
        <div className={`${styles.picture_upload}`}>
          <img src={photoUrl ? photoUrl : image} alt="avatar/image" />
          <label htmlFor="Picture">
            <TbCameraPlus className={styles.add_photo} />
          </label>
          <input
            type="file"
            name="Picture"
            id="Picture"
            className={styles.file_input}
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.flex}>
          <div className={styles.left}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div className={styles.right}>
            <label htmlFor="subtitle">Sub Title</label> <br />
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="Sub Title"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
