import React from "react";
// import style from "./Homepage.module.css";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Section from "../Section/Section";
import Faq from "../Faq/Faq";
import MusicBar from "../MusicBar/MusicBar";
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

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        setSongs(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar searchData={topAlbum} />
      <HeroSection />
      <Section albumData={topAlbum} string="Top Albums" type="albums" />
      <Section albumData={newAlbum} string="New Albums" type="albums" />
      <Section albumData={songs} string="Songs" type="songs" />
      <Faq />
      <MusicBar />
    </div>
  );
}
