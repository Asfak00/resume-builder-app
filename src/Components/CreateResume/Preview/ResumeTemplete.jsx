import React from "react";

// styles
import styles from "../../../Sass/ResumeTemplete.module.scss";

// image
import image from "../../../assets/image.jpg";

// icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const ResumeTemplete = ({ setPreview, preview }) => {
  return (
    <div className={styles.resumePreview}>
      <div className={styles.crossIcon} onClick={() => setPreview(false)}>
        <p>
          <RxCross1 />
        </p>
      </div>
      <div className={styles.resume}>
        {/* top name and picture section */}
        <div className={styles.topSection}>
          <img src={image} alt="author/image" />
          <div className={styles.topNameSection}>
            <h1>Asfak Ahmed</h1>
            <p>Front-End Developer</p>
          </div>
        </div>

        {/* second address and summary section */}
        <div className={styles.summarySection}>
          <div className={styles.address}>
            <a href="#">
              <p>
                <IoIosCall />
                +8801305282768
              </p>
            </a>
            <a href="mailto:asfakahmed680@gmail.com">
              <p>
                <MdEmail />
                asfakahmed680@gmail.com
              </p>
            </a>
            <a href="https://asfakahmed.netlify.app/">
              <p>
                <TbWorld />
                https://asfakahmed.netlify.app/
              </p>
            </a>
            <a href="#">
              <p>
                <IoLocationSharp />
                Sylhet, Bangladesh
              </p>
            </a>
          </div>
          <div className={styles.summary}>
            <h3>Summary</h3>
            <p>
              I am Asfak Ahmed. I am a front-end web developer. I have been
              working in this sector for the past 1+ years. I consider coding as
              the most important thing in my life. I love to tackle complex
              problems. I won 2nd runner's prize in " ProgrammingHeroweb
              application showcase contest 2".
            </p>
          </div>
        </div>

        {/* education and experience section */}
        <div className={styles.EduExperienceSection}>
          <div className={styles.educationContainer}>
            {/* education */}
            <div className={styles.education}>
              <h3>Education</h3>
              <div className={styles.eduDesc}>
                <h1>higher secondary school certificate</h1>
                <h2>Chhakapon High School & collage</h2>
                <h4>
                  <span>12-10-2018</span> - <span>10-03-2023</span>
                </h4>
              </div>
            </div>

            {/* skill */}
            <div className={styles.skill}>
              <h3>Skill</h3>
              <p>Html</p>
              <p>css</p>
              <p>react</p>
              <p>javascript</p>
            </div>
          </div>

          {/* experience */}
          <div className={styles.experience}>
            <h3>Work Experience</h3>
            <div className={styles.workDesc}>
              <h1>Goatmoves.inc</h1>
              <h2>Front-End Web Developer</h2>
              <h4>
                <span>20-10-2023</span> - <span>present</span>
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quod dignissimos facere maiores soluta fugiat explicabo eum
                laudantium obcaecati error blanditiis minima placeat aut, at
                quisquam ratione perspiciatis ipsum labore deserunt nesciunt
              </p>
            </div>

            <div className={styles.workDesc}>
              <h1>Goatmoves.inc</h1>
              <h2>Front-End Web Developer</h2>
              <h4>
                <span>20-10-2023</span> - <span>present</span>
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quod dignissimos facere maiores soluta fugiat explicabo eum
                laudantium obcaecati error blanditiis minima placeat aut, at
                quisquam ratione perspiciatis ipsum labore deserunt nesciunt
              </p>
            </div>
          </div>
        </div>

        {/* language and projects section */}
        <div className={styles.langProjectSection}>
          {/* language */}
          <div className={styles.language}>
            <h3>Language</h3>
            <p>Bangla</p>
            <p>English</p>
            <p>Hindi</p>
          </div>

          {/* projects */}
          <div className={styles.project}>
            <h3>Project</h3>

            <div className={styles.projectDesc}>
              <h1>
                multi vendor e-commerce website
                <div className={styles.projectLinks}>
                  <a href="#">Live Link</a> <a href="#">Github Link</a>
                </div>
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                dolorem vero quod dicta quidem laborum eos sunt perspiciatis
                tenetur quasi ex asperiores ratione quis eum illum modi repellat
                quibusdam nulla.
              </p>
            </div>

            <div className={styles.projectDesc}>
              <h1>
                multi vendor e-commerce website
                <div className={styles.projectLinks}>
                  <a href="#">Live Link</a> <a href="#">Github Link</a>
                </div>
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                dolorem vero quod dicta quidem laborum eos sunt perspiciatis
                tenetur quasi ex asperiores ratione quis eum illum modi repellat
                quibusdam nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplete;