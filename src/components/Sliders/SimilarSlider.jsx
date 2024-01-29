import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/Cards/ProductCard";

const SimilarSlider = ({ products }) => {
  return (
    <Swiper slidesPerView={2}>
      {products?.map((product, index) => (
        <SwiperSlide key={index} className="max-w-[136px] mr-3">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarSlider;
