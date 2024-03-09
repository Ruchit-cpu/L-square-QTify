import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search-icon.svg";
import SearchList from "../SearchList/SearchList";

export default function Searchbar({ searchData }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className={styles.container}>
        <input
          placeholder="Search a song of your choice"
          className={styles.search}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className={styles.searchButton}>
          <img src={SearchIcon} alt="searchIcon" />
        </button>
      </div>
      {searchValue ? (
        <SearchList searchData={searchData} inputText={searchValue} />
      ) : null}
    </>
  );
}
