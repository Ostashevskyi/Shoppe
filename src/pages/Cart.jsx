import React, { useEffect, useMemo } from "react";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import { useUserID } from "@/hooks/useUserID";

import { putOrders } from "@/store/orderSlice";
import { getShoppingCart } from "@/store/shoppingCartSlice";

import Wrapper from "@/components/Wrapper";
import CartCard from "@/components/Cards/CartCard";
import { ButtonXL } from "@/components/Buttons/ButtonXL";
import getTheme from "@/utils/getTheme";

const Cart = () => {
  const { user } = useAuth0();
  const email = user?.email;

  const theme = getTheme();

  const userID = useUserID(user);
  const dispatch = useDispatch();

  const { shoppingCart, subTotalPrice, shippingPrice, totalPrice } =
    useSelector((state) => state.shoppingCart);

  const { error } = useSelector((state) => state.orders);

  const handlePutOrders = (
    userID,
    email,
    totalPrice,
    shoppingCart,
    subTotalPrice,
    shippingPrice
  ) => {
    dispatch(
      putOrders(
        userID,
        email,
        totalPrice,
        shoppingCart,
        subTotalPrice,
        shippingPrice
      )
    );
  };

  useEffect(() => {
    dispatch(getShoppingCart({ userID }));
  }, [subTotalPrice, userID]);

  const price = useMemo(() => {
    return (
      <section className="xs:bg-light_gray py-4 rounded-md sm:bg-light_gray text-text">
        <p className="mt-9 mb-11 heading2D">Cart totals</p>

        <div className="grid grid-cols-1 grid-rows-2 gap-x-32 gap-y-5 pb-9 mb-10 border-b border-gray ">
          <p className="uppercase">Subtotal</p>
          <p className="text-dark_gray font-medium">
            $ {subTotalPrice.toFixed(2)}
          </p>
          <p className="row-start-2 uppercase">Shipping</p>
          <p className="row-start-2 text-dark_gray font-medium">
            $ {shippingPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between body_large mb-14">
          <p>Total</p>
          <p>$ {totalPrice.toFixed(2)}</p>
        </div>
        <ButtonXL
          onClick={() =>
            handlePutOrders({
              userID,
              email,
              totalPrice,
              shoppingCart,
              subTotalPrice,
              shippingPrice,
            })
          }
        >
          PROCEED TO CHECKOUT
        </ButtonXL>
        {error && (
          <p className="max-w-[284px] text-center mt-2 text-errors">{error}</p>
        )}
      </section>
    );
  }, [subTotalPrice, error]);

  return (
    <Wrapper>
      <main className="mb-48 mx-4">
        {shoppingCart?.length ? (
          <div>
            <p className="heading1D mt-24 mb-16 text-text text-center xs:text-base xs:text-left xs:mt-6 xs:mb-2 sm:text-base sm:text-left sm:mt-6 sm:mb-2 md:text-lg md:text-left md:mt-6 md:mb-2 ">
              Shopping Cart
            </p>
            <div className="flex justify-between xs:flex-col sm:flex-col ">
              <section>
                {shoppingCart?.map((product) => (
                  <CartCard
                    productInfo={product}
                    key={product.id}
                    userID={userID}
                    id={product.id}
                  />
                ))}
              </section>
              {price}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-12 mx-4">
            {theme === "dark" ? (
              <img
                className="w-full h-auto max-w-sm"
                src="/empty_cart_dark.webp"
                alt="emptyCart"
              />
            ) : (
              <img
                className="w-full h-auto max-w-sm"
                src="/empty_cart.webp"
                alt="emptyCart"
              />
            )}

            <p className="heading2D font-bold mb-4 text-text">Empty Cart</p>
            <p className="heading4D text-gray mb-5">
              Looks like you haven't made your choise yet...
            </p>
            <div className="xs:w-full sm:w-full w-[395px]">
              <NavLink to={"/catalog"} className="focus:scale-95">
                <ButtonXL>Back to Catalog</ButtonXL>
              </NavLink>
            </div>
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default Cart;
