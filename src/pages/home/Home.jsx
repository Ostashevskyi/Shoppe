import React from "react";

import useSliderImages from "@/hooks/useSliderImages";

import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { AccentLink } from "@/components/Link";
import useProducts from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  const sliderImages = useSliderImages();
  const { data } = sliderImages;

  const products = useProducts();
  const product = products?.data;
  const allProducts = product?.allProducts;

  return (
    <div className="max-w-[1248px] m-auto">
      <Header />
      <Slider data={data?.allSliders} />
      <div className="mt-16 mb-64">
        <div className="flex items-center justify-between mb-10">
          <p className="heading1D">Shop The Latest</p>
          <AccentLink>View All</AccentLink>
        </div>
        <div className="flex justify-between flex-wrap">
          {allProducts?.map((el, index) => {
            return <ProductCard key={index} product={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
