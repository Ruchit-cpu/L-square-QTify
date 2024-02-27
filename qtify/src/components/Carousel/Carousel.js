import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import style from "./Carousel.module.css";
import "swiper/css";
import Card from "../Card/Card";
import LeftButton from "../LeftButton/LeftButton";
import RightButton from "../RightButton/RightButton";

const Controls = ({ albumData }) => {
  // const swiper = useSwiper();

  // useEffect(() => {
  //   swiper.slideTo(0, 1000);
  // }, [albumData]);

  return <></>;
};

export default function Carousel({ albumData }) {
  // console.log(albumData);
  return (
    <div className={style.container}>
      <Swiper
        style={{ padding: "0px 20px" }}
        // modules={Navigation}
        // initialSlide={0}
        slidesPerView={"7"}
        spaceBetween={40}
        allowTouchMove
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },
        //   "@0.75": {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
        //   "@1.00": {
        //     slidesPerView: 6,
        //     spaceBetween: 40,
        //   },
        //   "@1.50": {
        //     slidesPerView: 7,
        //     spaceBetween: 40,
        //   },
        // }}
      >
        {/* <Controls albumData={albumData} /> */}
        <LeftButton />
        <RightButton />
        {albumData.map((album) => {
          return (
            <SwiperSlide key={album.id}>
              <Card album={album} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
