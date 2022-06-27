import React from "react";
import { motion } from "framer-motion";
import intren1 from "../asstes/images/intrenship/intren1.jpg";
import intren2 from "../asstes/images/intrenship/intren2.jpg";
import intren3 from "../asstes/images/intrenship/intren3.jpg";
import intren4 from "../asstes/images/intrenship/intren4.jpg";

export default function Exprerience() {
  return (
    <motion.div
      className="exprerience-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="exp-title">
        <i className="fa-solid fa-briefcase"></i>
        <h1>WORK EXPRERIENCE</h1>
      </div>
      <div className="line"></div>

      <div className="exp-item intrenship">
        <div className="type">
          <h2>
            Internship <small>(2022)</small>
          </h2>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="location">
          <a
            href="https://bananacoding.com/th"
            target={"_blank"}
            rel="noreferrer"
          >
            <h2>BANANA CODING</h2>
          </a>
          <i className="fa-solid fa-square-up-right"></i>
        </div>

        <div className="position">
          <h3>Software Engineer</h3>
        </div>

        <p className="description">
          {/* ** fake */}
          Odio quos autem et fugit commodi. Consectetur tempora itaque
          laboriosam numquam voluptatum odit reiciendis necessitatibus. Est quis
          accusamus. Sunt quam corporis rem dolore esse est et id. Eligendi
          officia voluptatem et explicabo earum mollitia alias sed. Quasi nihil
          modi rem iure ducimus. Facilis ea qui. Aut perspiciatis est molestias
          et. Nisi libero at culpa in aut officia debitis et. Quas commodi id et
          est est nesciunt molestias minima repellat. Omnis possimus commodi
          dolores quis rerum deserunt vel. Voluptate ea tempora. Iusto rerum in
          est asperiores voluptas.
        </p>

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

        <div className="gallery-wraper">
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
            Part Time <small>(2020)</small>
          </h2>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="name">
          <h2>Water Meter Application</h2>
        </div>

        <p className="description">
          {/* **fake */}
          Odit praesentium aut quo illo consequatur ut magni. Tenetur et quia
          sunt corrupti. Aut et qui qui beatae architecto nihil cupiditate sit
          facilis. Eum nesciunt nulla odio in illo repellat velit explicabo
          tempora. Hic impedit neque aut et quod blanditiis. Rerum qui magni
          dolores nobis odit et voluptatum voluptas accusantium. Sit eos libero
          tempore odit atque atque. Dolor qui eos non numquam. Quasi in vero
          consectetur. Dolorem mollitia laborum dolorem quia eaque autem libero
          aut. Sit optio qui. Dolor omnis repudiandae soluta voluptates
          necessitatibus facilis quia est autem. Dolor incidunt eius repellendus
          culpa. Labore dolores sed doloribus. Qui eius alias illum debitis eos
          error sed nam aspernatur.
        </p>

        <div className="related-image">
          <h2>Related Images</h2>
          <a
            href="https://drive.google.com/drive/folders/1aUs9nxKQ4ER-sO4FZ2ak97zR48kPQfx2"
            target={"_blank"}
            rel="noreferrer"
          >
            https://drive.google.com/drive/folders
          </a>
          <i className="fa-solid fa-square-up-right"></i>
        </div>
      </div>
    </motion.div>
  );
}
