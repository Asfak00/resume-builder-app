import React, { useContext, useState } from "react";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react icons
import { TbCameraPlus } from "react-icons/tb";

// image
import image from "../../assets/image.jpg";

// context file
import { BasicInfoContext } from "../../Context/BasicInfoContext";

const BasicInformation = () => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  // handleImageChange
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  // context
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBasicInfo = {
      image: photoUrl,
      name,
      title,
      website,
      email,
      address,
      phoneNumber,
    };

    setBasicInfo(newBasicInfo);
  };

  return (
    <div className={`${styles.BasicInformation}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.right}>
            <label htmlFor="subtitle"> Title</label> <br />
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="Sub Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.left}>
            <label htmlFor="Website">Website</label>
            <br />
            <input
              type="text"
              name="Website"
              id="Website"
              placeholder="Website Address"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className={styles.right}>
            <label htmlFor="Email">Email</label> <br />
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.left}>
            <label htmlFor="number">Phone Number</label>
            <br />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className={styles.right}>
            <label htmlFor="Address">Address</label> <br />
            <input
              type="text"
              name="Address"
              id="Address"
              placeholder="Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default BasicInformation;
