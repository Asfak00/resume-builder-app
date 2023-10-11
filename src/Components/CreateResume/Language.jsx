import React, { useContext, useState } from "react";

// context
import { LanguageContext } from "../../Context/LanguageContext";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Language = () => {
  const [newLanguage, setNewLanguage] = useState("");

  //  context
  const { language, setLanguage } = useContext(LanguageContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const makeLanguage = newLanguage;
    setLanguage((prevLang) => [...prevLang, makeLanguage]);
    toast.success("Language Added Successfully!");
  };
  return (
    <>
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default Language;
