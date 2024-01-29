import React from "react";

import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Image } from "react-datocms/image";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductSlider = ({ products }) => {
  return (
    <div className="md:max-w-[540px]  w-full">
      <Swiper
        modules={[Scrollbar]}
        scrollbar
        slidesPerView={1}
        className="product-slider md:justify-center"
      >
        {products?.map((product, index) => {
          const { responsiveImage } = product;

          return (
            <SwiperSlide key={index}>
              <Image data={responsiveImage} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
