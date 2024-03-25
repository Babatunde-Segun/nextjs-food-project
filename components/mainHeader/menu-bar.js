"use client";
// import { Fatimes, Fabar } from "react-icons/fa";

import classes from "./menu-bar.module.css";
import { useState } from "react";
import { RxHamburgerMenu, RiCloseLine } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

import Link from "next/link";

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Menu icon for smaller screens */}
      <div className={classes.menuIcon} onClick={toggleMenu}>
        {/* {isMenuOpen ? <RxHamburgerMenu /> : <RiCloseLine />} */}
        {isMenuOpen ? (
          <CgClose color='#ff8a05' />
        ) : (
          <RxHamburgerMenu color='#fff' />
        )}

        <div className={classes.navItem}>
          {/* Navbar links */}
          {isMenuOpen && (
            <ul className={classes.navContainer}>
              {/* <li className={classes.navItems}>
                <Link href='/' className={classes.navLink}>
                  Home
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link href='/meals' className={classes.navLink}>
                  Browse Meals
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/community' className={classes.navLink}>
                  Foodies Community
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
