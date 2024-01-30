import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import useProducts from "@/hooks/useProducts";
import { useUserID } from "@/hooks/useUserID";
import useSliderImages from "@/hooks/useSliderImages";

import { getProducts } from "@/store/productsSlice";
import { getShoppingCart } from "@/store/shoppingCartSlice";

import Wrapper from "@/components/Wrapper";
import Slider from "@/components/Sliders/Slider";
import ProductCard from "@/components/Cards/ProductCard";
import { AccentLink } from "@/components/Links/AccentLink";

const Home = () => {
  const sliderImages = useSliderImages();
  const { user } = useAuth0();
  const userID = useUserID(user);

  const { data } = sliderImages;

  const products = useProducts();
  const product = products?.data;
  const allProducts = product?.allProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getShoppingCart({ userID }));
  }, [dispatch]);

  return (
    <Wrapper>
      <Slider data={data?.allSliders} />
      <div className="mt-16 mb-64 xs:mb-20 sm:mb-20">
        <div
          className="flex items-center justify-between mb-10
          xs:mx-4 sm:mx-4 md:mx-4 lg:mx-4"
        >
          <p className="heading1D xs:text-base sm:text-xl">Shop The Latest</p>
          <AccentLink to="/catalog">View All</AccentLink>
        </div>
        <div
          className="flex justify-between xs:justify-center xs:gap-5 flex-wrap 
           sm:mx-4 md:mx-4 lg:mx-4"
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
