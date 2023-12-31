"use client";

import React, { useState, useEffect } from "react";
import NavbarItem from "./NavBarItem";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const TOP_OFFSET = 50;

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMobileMenu && !event.target.closest('.mobile-menu-container')) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <nav className="w-full top-0 fixed z-40">
      <div className={`p-4 ${showBackground ? "bg-gray-800" : "bg-zinc-100"}`}>
        <div className="flex items-center justify-between">
          <div className={`text-lg font-semibold ${showBackground ? "text-white" : ""}`}>Tella Omojolade</div>
          <div className="space-x-4 hidden lg:flex">
            <NavbarItem label="Home" active={active} setActive={setActive} />
            <NavbarItem label="About" active={active} setActive={setActive} />
            <NavbarItem label="Contact" active={active} setActive={setActive} />
            <NavbarItem label="Events" active={active} setActive={setActive} />
          </div>
          <div className={`lg:hidden ${showBackground ? "text-white" : ""}`}>
            <RxHamburgerMenu
              className=""
              size={30}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="lg:hidden">
          <div className="mobile-menu-container bg-gray-300 text-white p-4 flex flex-col gap-4">
            <NavbarItem label="Home" active={active} setActive={setActive} />
            <NavbarItem label="About" active={active} setActive={setActive} />
            <NavbarItem label="Events" active={active} setActive={setActive} />
            <NavbarItem label="Contact" active={active} setActive={setActive} />
          </div>
        </div>
      )}
    </nav>
  );
}
