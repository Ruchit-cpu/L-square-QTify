import React from "react";
import style from "./HeroSection.module.css";
import heroImage from "../../assets/hero_headphones.png";

export default function HeroSection() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <p style={{ margin: 0 }}>100 Thousand Songs, ad-free</p>
        <p style={{ margin: 0 }}>Over thousands podcast episodes</p>
      </div>
      <div>
        <img src={heroImage} alt="HeroImage" width={212} height={212} />
      </div>
    </div>
  );
}
