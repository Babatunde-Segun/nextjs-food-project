import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import mainHeaderBackground from "../main-header-background";
// import logoImg1 from '@/assets/logo.png'
export default function MainHeader() {
  return (
    <>
      <mainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logoImg} priority alt='A plate with food on it' />
          Next Level cuisine
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href='/meals'>Browse Meals</Link>
            </li>
            <li>
              <Link href='/community'>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
