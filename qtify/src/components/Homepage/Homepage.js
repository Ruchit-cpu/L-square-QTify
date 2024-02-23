import React from "react";
// import style from "./Homepage.module.css";
import Section from "../Section/Section";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [topAlbum, setTopAlbum] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setTopAlbum(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const [newAlbum, setNewAlbum] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/new"
        );
        setNewAlbum(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Section albumData={topAlbum} type="Top Albums" />
      <Section albumData={newAlbum} type="New Albums" />
    </div>
  );
}
