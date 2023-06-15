"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hidden lg:flex">
        <Link
          href=""
          className="uppercase fixed top-4 left-2 text-white text-6xl link"
        >
          Work
        </Link>
        <Link
          href=""
          className="uppercase fixed top-4 right-2 text-white text-6xl link"
        >
          Connect
        </Link>
        <Link
          href=""
          className="uppercase fixed bottom-4 left-2 text-white text-6xl link"
        >
          Instagram
        </Link>
        <Link
          href=""
          className="uppercase fixed bottom-4 right-2 text-white text-6xl link"
        >
          Twitter
        </Link>
      </div>
      <MobileMenu
        handleClick={handleClick}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default NavBar;
