import React, { useRef } from "react";

// styles
import styles from "../../../Sass/ResumeTemplete.module.scss";

// image
import image from "../../../assets/image.jpg";

// importing html2canvas and jspdf
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

// all context
import { useContext } from "react";
import { BasicInfoContext } from "../../../Context/BasicInfoContext";
import { SummaryContext } from "../../../Context/SummaryContext";
import { EducationContext } from "../../../Context/EducationContext";
import { SkillContext } from "../../../Context/SkillContext";
import { ExperienceContext } from "../../../Context/ExperienceContext";
import { LanguageContext } from "../../../Context/LanguageContext";
import { ProjectsContext } from "../../../Context/ProjectsContext";
import { FontColorContext } from "../../../Context/FontColorContext";
import { BiSolidDownload } from "react-icons/bi";

const ResumeTemplete = ({ setPreview, preview }) => {
  // all context
  const { basicInfo } = useContext(BasicInfoContext);
  const { summary } = useContext(SummaryContext);
  const { education } = useContext(EducationContext);
  const { skill } = useContext(SkillContext);
  const { experience } = useContext(ExperienceContext);
  const { language } = useContext(LanguageContext);
  const { project } = useContext(ProjectsContext);
  const { fontColor } = useContext(FontColorContext);

  // useref
  const pdfRef = useRef();

  const donwloadPDF = () => {
    const capture = document.querySelector(".resume");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF();
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      doc.save(`${basicInfo.name ? basicInfo.name : "asfakahmed"}.pdf`);
    });
  };

  return (
    <div className={styles.resumePreview}>
      <div className={styles.crossIcon} onClick={() => setPreview(false)}>
        <p onClick={donwloadPDF}>
          <BiSolidDownload size={28} />
        </p>

        <p>
          <RxCross1 />
        </p>
      </div>

      <div className={styles.worningText}>
        <h3>Preview not available for mobile!</h3>
      </div>
      <div className={`${styles.resume} resume`} ref={pdfRef}>
        {/* top name and picture section */}
        <div className={styles.topSection}>
          <img
            src={basicInfo.image ? basicInfo.image : image}
            alt="author/image"
          />
          <div className={styles.topNameSection}>
            <h1>{basicInfo.name ? basicInfo.name : "Asfak Ahmed"}</h1>
            <p style={{ color: fontColor ? fontColor : "#00aae2" }}>
              {basicInfo.title ? basicInfo.title : "Front-End Developer"}
            </p>
          </div>
        </div>

        {/* second address and summary section */}
        <div className={styles.summarySection}>
          <div className={styles.address}>
            <a href={basicInfo.phoneNumber ? basicInfo.phoneNumber : "#"}>
              <p>
                <IoIosCall
                  className={styles.icon}
                  style={{ color: fontColor ? fontColor : "#00aae2" }}
                />
                {basicInfo.phoneNumber
                  ? basicInfo.phoneNumber
                  : "+8801305282768"}
              </p>
            </a>
            <a
              href={`mailto:${
                basicInfo.email ? basicInfo.email : "asfakahmed680@gmail.com"
              }`}>
              <p>
                <MdEmail
                  className={styles.icon}
                  style={{ color: fontColor ? fontColor : "#00aae2" }}
                />
                {basicInfo.email ? basicInfo.email : "asfakahmed680@gmail.com"}
              </p>
            </a>
            <a
              href={
                basicInfo.website
                  ? basicInfo.website
                  : "https://asfakahmed.netlify.app/"
              }>
              <p>
                <TbWorld
                  className={styles.icon}
                  style={{ color: fontColor ? fontColor : "#00aae2" }}
                />
                {basicInfo.website
                  ? basicInfo.website
                  : "https://asfakahmed.netlify.app/"}
              </p>
            </a>
            <a href={basicInfo.address ? basicInfo.address : "#"}>
              <p>
                <IoLocationSharp
                  className={styles.icon}
                  style={{ color: fontColor ? fontColor : "#00aae2" }}
                />
                {basicInfo.address ? basicInfo.address : "Sylhet, Bangladesh"}
              </p>
            </a>
          </div>
          <div className={styles.summary}>
            <h3>Summary</h3>
            <p>
              {summary
                ? summary
                : ` I am Asfak Ahmed. I am a front-end web developer. I have been
              working in this sector for the past 1+ years. I consider coding as
              the most important thing in my life. I love to tackle complex
              problems. I won 2nd runner's prize in " ProgrammingHeroweb
              application showcase contest 2".`}
            </p>
          </div>
        </div>

        {/* education and experience section */}
        <div className={styles.EduExperienceSection}>
          <div className={styles.educationContainer}>
            {/* education */}
            <div className={styles.education}>
              <h3>Education</h3>
              {education.length !== 0 ? (
                education.map((edu, index) => (
                  <div className={styles.eduDesc} key={index}>
                    <h1>{edu.degree}</h1>
                    <h2>{edu.institutionName}</h2>
                    <h4>
                      <span>{edu.startData}</span> -{" "}
                      <span>
                        {edu.endDate === "" && edu.present
                          ? "present"
                          : edu.endDate}
                      </span>
                    </h4>
                  </div>
                ))
              ) : (
                <div className={styles.eduDesc}>
                  <h1>higher secondary school certificate</h1>
                  <h2>Chhakapon High School & collage</h2>
                  <h4>
                    <span>12-10-2018</span> - <span>10-03-2023</span>
                  </h4>
                </div>
              )}
            </div>

            {/* skill */}
            <div className={styles.skill}>
              <h3>Skill</h3>
              {skill.length !== 0 ? (
                skill.map((ele, index) => <p>{ele ? ele : "React"}</p>)
              ) : (
                <>
                  <p>Html</p>
                  <p>css</p>
                  <p>react</p>
                  <p>javascript</p>
                </>
              )}
            </div>
          </div>

          {/* experience */}
          <div className={styles.experience}>
            <h3>Work Experience</h3>

            {experience.length !== 0 ? (
              experience.map((exp, index) => (
                <div className={styles.workDesc} key={index}>
                  <h1>{exp.companyName}</h1>
                  <h2>{exp.jobTitle}</h2>
                  <h4>
                    <span>{exp.startData}</span> -{" "}
                    <span>
                      {exp.endDate === "" && exp.present
                        ? "present"
                        : exp.endDate}
                    </span>
                  </h4>
                  <p>{exp.Description}</p>
                </div>
              ))
            ) : (
              <>
                <div className={styles.workDesc}>
                  <h1>Goatmoves.inc</h1>
                  <h2>Front-End Web Developer</h2>
                  <h4>
                    <span>20-10-2023</span> - <span>present</span>
                  </h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quod dignissimos facere maiores soluta fugiat
                    explicabo eum laudantium obcaecati error blanditiis minima
                    placeat aut, at quisquam ratione perspiciatis ipsum labore
                    deserunt nesciunt
                  </p>
                </div>

                <div className={styles.workDesc}>
                  <h1>Goatmoves.inc</h1>
                  <h2>Front-End Web Developer</h2>
                  <h4>
                    <span>20-10-2023</span> - <span>present</span>
                  </h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quod dignissimos facere maiores soluta fugiat
                    explicabo eum laudantium obcaecati error blanditiis minima
                    placeat aut, at quisquam ratione perspiciatis ipsum labore
                    deserunt nesciunt
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* language and projects section */}
        <div className={styles.langProjectSection}>
          {/* language */}
          <div className={styles.language}>
            <h3>Language</h3>
            {language.length !== 0 ? (
              language.map((lang) => <p>{lang}</p>)
            ) : (
              <>
                <p>Bangla</p>
                <p>English</p>
                <p>Hindi</p>
              </>
            )}
          </div>

          {/* projects */}
          <div className={styles.project}>
            <h3>Project</h3>

            {project.length !== 0 ? (
              project.map((pro, index) => (
                <div className={styles.projectDesc} key={index}>
                  <h1>
                    {pro.projectName}
                    <div className={styles.projectLinks}>
                      <a
                        href={pro.liveLink}
                        style={{ color: fontColor ? fontColor : "#00aae2" }}>
                        Live Link
                      </a>
                      <a
                        href={pro.githubLink}
                        style={{ color: fontColor ? fontColor : "#00aae2" }}>
                        Github Link
                      </a>
                    </div>
                  </h1>

                  <p>{pro.projectDescription}</p>
                </div>
              ))
            ) : (
              <>
                <div className={styles.projectDesc}>
                  <h1>
                    multi vendor e-commerce website
                    <div className={styles.projectLinks}>
                      <a
                        href="#"
                        style={{ color: fontColor ? fontColor : "#00aae2" }}>
                        Live Link
                      </a>{" "}
                      <a
                        href="#"
                        style={{ color: fontColor ? fontColor : "#00aae2" }}>
                        Github Link
                      </a>
                    </div>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi dolorem vero quod dicta quidem laborum eos sunt
                    perspiciatis tenetur quasi ex asperiores ratione quis eum
                    illum modi repellat quibusdam nulla.
                  </p>
                </div>

                <div className={styles.projectDesc}>
                  <h1>
                    multi vendor e-commerce website
                    <div className={styles.projectLinks}>
                      <a
                        href="#"
                        style={{ color: fontColor ? fontColor : "#00aae2" }}>
                        Live Link
                      </a>{" "}
                      <a
                        href="#"
                        style={{ color: fontColor ? fontColor : "#00aae2" }}>
                        Github Link
                      </a>
                    </div>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi dolorem vero quod dicta quidem laborum eos sunt
                    perspiciatis tenetur quasi ex asperiores ratione quis eum
                    illum modi repellat quibusdam nulla.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplete;
