import React, { useContext, useState } from "react";

// context
import { SkillContext } from "../../Context/SkillContext";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

const Skill = () => {
  const [newSkill, setNewSkill] = useState("");

  // context
  const { skill, setSkill } = useContext(SkillContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const makeNewSkill = newSkill;

    setSkill((prev) => [...prev, makeNewSkill]);
  };

  console.log("from skill tab", skill);
  return (
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
  );
};

export default Skill;
