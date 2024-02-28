import React from "react";
import style from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

export default function Card({ album, type }) {
  return (
    <Tooltip
      title={type === "albums" ? album.songs.length + " songs" : null}
      arrow
    >
      <div className={style.cardComponent}>
        <div className={style.cardMedia}>
          <img
            src={album.image}
            alt="Reasonable Stretch"
            className={style.image}
          />
          <div className={style.chipContainer}>
            <Chip
              label={
                type === "albums"
                  ? album.follows + " follows"
                  : album.likes + " Likes"
              }
              variant="outlined"
              className={style.chip}
              sx={{
                "& .MuiChip-label": {
                  padding: 0,
                },
              }}
            />
          </div>
        </div>
        <div className={style.cardTextContainer}>
          <p className={style.cardText}>{album.title}</p>
        </div>
      </div>
    </Tooltip>
  );
}
