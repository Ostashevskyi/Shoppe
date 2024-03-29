import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import { useUserID } from "@/hooks/useUserID";

import { addShoppingCart, getShoppingCart } from "@/store/shoppingCartSlice";

const AddToCartButton = ({ product }) => {
  const { user } = useAuth0();
  const userID = useUserID(user);

  const [isInCart, setIsInCart] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const { shoppingCart } = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    dispatch(getShoppingCart({ userID }));
  }, [userID]);

  useEffect(() => {
    shoppingCart?.forEach((el) => {
      el.name === product?.title && setIsInCart(true);
    });

    setIsDisabled(isInCart || !product?.isAvaliable);
  }, [shoppingCart, product, isDisabled, isInCart]);

  const handleClick = async () => {
    dispatch(addShoppingCart({ userID, product }));
  };

  console.log(isDisabled);

  return (
    <div>
      <button
        className={`${
          isDisabled &&
          "bg-gray border-none text-dark_gray hover:bg-gray cursor-default"
        } 
        w-full h-[53px] justify-center items-center uppercase body_large border font-semibold border-button rounded-md focus:scale-95 hover:bg-text hover:text-white_to_black
    ${
      !isDisabled &&
      " text-text hover:bg-black hover:text-white active:opacity-80"
    }
     `}
        disabled={isDisabled}
        onClick={() => handleClick()}
      >
        {isInCart
          ? "In cart"
          : !product?.isAvaliable
          ? "Sold out"
          : "Add to cart"}
      </button>
    </div>
  );
};

export default AddToCartButton;
