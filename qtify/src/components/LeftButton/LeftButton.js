import React, { useEffect, useState } from "react";
import leftIcon from "../../assets/LeftArrow.svg";
import style from "./LeftButton.module.css";
import { useSwiper } from "swiper/react";
export default function LeftButton() {
  const swiper = useSwiper();
  // const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  // console.log(isBeginning);
  // useEffect(() => {
  //   swiper.on("slideChange", function () {
  //     setIsBeginning(swiper.isBeginning);
  //   });
  // }, []);
  return (
    <div className={style.customPrev}>
      {/* {!isBeginning ? (
        <img
          src={leftIcon}
          alt="Left Icon"
          onClick={() => swiper.slidePrev()}
        />
      ) : null} */}
      <img src={leftIcon} alt="Left Icon" onClick={() => swiper.slidePrev()} />
    </div>
  );
}
