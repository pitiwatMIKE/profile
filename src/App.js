import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/LayoutContainer";
import AboutMePage from "./pages/AboutMePage";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

export default function PITIWAT() {
  return (
    <div className="app-container">
      <ScrollToTop>
        <LayoutContainer>
          <Routes>
            <Route path="/" element={<AboutMePage />} />
            <Route path="/project_detail" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </LayoutContainer>
      </ScrollToTop>
    </div>
  );
}
