import React, { useEffect, useState } from "react";
import { supabase } from "@/database";

const Counter = ({ product, userID, id }) => {
  const [quantity, setQuantity] = useState();

  const increaseQunatity = async (value) => {
    console.log(quantity);
    const { data, error } = await supabase
      .from("shopping_cart")
      .update({
        quantity: quantity + value,
        total_price: product?.price * (quantity + 1),
      })
      .eq("id", id, "user_id", userID)
      .select();

    setQuantity(data[0]?.quantity);

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
  }, []);

  return (
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
  );
};

export default Counter;
