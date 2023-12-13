"use client";

import React from "react";
import { IconContext } from "react-icons";
import { FaCode, FaSearch } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md"
import { GrWorkshop } from "react-icons/gr"
import { GiDiscussion } from "react-icons/gi"

const ServiceCard = ({ icon, title, description }) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case "presentation":
        return <MdCoPresent />;
      case "workshop":
        return <GrWorkshop />;
      case "consultation":
        return <GiDiscussion />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl bg-gray-200 m-10 text-center p-6 flex flex-col gap-2">
      <IconContext.Provider value={{ size: "2em", className: "mb-2 mx-auto" }}>
        {getIconComponent(icon)}
      </IconContext.Provider>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
