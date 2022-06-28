import React from "react";
import { motion } from "framer-motion";
import intren1 from "../asstes/images/intrenship/intren1.jpg";
import intren2 from "../asstes/images/intrenship/intren2.jpg";
import intren3 from "../asstes/images/intrenship/intren3.jpg";
import intren4 from "../asstes/images/intrenship/intren4.jpg";

export default function Experience() {
  return (
    <motion.div
      className="experience-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="exp-title">
        <i className="fa-solid fa-briefcase"></i>
        <h1>WORK EXPERIENCE</h1>
      </div>
      <div className="line"></div>

      <div className="exp-item intrenship">
        <div className="type">
          <h2>
            INTRENSHIP <small>(2022)</small>
          </h2>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="location">
          <a
            href="https://bananacoding.com/th"
            target={"_blank"}
            rel="noreferrer"
          >
            <h2>Banana Coding</h2>
          </a>
          <i className="fa-solid fa-square-up-right"></i>
        </div>

        <div className="position">
          <h4>Software Engineer</h4>
        </div>

        <p className="description">
          It was here that I learned new things such as programming languages
          and framework(ruby on rails), had the chance to use Test Driven
          Development (TDD) on Rails (Rspec). Here, using Git for group
          collaboration. I have seen the process of developing a web
          application, and I was allowed to work for a client, which has helped
          me have more confidence in working in this field.
        </p>

        <div className="project">
          <h2>Project</h2>
          <div>
            <h3>Blood Need Center</h3>
            <ul>
              <li>It is a web application using Ruby on Rails to develop.</li>
              <li>Create a form to request a blood donation.</li>
              <li>Display blood donation status.</li>
              <li>Display the locations where blood donations are accepted.</li>
              <li>
                Related Images{" "}
                <a
                  href="https://drive.google.com/drive/folders/1AoQwUbeH-gDDhRdgeeDPq50GqjgBz2yp?usp=sharing"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  drive.google.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="article">
          <h2>Read my article at</h2>
          <div>
            <a
              href=" https://blog.bananacoding.com/author/pitiwat"
              target={"_blank"}
            >
              https://blog.bananacoding.com/author/pitiwat
            </a>
            <i className="fa-solid fa-square-up-right"></i>
          </div>
        </div>

        <div className="gallery-wrapper">
          <h2>GALLERY</h2>
          <div className="gallery">
            <motion.div className="image-item" whileHover={{ scale: 1.05 }}>
              <img src={intren1} alt="inten" />
            </motion.div>
            <motion.div className="image-item" whileHover={{ scale: 1.05 }}>
              <img src={intren2} alt="inten" />
            </motion.div>
            <motion.div className="image-item" whileHover={{ scale: 1.05 }}>
              <img src={intren3} alt="inten" />
            </motion.div>
            <motion.div className="image-item" whileHover={{ scale: 1.05 }}>
              <img src={intren4} alt="inten" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="exp-item part-time">
        <div className="type">
          <h2>
            PART TIME <small>(2020)</small>
          </h2>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="name">
          <h3>Water Meter Application</h3>
        </div>

        <p className="description">
          As a Teacher's Project Assistant. This project aims to enable the
          application to take pictures of the water meter in the dormitory and
          send the image to Cloud AutoML Vision for prediction after the
          prediction results will be stored.
        </p>

        <div className="project">
          <div>
            <ul>
              <li>Using React and expressjs in development.</li>
              <li>
                Take a picture of the water meter and then send and receive
                prediction results.
              </li>
              <li>Store predictions in Google Sheets.</li>
              <li>Store images to Firebase Storage.</li>
              <li>
                Related Images{" "}
                <a
                  href="https://drive.google.com/drive/folders/1aUs9nxKQ4ER-sO4FZ2ak97zR48kPQfx2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  drive.google.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
