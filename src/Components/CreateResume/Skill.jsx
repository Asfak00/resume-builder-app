import React, { useContext, useState } from "react";

// context
import { SkillContext } from "../../Context/SkillContext";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Skill = () => {
  const [newSkill, setNewSkill] = useState("");

  // context
  const { skill, setSkill } = useContext(SkillContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const makeNewSkill = newSkill;

    setSkill((prev) => [...prev, makeNewSkill]);
    toast.success("Skill Added Successfully!");
  };

  return (
    <>
      <div className={`${styles.BasicInformation}`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.flex}>
            <div className={styles.widthFull}>
              <label htmlFor="Skill">Add Skill</label> <br />
              <input
                type="text"
                name="Skill"
                id="Skill"
                required
                placeholder="Add Skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
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

export default Skill;
