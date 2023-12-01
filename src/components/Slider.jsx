import React from "react";

import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Image } from "react-datocms/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonM } from "./Button";

const Slider = ({ data }) => {
  const sliderImages = data;

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="mt-4"
    >
      {sliderImages?.map((el) => {
        return (
          <SwiperSlide className="relative">
            <Image data={el.responsiveImage} />
            <div className="absolute z-10 top-[70%] left-10">
              <ButtonM>View Product</ButtonM>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
