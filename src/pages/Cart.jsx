import React, { useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../store/shoppingCartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "@/hooks/useUserID";
import CartCard from "../components/Cards/CartCard";
import { ButtonXL } from "@/components/Buttons/ButtonXL";

const Cart = () => {
  const { user } = useAuth0();

  const userID = useUserID(user);
  const dispatch = useDispatch();

  const { shoppingCart, subTotalPrice, shippingPrice, totalPrice } =
    useSelector((state) => state.shoppingCart);

  useEffect(() => {
    dispatch(getShoppingCart({ userID }));
  }, [user]);

  return (
    <Wrapper>
      <main className="mb-48">
        <p className="heading1D mt-24 mb-16 text-center">Shopping Cart</p>
        <div className="flex gap-36">
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
          <section className="">
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
            <ButtonXL>PROCEED TO CHECKOUT</ButtonXL>
          </section>
        </div>
      </main>
    </Wrapper>
  );
};

export default Cart;
