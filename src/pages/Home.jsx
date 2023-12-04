import React from "react";

import useProducts from "@/hooks/useProducts";
import useSliderImages from "@/hooks/useSliderImages";

import Slider from "@/components/Slider";
import Wrapper from "@/components/Wrapper";
import { AccentLink } from "@/components/Link";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  const sliderImages = useSliderImages();
  const { data } = sliderImages;

  const products = useProducts();
  const product = products?.data;
  const allProducts = product?.allProducts;

  return (
    <Wrapper>
      <Slider data={data?.allSliders} />
      <div className="mt-16 mb-64">
        <div
          className="flex items-center justify-between mb-10
          xs:mx-2
        sm:px-5"
        >
          <p
            className="heading1D 
          sm: heading2D"
          >
            Shop The Latest
          </p>
          <AccentLink>View All</AccentLink>
        </div>
        <div
          className="flex justify-between flex-wrap 
          xs:mx-2
        sm:justify-center"
        >
          {allProducts?.map((el, index) => {
            return <ProductCard key={index} product={el} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
