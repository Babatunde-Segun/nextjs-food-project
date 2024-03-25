"use client";
// import { Fatimes, Fabar } from "react-icons/fa";

import { useState } from "react";
import { RxHamburgerMenu, RiCloseLine } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Menu icon for smaller screens */}
      <div className='menu-icon' onClick={toggleMenu}>
        {/* {isMenuOpen ? <RxHamburgerMenu /> : <RiCloseLine />} */}
        {isMenuOpen ? <CgClose /> : <RxHamburgerMenu />}
      </div>

      {/* Navbar links */}
      {isMenuOpen && (
        <ul>
          <li className='nav-item'>
            <a href='/' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='nav-link'>
              About
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
