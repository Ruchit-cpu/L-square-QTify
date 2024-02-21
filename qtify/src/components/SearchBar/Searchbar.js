import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search-icon.svg";

export default function Searchbar() {
  return (
    <div className={styles.container}>
      <input
        placeholder="Search a song of your choice"
        className={styles.search}
      />
      <button className={styles.searchButton}>
        <img src={SearchIcon} alt="searchIcon" />
      </button>
    </div>
  );
}
