import React, { useContext, useState } from "react";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// context
import { ExperienceContext } from "../../Context/ExperienceContext";

const Experience = () => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startData, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [Description, setDescription] = useState("");

  // context
  const { experience, setExperience } = useContext(ExperienceContext);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newExperience = {
      companyName: company,
      jobTitle,
      startData,
      endDate,
      Description,
    };

    setExperience((prevExperience) => [...prevExperience, newExperience]);
  };
  return (
    <div className={`${styles.BasicInformation}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <label htmlFor="company">Company Name</label>
            <br />
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className={styles.right}>
            <label htmlFor="jobTitle">Job Title</label> <br />
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
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

        <div className={styles.flex}>
          <div className={styles.widthFull}>
            <label htmlFor="Description">Description</label> <br />
            <textarea
              type="text"
              name="Description"
              id="Description"
              placeholder="Enter details about what you did in your previous jobs"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Experience;
