import React, { useContext, useState } from "react";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// react icons
import { TbCameraPlus } from "react-icons/tb";

import { EducationContext } from "../../Context/EducationContext";

const Education = () => {
  const [degree, setDegree] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [startData, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // context
  const { education, setEducation } = useContext(EducationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = {
      degree,
      institutionName,
      startData,
      endDate,
    };

    setEducation((prevEducation) => [...prevEducation, newEducation]);
  };

  return (
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
              type="text"
              name="startDate"
              id="startDate"
              placeholder="Start Date"
              value={startData}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.right}>
            <label htmlFor="endDate">End Date</label> <br />
            <input
              type="text"
              name="endDate"
              id="endDate"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Education;
