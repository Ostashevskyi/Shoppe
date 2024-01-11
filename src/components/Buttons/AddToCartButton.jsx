import React from "react";
import { ButtonM } from "@/components/Buttons/ButtonM";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "@/hooks/useUserID";
import { supabase } from "@/database";

const AddToCartButton = ({ buttonType, product }) => {
  const { user } = useAuth0();

  const handleClick = async () => {
    const userID = useUserID(user);

    const { error } = await supabase.from("shopping_cart").insert({
      name: product.title,
      quantity: 1,
      user_id: userID,
      price: product.isDiscount ? product.salePrice : product.price,
      total_price: product.isDiscount ? product.salePrice : product.price,
    });

    error && console.log(error);
  };

  return buttonType === "hover" ? (
    <button
      className="uppercase font-bold body_large active:opacity-70"
      onClick={() => handleClick()}
    >
      Add to cart
    </button>
  ) : (
    <ButtonM disabled={!product?.isAvaliable} onClick={handleClick}>
      Add to cart
    </ButtonM>
  );
};

export default AddToCartButton;
