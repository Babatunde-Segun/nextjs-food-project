import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

import MenuBar from "./menu-bar";

import NavLink from "./navLink";
// import logoImg1 from '@/assets/logo.png'
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logoImg} priority alt='A plate with food on it' />
          Next Level cuisine
        </Link>

        <MenuBar />

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// import React, { useState } from 'react';
// import './Navbar.css'; // Import CSS for styling

// function Navbar() {
//   // State to track whether the menu is open or closed
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle the menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <a href="/">Logo</a>
//         </div>
//         {/* Menu icon for smaller screens */}
//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         {/* Navbar links */}
//         <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
//           <li className="nav-item">
//             <a href="/" className="nav-link">Home</a>
//           </li>
//           <li className="nav-item">
//             <a href="/about" className="nav-link">About</a>
//           </li>
//           <li className="nav-item">
//             <a href="/services" className="nav-link">Services</a>
//           </li>
//           <li className="nav-item">
//             <a href="/contact" className="nav-link">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
