"use client";
import React from "react";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";
import Link from "next/link";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
