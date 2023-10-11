import React, { useContext, useState } from "react";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react icons
import { TbCameraPlus } from "react-icons/tb";

// context
import { EducationContext } from "../../Context/EducationContext";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Education = () => {
  const [degree, setDegree] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [startData, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [present, setPresent] = useState(false);

  // context
  const { setEducation } = useContext(EducationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = {
      degree,
      institutionName,
      startData,
      endDate,
      present,
    };

    setEducation((prevEducation) => [...prevEducation, newEducation]);
    toast.success("Education Added Successfully!");
  };

  return (
    <>
      <div className={`${styles.BasicInformation}`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <label htmlFor="Degree">Degree</label>
              <br />
              <input
                type="text"
                name="Degree"
                id="Degree"
                required
                placeholder="Education Degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
            <div className={styles.right}>
              <label htmlFor="institutionName">Institution Name</label> <br />
              <input
                type="text"
                name="institutionName"
                id="institutionName"
                required
                placeholder="Institution Name"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.left}>
              <label htmlFor="startDate">Start Date</label>
              <br />
              <input
                type="date"
                name="startDate"
                id="startDate"
                required
                placeholder="Start Date"
                value={startData}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className={styles.right}>
              <label htmlFor="endDate">End Date</label> <br />
              <input
                type="date"
                name="endDate"
                id="endDate"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <div className={styles.presentDiv}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onClick={() => setPresent(!present)}
                />
                <label htmlFor="checkbox">Present</label>
              </div>
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

export default Education;
