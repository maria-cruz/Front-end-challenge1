import React from "react";
import EmptyState from "../components/EmptyState/index";
const Projects = () => {
  const data = {
    description: " No Project",
  };
  return <EmptyState {...data} />;
};

export default Projects;
