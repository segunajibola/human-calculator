"use client";

import React from "react";
import { IconContext } from "react-icons";
import { FaBeer, FaCode, FaSearch } from "react-icons/fa";

const ServiceCard = ({ icon, title, description }) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case "presentation":
        return <FaBeer />;
      case "workshop":
        return <FaCode />;
      case "consultation":
        return <FaSearch />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg bg-gray-200 m-4 text-center p-4 flex flex-col">
      <IconContext.Provider value={{ size: "2em", className: "mb-2 mx-auto" }}>
        {getIconComponent(icon)}
      </IconContext.Provider>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
