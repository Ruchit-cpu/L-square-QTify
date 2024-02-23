import React from "react";
import style from "./Section.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
export default function Section() {
  const [data, setData] = useState([]);
  const [collapse, setCollapse] = useState("Show all");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.topLine}>
        <p>Top Albums</p>
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
      {data ? (
        collapse === "Show all" ? (
          <Grid container spacing={2}>
            {data.slice(0, 7).map((album) => {
              return (
                <Grid item xs={1.714} key={album.id}>
                  <Card album={album} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {data.map((album) => {
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
