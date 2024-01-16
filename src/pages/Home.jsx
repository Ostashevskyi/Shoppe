import React, { useEffect, useId } from "react";

import useProducts from "@/hooks/useProducts";
import useSliderImages from "@/hooks/useSliderImages";

import Wrapper from "@/components/Wrapper";
import Slider from "@/components/shared/Slider";
import { AccentLink } from "@/components/shared/Links";
import ProductCard from "@/components/Cards/ProductCard";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/productsSlice";
import { getShoppingCart } from "../store/shoppingCartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "@/hooks/useUserID";
import { ordersNumberGenerator } from "../utils/ordersNumberGenerator";

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
