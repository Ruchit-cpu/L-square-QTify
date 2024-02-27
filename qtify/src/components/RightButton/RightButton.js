import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import rightIcon from "../../assets/RightArrow.svg";
import style from "./RightButton.module.css";
export default function RightButton() {
  const swiper = useSwiper();
  // const [isEnd, SetIsEnd] = useState(swiper.isEnd);

  // useEffect(() => {
  //   swiper.on("slideChange", function () {
  //     SetIsEnd(swiper.isEnd);
  //   });
  // }, []);
  return (
    <div className={style.customNext}>
      {/* {!isEnd && (
        <img
          src={rightIcon}
          alt="Left Icon"
          onClick={() => swiper.slideNext()}
        />
      )} */}
      <img src={rightIcon} alt="Left Icon" onClick={() => swiper.slideNext()} />
    </div>
  );
}
