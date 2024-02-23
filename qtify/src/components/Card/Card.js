import React from "react";
import style from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ album }) {
  return (
    <div className={style.cardComponent}>
      <div className={style.cardMedia}>
        <img
          src={album.image}
          alt="Reasonable Stretch"
          className={style.image}
        />
        <div className={style.chipContainer}>
          <Chip
            label={album.follows + " follows"}
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
  );
}
