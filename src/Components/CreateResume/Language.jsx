import React, { useContext, useState } from "react";

// context
import { LanguageContext } from "../../Context/LanguageContext";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

const Language = () => {
  const [newLanguage, setNewLanguage] = useState("");

  //  context
  const { language, setLanguage } = useContext(LanguageContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const makeLanguage = newLanguage;
    setLanguage((prevLang) => [...prevLang, makeLanguage]);
  };
  return (
    <div className={`${styles.BasicInformation}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.flex}>
          <div className={styles.widthFull}>
            <label htmlFor="language">Add Language</label> <br />
            <input
              type="text"
              name="language"
              id="language"
              required
              placeholder="Add Language"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Language;
