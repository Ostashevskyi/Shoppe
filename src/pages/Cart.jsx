import React, { useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../store/shoppingCartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "@/hooks/useUserID";
import CartCard from "../components/Cards/CartCard";

const Cart = () => {
  const { user } = useAuth0();

  const userID = useUserID(user);
  const dispatch = useDispatch();

  const { shoppingCart } = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    dispatch(getShoppingCart(userID));
  }, [user]);

  return (
    <Wrapper>
      <main className="mb-48">
        <p className="heading1D mt-24 mb-16 text-center">Shopping Cart</p>
        <div className="flex">
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
          <section>
            <p>Cart totals</p>
            <div>
              <p>Subtotal</p>
              <p></p>
            </div>
          </section>
        </div>
      </main>
    </Wrapper>
  );
};

export default Cart;
