import React from "react";
import Link from "next/link";

export default function NavbarItem({ label, active, setActive }) {
  const handleClick = () => {
    setActive(label);
  };

  return (
    <Link
      onClick={handleClick}
      href="/"
      className={`cursor-pointer transition ${
        active === label
          ? "text-red-200 cursor-default"
          : "text-gray-500 hover:text-gray-300 cursor-pointer transition"
      }`}
    >
      {label}
    </Link>
  );
}
