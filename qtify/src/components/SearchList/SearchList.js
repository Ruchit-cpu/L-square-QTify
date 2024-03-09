import React from "react";
import style from "./SearchList.module.css";
export default function SearchList({ searchData, inputText }) {
  console.log(searchData, inputText);
  let length = inputText.length;
  let filteredData = searchData.filter(
    (album) => album.title.substring(0, length) === inputText
  );
  return (
    <div className={style.displayContainer}>
      <div className={style.searchListCOntainer}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className={style.searchCardContainer}>
              <div className={style.imageAndTitleConatiner}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={style.image}
                />

                <div className={style.title}>
                  <p className={style.albumName}>{item.title}</p>
                  <p className={style.artistName}>{item.songs[0].artists}</p>
                </div>
              </div>
              <p className={style.follows}>{item.follows} Follows</p>
            </div>
          ))
        ) : (
          <div className={style.noData}>
            <h3>No album Found</h3>
          </div>
        )}
      </div>
    </div>
  );
}
