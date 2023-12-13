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
      className={`cursor-pointer font-semibold transition ${
        active === label
          ? "text-gray-900 cursor-default"
          : "text-gray-500 hover:text-gray-400 cursor-pointer transition"
      }`}
    >
      {label}
    </Link>
  );
}
