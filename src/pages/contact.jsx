import React from "react";
import EmptyState from "../components/EmptyState/index";

const Contacts = () => {
  const data = {
    description: "No Contact",
  };
  return <EmptyState {...data} />;
};

export default Contacts;
