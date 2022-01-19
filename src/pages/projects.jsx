import React from "react";
import EmptyState from "../components/EmptyState/index";
const Projects = () => {
  const data = {
    description: " No Project",
  };
  return (
    <div className="example-container">
      <h1>Why mobile first?</h1>
      <div className="example-wrapper">
        <div className="content-container">CONTENT</div>
        <div className="sidebar-container">SIDEBAR</div>
      </div>
    </div>
  );
};

export default Projects;
