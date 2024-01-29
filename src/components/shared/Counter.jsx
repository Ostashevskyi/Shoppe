import React, { useEffect, useState } from "react";
import { supabase } from "@/database";
import { useDispatch } from "react-redux";
import { getShoppingCartSubTotal } from "@/store/shoppingCartSlice";
import { calcScreenWidth } from "@/utils/calcScreenWidth";

const Counter = ({ product, userID, id }) => {
  const [quantity, setQuantity] = useState();

  const dispatch = useDispatch();

  const increaseQunatity = async (value) => {
    const { data, error } = await supabase
      .from("shopping_cart")
      .update({
        quantity: quantity + value,
        total_price: product?.price * (quantity + 1),
      })
      .eq("id", id, "user_id", userID)
      .select();

    setQuantity(data[0]?.quantity);
    dispatch(getShoppingCartSubTotal({ userID }));

    if (error) {
      console.log(error.message);
    }
  };

  const decreaseQunatity = async (value) => {
    const { data, error } = await supabase
      .from("shopping_cart")
      .update({
        quantity: quantity - value,
        total_price: product?.price * (quantity - 1),
      })
      .eq("id", id, "user_id", userID)
      .select();

    setQuantity(data[0]?.quantity);

    dispatch(getShoppingCartSubTotal({ userID }));

    if (error) {
      console.log(error.message);
    }
  };

  const getQuantityOfProduct = async (userID, id) => {
    const { data, error } = await supabase
      .from("shopping_cart")
      .select()
      .eq("id", id, "user_id", userID);

    setQuantity(data[0]?.quantity);

    if (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getQuantityOfProduct(userID, id);
    dispatch(getShoppingCartSubTotal({ userID }));
  }, []);

  const width = calcScreenWidth();

  const MobileCounter = () => {
    return (
      <div className="flex gap-2 text-xs text-dark_gray">
        <p>QTY:</p>
        <button
          onClick={() => {
            decreaseQunatity(1);
          }}
          disabled={quantity === 1}
          className="cursor-pointer"
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => {
            increaseQunatity(1);
          }}
        >
          +
        </button>
      </div>
    );
  };

  return width > 976 ? (
    <div className="flex gap-6 text-dark_gray bg-light_gray w-[102px] h-[53px] items-center justify-center rounded-md">
      <button
        onClick={() => {
          decreaseQunatity(1);
        }}
        disabled={quantity === 1}
        className="cursor-pointer"
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => {
          increaseQunatity(1);
        }}
      >
        +
      </button>
    </div>
  ) : (
    <MobileCounter />
  );
};

export default Counter;
