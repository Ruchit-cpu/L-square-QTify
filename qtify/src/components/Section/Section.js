import React from "react";
import style from "./Section.module.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
export default function Section({ albumData, type }) {
  const [collapse, setCollapse] = useState("Collapse");

  return (
    <div className={style.container}>
      <div className={style.topLine}>
        <p>{type}</p>
        <p
          onClick={() => {
            if (collapse === "Show all") {
              setCollapse("Collapse");
            } else {
              setCollapse("Show all");
            }
          }}
          className={style.collapse}
        >
          {collapse}
        </p>
      </div>
      {albumData ? (
        collapse === "Show all" ? (
          <Carousel albumData={albumData} />
        ) : (
          <Grid container spacing={2}>
            {albumData.map((album) => {
              return (
                <Grid item xs={1.714} key={album.id}>
                  <Card album={album} />
                </Grid>
              );
            })}
          </Grid>
        )
      ) : null}
    </div>
  );
}
