import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../SearchBar/Searchbar";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <Searchbar />
      <Button buttonText="Give Feedback" />
    </nav>
  );
}
