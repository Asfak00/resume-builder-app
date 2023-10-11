import React, { useContext, useState } from "react";

// context
import { SummaryContext } from "../../Context/SummaryContext";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Summary = () => {
  const [newSummary, setNewSummary] = useState("");

  //  context
  const { summary, setSummary } = useContext(SummaryContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const makeNewSummary = newSummary;

    setSummary(makeNewSummary);
    toast.success("Summary Added Successfully!");
  };
  return (
    <>
      <div className={`${styles.BasicInformation}`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.flex}>
            <div className={styles.widthFull}>
              <label htmlFor="Summary">Summary</label> <br />
              <textarea
                type="text"
                name="Summary"
                id="Summary"
                required
                placeholder="Write something about you!"
                value={newSummary}
                onChange={(e) => setNewSummary(e.target.value)}></textarea>
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

export default Summary;
