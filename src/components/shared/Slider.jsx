import React from "react";

import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Image } from "react-datocms/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderButton } from "@/components/Buttons/SliderButton";

const Slider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="mt-4"
    >
      {data?.map((el, index) => {
        const { sliderImage } = el;
        const { responsiveImage } = sliderImage;
        return (
          <SwiperSlide key={index} className="relative">
            <Image data={responsiveImage} />
            <div className="absolute z-10 top-[40%] left-[5%] flex flex-col gap-12 text-white">
              <div className="flex flex-col gap-4 max-w-[300px]">
                <p className="heading1D ">{el.sliderTitle}</p>
                <p className="heading2D">$ {el.sliderPrice.toFixed(2)} </p>
              </div>
              <SliderButton>View Product</SliderButton>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
