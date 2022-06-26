import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { itemLink, isActive } from "../utils/ItemLink";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        {itemLink.map((path) => (
          <motion.div
            key={path.link}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <NavLink to={path.link} className={isActive(isActive)}>
              {path.name}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </div>
  );
}
