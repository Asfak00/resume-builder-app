import React, { useContext, useState } from "react";

// styles
import styles from "../../Sass/BasicInformation.module.scss";

// context file
import { ProjectsContext } from "../../Context/ProjectsContext";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  // context
  const { project, setProject } = useContext(ProjectsContext);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      projectName,
      githubLink,
      liveLink,
      projectDescription,
    };

    setProject((prev) => [...prev, newProject]);
    toast.success("Project Added Successfully!");
  };
  return (
    <>
      <div className={`${styles.BasicInformation}`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <label htmlFor="ProjectName">Project Name</label>
              <br />
              <input
                type="text"
                name="ProjectName"
                id="ProjectName"
                required
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className={styles.right}>
              <label htmlFor="githubLink">Github Link</label> <br />
              <input
                type="text"
                name="githubLink"
                id="githubLink"
                required
                placeholder="Github Link"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.widthFull}>
              <label htmlFor="liveLink">Live Link</label>
              <br />
              <input
                type="text"
                name="liveLink"
                id="liveLink"
                required
                placeholder="Live Link"
                value={liveLink}
                onChange={(e) => setLiveLink(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.widthFull}>
              <label htmlFor="description">Project Description</label> <br />
              <textarea
                type="email"
                name="description"
                id="description"
                required
                placeholder="Project Description"
                value={projectDescription}
                onChange={(e) =>
                  setProjectDescription(e.target.value)
                }></textarea>
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

export default Projects;
