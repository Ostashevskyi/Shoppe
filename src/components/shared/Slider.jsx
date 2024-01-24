import React, { useEffect, useState } from "react";

import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Image } from "react-datocms/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderButton } from "@/components/Buttons/SliderButton";

const Slider = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className="flex justify-center items-center md:px-4 lg:px-4">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="mt-4 xs:max-w-[288px] sm:max-w-[288px]"
      >
        {data?.map((el, index) => {
          const { sliderImage } = el;
          const { mobileSliderImage } = el;

          return (
            <SwiperSlide key={index} className="relative">
              <Image
                data={
                  width >= 768
                    ? sliderImage.responsiveImage
                    : mobileSliderImage.responsiveImage
                }
              />
              <div className="absolute z-10 top-[40%] xs:top-[47%] sm:top-[47%] left-[5%] flex flex-col gap-12 xs:gap-2 sm:gap-2 md:gap-4 text-white xs:max-w-[130px] sm:max-w-[130px]">
                <div className="flex flex-col gap-4 xs:gap-1 sm:gap-1 max-w-[300px]">
                  <p className="font-medium text-3xl xs:text-xl sm:text-xl">
                    {el.sliderTitle}
                  </p>
                  <p className="font-normal text-2xl leading-9  xs:text-base sm:text-base">
                    $ {el.sliderPrice.toFixed(2)}{" "}
                  </p>
                </div>
                <SliderButton>View Product</SliderButton>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
