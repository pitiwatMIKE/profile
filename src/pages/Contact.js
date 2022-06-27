import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-wrapper">
        <h1>CONTACT ME</h1>
        <div className="line item"></div>
        <div className="contact">

          <div className="adress item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <strong>Adress</strong>
              <p>Bang Khen, Bangkok thailand</p>
            </div>
          </div>

          <div className="email item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <p>pitiwat.pr61@gmail.com</p>
            </div>
          </div>

          <div className="phone item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <strong>Phone</strong>
              <p>065 019 2825</p>
            </div>
          </div>

          <div className="github item">
            <i className="fa-brands fa-github"></i>
            <div>
              <strong>Github</strong>
              <p>github.com/pitiwatMIKE</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
