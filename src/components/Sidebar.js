import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { itemLink, isActive } from "../utils/ItemLink";

export default function Sidebar() {
  const [isOpen, setIsOpene] = useState(false);
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div className="sidebar-container">
      {/* Menu Icon */}
      <motion.div
        className="sidebar-menu"
        animate={isOpen ? "closed" : "open"}
        variants={variants}
        whileHover={{
          rotate: 180,
        }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsOpene(true)}
      >
        <ImMenu />
      </motion.div>

      {/* Sidebar */}
      <motion.div
        className="sidebar"
        initial={{ width: 0 }}
        animate={
          isOpen ? { width: "70%", opacity: 1 } : { width: 0, opacity: 0 }
        }
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Linke */}
        <div className="link-items">
          {itemLink.map((path) => (
            <motion.div
              key={path.link}
              whileHover={{ x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink
                to={path.link}
                variants={variants}
                className={isActive(isActive)}
                onClick={() => setIsOpene(false)}
              >
                {path.name}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div
        className="siebar-colse"
        style={isOpen ? { display: "block" } : { display: "none" }}
        onClick={() => setIsOpene(false)}
      ></div>
    </div>
  );
}
