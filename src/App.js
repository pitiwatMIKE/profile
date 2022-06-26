import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/LayoutContainer";
import AboutMePage from "./pages/AboutMePage";
import Contact from "./pages/Contact";
import Exprerience from "./pages/Exprerience";
import ProjectDetail from "./pages/ProjectDetail";

export default function PITIWAT() {
  return (
    <LayoutContainer>
      <Routes>
        <Route path="/" element={<AboutMePage />} />
        <Route path="/project_detail" element={<ProjectDetail />} />
        <Route path="/exprerience" element={<Exprerience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LayoutContainer>
  );
}
