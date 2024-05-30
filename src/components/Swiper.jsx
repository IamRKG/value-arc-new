import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default function HomeSwiper() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <img src="../src/assets/images/Egale.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_1.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_2.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_3.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_4.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_5.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_6.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_7.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_8.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_9.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_10.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_11.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_12.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_13.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_14.png" alt="asdas" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/images/Home-page-image_15.png" alt="asdas" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
