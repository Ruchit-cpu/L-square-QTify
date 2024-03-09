import React, { useEffect } from "react";
import style from "./Section.module.css";
import axios from "axios";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
export default function Section({ albumData, string, type }) {
  const [collapse, setCollapse] = useState("Show all");
  const [genre, setGenre] = useState([
    {
      key: "all",
      label: "All",
    },
  ]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue, event.target.id);
    setValue(newValue);
  };

  useEffect(() => {
    if (type === "songs") {
      if (genre.length === 1) {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "https://qtify-backend-labs.crio.do/genres"
            );
            setGenre([...genre, ...response.data.data]);
          } catch (e) {
            console.log(e);
          }
        };
        fetchData();
      }
    }
  }, []);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={style.container}>
      <div className={style.topLine}>
        <p>{string}</p>
        {type === "albums" ? (
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
        ) : null}
      </div>
      {albumData.length !== 0 ? (
        type === "songs" ? (
          <Box sx={{ width: "100%", color: "white" }}>
            {/* eslint-disable-next-line */}
            <Box sx={{ marginBottom: 4 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                // textColor="secondary"
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTab-root": {
                    color: "white",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "rgba(52, 201, 75, 1)",
                    height: "4px",
                    borderRadius: "2px",
                  },
                }}
              >
                {genre.length > 1
                  ? genre.map((ele, idx) => (
                      <Tab
                        className={style.tab}
                        label={ele.label}
                        {...a11yProps(idx)}
                      />
                    ))
                  : null}
              </Tabs>
            </Box>
            <Carousel
              albumData={
                value === 0
                  ? albumData
                  : albumData.filter(
                      (item) => item.genre.key === genre[value].key
                    )
              }
              // albumData={albumData.filter((item) =>
              //   genre.length > 1 && value !== 0
              //     ? item.genre.key === genre[value].key
              //     : item
              // )}
              type={type}
            />
          </Box>
        ) : collapse === "Show all" ? (
          <Carousel albumData={albumData} type={type} />
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
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress color="success" />
        </Box>
      )}
    </div>
  );
}
