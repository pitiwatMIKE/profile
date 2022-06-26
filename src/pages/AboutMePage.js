import React from "react";
import { motion } from "framer-motion";

export default function AboutMePage() {
  return (
    <motion.div
      className="about-me-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-me-content">
        {/* part 1 */}
        <div className="me">
          <div className="my-image">
            <img src="/images/pitiwat.jpg" alt="my_image" />
          </div>
          <div className="full-name">
            <h2>PITIWAT PROMNIMIT</h2>
          </div>
        </div>

        {/* part 2 */}
        <div className="about-me">
          <div className="title">
            <h2>LEARN MORE ABOUT ME</h2>
          </div>

          <div className="line"></div>

          <div className="personal-information">
            <ul>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Nickname:</strong> Mike
                </span>
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Age:</strong> 23
                </span>
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  {/* **fake */}
                  <strong>Degree:</strong> Bachelor of Engineering
                </span>
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Phone:</strong> 0650192825
                </span>
              </li>
            </ul>

            <ul>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Hometown:</strong> Nan, Thailand
                </span>
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Current city:</strong> Bangkok, Thailand
                </span>
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Email:</strong> pitiwat.pr61@gmail.com
                </span>
              </li>
              <li>
                <i className="fa-solid fa-angles-right"></i>
                <span>
                  <strong>Github:</strong>{" "}
                  <a
                    href="https://github.com/pitiwatMIKE"
                    rel="noreferrer"
                    target="_blank"
                  >
                    github.com/pitiwatMIKE
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="line"></div>

          <div className="profile-info">
            {/* **fake */}
            Molestiae officia non et ut. Quas sit beatae ab est perspiciatis
            asperiores sit. Fugit dolorum quam quos enim dolores. Accusantium
            voluptatum vel iusto nam nisi quis atque. Vero vitae laboriosam
            facilis maiores debitis harum deserunt et sed.
          </div>
        </div>

        {/* part 3 */}
        <div className="skill">
          <h2>TECNICAL SKILLS</h2>
          <div className="line"></div>
          <div className="tecnical-skill">
            <div>
              <img src="/images/skill/html.png" alt="html" />
              <span>HTML</span>
            </div>

            <div>
              <img src="/images/skill/css.png" alt="css" />
              <span>CSS</span>
            </div>

            <div>
              <img src="/images/skill/js.png" alt="js" />
              <span>Javascript</span>
            </div>

            <div>
              <img src="/images/skill/python.png" alt="python" />
              <span>Python</span>
            </div>

            <div>
              <img src="/images/skill/ruby.png" alt="ruby" />
              <span>Ruby</span>
            </div>

            <div>
              <img src="/images/skill/bootstrap.png" alt="bootstrap" />
              <span>Bootstrap</span>
            </div>

            <div>
              <img src="/images/skill/react.png" alt="react" />
              <span>React</span>
            </div>

            <div>
              <img src="/images/skill/nodejs.png" alt="nodejs" />
              <span>Node</span>
            </div>

            <div>
              <img src="/images/skill/expressjs.png" alt="expressjs" />
              <span>Express</span>
            </div>

            <div>
              <img src="/images/skill/rails.png" alt="rails" />
              <span>Ruby on Rails</span>
            </div>

            <div>
              <img src="/images/skill/sequelize.png" alt="sequelize" />
              <span>Sequelize</span>
            </div>

            <div>
              <img src="/images/skill/mysql.png" alt="mysql" />
              <span>Mysql</span>
            </div>

            <div>
              <img src="/images/skill/github.png" alt="github" />
              <span>Github</span>
            </div>

            <div>
              <img src="/images/skill/postman.png" alt="postman" />
              <span>Postman</span>
            </div>

            <div>
              <img src="/images/skill/vscode.png" alt="vscode" />
              <span>VSCode</span>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>EDUCATION HISTORY</h2>
          <div className="line"></div>

          <div className="education-history">
            {/* 1 */}
            <div>
              <div className="major">
                <strong>Bachelor of Engineering, Computer Engineering</strong>
              </div>
              <div className="location">
                <strong>
                  Rajamangala University of Technology Lanna Chiang Mai
                </strong>
              </div>
              <ul className="detail">
                <li>
                  <i className="fa-solid fa-angles-right"></i>
                  <span>2018-2022</span>
                </li>
                <li>
                  <i className="fa-solid fa-angles-right"></i>
                  <span>GPA: 3.30</span>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <div className="major">
                <strong>Vocational Certificate, Electronics</strong>
              </div>
              <div className="location">
                <strong>Nan Technical college</strong>
              </div>
              <ul className="detail">
                <li>
                  <i className="fa-solid fa-angles-right"></i>
                  <span>2015-2018</span>
                </li>
                <li>
                  <i className="fa-solid fa-angles-right"></i>
                  <span>GPA: 3.64</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
