import React from "react";
import style from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

export default function Card({ album, type }) {
  return (
    <Tooltip
      title={type === "albums" ? album.songs.length + " songs" : null}
      arrow
    >
      <Link
        style={{ textDecoration: "none" }}
        to={type === "albums" ? `/${album.slug}` : null}
      >
        <div className={style.cardComponent}>
          <div className={style.cardMedia}>
            <img src={album.image} alt={album.title} className={style.image} />
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
      </Link>
    </Tooltip>
  );
}
