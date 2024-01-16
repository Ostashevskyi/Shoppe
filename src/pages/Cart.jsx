import React, { useEffect, useMemo } from "react";
import Wrapper from "@/components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../store/shoppingCartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "@/hooks/useUserID";
import CartCard from "../components/Cards/CartCard";
import { ButtonXL } from "@/components/Buttons/ButtonXL";
import { NavLink } from "react-router-dom";
import { putOrders } from "../store/orderSlice";

const Cart = () => {
  const { user } = useAuth0();
  const email = user?.email;

  const userID = useUserID(user);
  const dispatch = useDispatch();

  const { shoppingCart, subTotalPrice, shippingPrice, totalPrice } =
    useSelector((state) => state.shoppingCart);

  const handlePutOrders = (userID, email, totalPrice, shoppingCart) => {
    dispatch(putOrders(userID, email, totalPrice, shoppingCart));
  };

  useEffect(() => {
    dispatch(getShoppingCart({ userID }));
  }, [subTotalPrice, userID]);

  const price = useMemo(() => {
    return (
      <section>
        <p className="mt-9 mb-11 heading2D">Cart totals</p>

        <div className="grid grid-cols-1 grid-rows-2 gap-x-32 gap-y-5 pb-9 mb-10 border-b border-gray">
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
            handlePutOrders({ userID, email, totalPrice, shoppingCart })
          }
        >
          PROCEED TO CHECKOUT
        </ButtonXL>
      </section>
    );
  }, [subTotalPrice]);

  return (
    <Wrapper>
      <main className="mb-48">
        {shoppingCart?.length ? (
          <div>
            <p className="heading1D mt-24 mb-16 text-center">Shopping Cart</p>
            <div className="flex justify-between">
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
          <div className="flex flex-col items-center mt-12">
            <img
              className="w-full h-auto max-w-sm"
              src="/empty_cart.webp"
              alt="emptyCart"
            />
            <p className="heading2D font-bold mb-4">Empty Cart</p>
            <p className="heading4D text-gray mb-5">
              Looks like you haven't made your choise yet...
            </p>
            <NavLink to={"/catalog"}>
              <ButtonXL>Back to Catalog</ButtonXL>
            </NavLink>
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default Cart;
