import React, { useContext, useState } from "react";

// context
import { SummaryContext } from "../../Context/SummaryContext";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

const Summary = () => {
  const [newSummary, setNewSummary] = useState("");

  //  context
  const { summary, setSummary } = useContext(SummaryContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSummary = newSummary;

    setSummary(newSummary);
  };
  return (
    <div className={`${styles.BasicInformation}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.flex}>
          <div className={styles.widthFull}>
            <label htmlFor="Summary">Summary</label> <br />
            <textarea
              type="text"
              name="Summary"
              id="Summary"
              placeholder="Write something about you!"
              value={newSummary}
              onChange={(e) => setNewSummary(e.target.value)}></textarea>
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Summary;
