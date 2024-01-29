import React from "react";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import useCartProduct from "@/hooks/useCartProduct";

import DeleteIcon from "../icons/Delete";

import { deleteShoppingCart } from "@/store/shoppingCartSlice";

import { calcScreenWidth } from "@/utils/calcScreenWidth";

import Counter from "@/components/shared/Counter";

const CartCard = ({ productInfo, userID, id }) => {
  const { name } = productInfo;
  const { data } = useCartProduct({ title: name });
  const dispatch = useDispatch();

  const product = data?.product;

  const deleteCartProduct = (userID, id) => {
    dispatch(deleteShoppingCart({ userID, id }));
  };

  const width = calcScreenWidth();

  return (
    <div className="flex gap-32 xs:gap-16 sm:gap-16 border-b pb-9 mb-9 border-gray ">
      <div className="flex gap-10 xs:gap-2 sm:gap-2 md:gap-2">
        <NavLink to={`/products/${product?.slug}`}>
          <img
            src={product?.image?.responsiveImage?.src}
            className="w-[136px]"
          />
        </NavLink>
        <div className="flex xl:gap-32 xxl:gap-32 lg:gap-32 xs:flex-col xs:justify-between sm:flex-col sm:justify-between md:flex-col md:justify-between ">
          <div className="flex flex-col gap-3 xs:gap-1 sm:gap-1 md:gap-1">
            <p className="heading3D max-w-[100px] xs:text-xs sm:text-sm md:text-sm">
              {product?.title}
            </p>
            <p className="heading3D xs:text-xs xs:min-w-[85px] sm:min-w-[100px] sm:text-sm md:text-sm text-dark_gray">
              Black / Medium
            </p>
            {product?.isDiscount ? (
              <div className="flex gap-4 mt-4 flex-col xs:gap-1 sm:gap-1 xs:mt-0 sm:mt-0 md:gap-1 md:mt-0">
                <p className="text-errors line-through heading4D font-normal xs:text-xs sm:text-sm md:text-sm">
                  $ {product?.price?.toFixed(2)}
                </p>
                <p className="text-accent heading4D font-normal xs:text-xs sm:text-sm md:text-sm">
                  $ {product?.salePrice?.toFixed(2)}
                </p>
              </div>
            ) : (
              <p className="text-accent heading4D font-normal xs:text-xs sm:text-sm md:text-sm">
                $ {product?.price?.toFixed(2)}
              </p>
            )}
          </div>
          <Counter product={productInfo} userID={userID} id={id} />
        </div>
      </div>
      <div className="flex items-start gap-12">
        <button onClick={() => deleteCartProduct(userID, id)}>
          {width < 976 ? (
            <DeleteIcon w={6} h={6} />
          ) : (
            <DeleteIcon w={12} h={12} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CartCard;
