import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MusicBar from "../MusicBar/MusicBar";
import BackButton from "../BackButton/BackButton";
import style from "./AlbumDetailsPage.module.css";
import axios from "axios";
import AlbumContentPage from "../AlbumContentPage/AlbumContentPage";
import { useParams } from "react-router-dom";
export default function AlbumDetailsPage() {
  let { slug } = useParams();

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`https://qtify-backend-labs.crio.do/album/${slug}`);
        const response = await axios.get(
          `https://qtify-backend-labs.crio.do/album/${slug}`
        );
        setSongs(response.data);
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <Navbar />
      <BackButton />
      {loading && <AlbumContentPage data={songs} />}
      <MusicBar />
    </div>
  );
}
