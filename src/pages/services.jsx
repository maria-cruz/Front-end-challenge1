import React from "react";
import EmptyState from "../components/EmptyState/index";

const Services = () => {
  const data = { description: "No Services" };
  return <EmptyState {...data} />;
};

export default Services;
