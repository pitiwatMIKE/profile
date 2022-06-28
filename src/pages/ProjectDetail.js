import React from "react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  return (
    <motion.div
      className="project-detail-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-wrapper">
        <div className="project-title">
          <h1>PROJECT DETAIL</h1>
          <div className="line"></div>
        </div>

        <div className="project">
          {/* project 1 */}
          <div className="project-item">
            <div className="name">
              <h2>Online Shop</h2>
            </div>

            <ul className="link">
              <li>
                <strong>Github: </strong>
                <a
                  href="https://github.com/pitiwatMIKE/online_shop"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  github.com/pitiwatMIKE
                </a>
              </li>

              <li>
                <strong>website:</strong>
                <a
                  href="https://online-shop-pitiwat.herokuapp.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  herokuapp.com
                </a>
              </li>
            </ul>

            <div className="detail">
              <h2>Detail</h2>
              <ul>
                <li>
                  Online shop web application developed with React, Redux
                  Toolkit, express, and sequelize.
                </li>
                <li>Admin manage products, orders and manage users.</li>
                <li>Customers place orders and pay.</li>
              </ul>
            </div>
            <div className="line"></div>
          </div>

          {/* project 2 */}
          <div className="project-item">
            <div className="name">
              <h2>CRUD And User Role</h2>
            </div>

            <ul className="link">
              <li>
                <strong>Github: </strong>
                <a
                  href="https://github.com/pitiwatMIKE/react_curd_user_role_backend"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  github.com/pitiwatMIKE
                </a>
              </li>

              <li>
                <strong>website:</strong>
                <a
                  href="https://react-crud-userrole.herokuapp.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  herokuapp.com
                </a>
              </li>
            </ul>

            <div className="detail">
              <h2>Detail</h2>
              <ul>
                <li>Use React, Redux Toolkit, express, sequelize.</li>
                <li>Admin can manage products and manage users.</li>
                <li>User can manage their own products.</li>
              </ul>
            </div>
            <div className="line"></div>
          </div>

          {/* project 3 */}
          <div className="project-item">
            <div className="name">
              <h2>Extraction of arguments from Thai </h2>
              <div>(Senior Project)</div>
            </div>

            <ul className="link">
              <li>
                <strong>Github: </strong>
                <a
                  href="https://github.com/pitiwatMIKE/project_argument"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  github.com/pitiwatMIKE
                </a>
              </li>

              <li>
                <strong>Github:</strong>
                <a
                  href="https://github.com/pitiwatMIKE/project_web_argument_targer"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  github.com/pitiwatMIKE
                </a>
              </li>
              <li>
                <strong>Overview:</strong>
                <a
                  href="https://drive.google.com/file/d/147eElYUIwyKo9kB3nKlDV1IXzxIoEqap/view?usp=sharing"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  drive.google.com
                </a>
              </li>
            </ul>

            <div className="detail">
              <h2>Detail</h2>
              <p>
                A project on extracting arguments from Thai text. by the message
                that would be an argument Must consist of claim and premise,
                purpose to find part of claim and premise.
              </p>
              <ul>
                <li>
                  Use Python, TensorFlow, PyTorch, Transformers to develop.
                </li>
                <li>
                  Use models CRF, LSTM, BiLSTM, WangchanBERTa to train model.
                </li>
                <li>Use Flask to create a web API to run the model.</li>
              </ul>
            </div>
            <div className="line"></div>
          </div>

          {/* project 4 */}
          <div className="project-item">
            <div className="name">
              <h2>Verify Identification numbers by detecting an ID card</h2>
              <div>(Mini Project)</div>
            </div>

            <ul className="link">
              <li>
                <strong>Github: </strong>
                <a
                  href="https://github.com/pitiwatMIKE/verify-Identification-numbers-by-detecting-an-ID-card"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  github.com/pitiwatMIKE
                </a>
              </li>

              <li>
                <strong>Google Drive:</strong>
                <a
                  href="https://drive.google.com/drive/folders/1gthSg5JrTQNojqSt7LuBSS41-vYy4Asi?usp=sharing"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  drive.google.com
                </a>
              </li>
            </ul>

            <div className="detail">
              <h2>Detail</h2>
              <p>
                A mini project in image processing course aims to use image
                processing technique to detect ID card images and read the
                number from the ID card
              </p>
              <ul>
                <li>Use Python, TensorFlow to develop.</li>
                <li>Use pytesseract to read id number from image.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </motion.div>
  );
}
