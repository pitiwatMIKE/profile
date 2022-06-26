import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function LayoutContainer({ children }) {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
