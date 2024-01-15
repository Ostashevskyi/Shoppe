import React from "react";
import useCartProduct from "../../hooks/useCartProduct";
import Counter from "@/components/shared/Counter";
import DeleteIcon from "../icons/Delete";
import { useDispatch } from "react-redux";
import { deleteShoppingCart } from "@/store/shoppingCartSlice";

const CartCard = ({ productInfo, userID, id }) => {
  const { name } = productInfo;
  const { data } = useCartProduct({ title: name });
  const dispatch = useDispatch();

  const product = data?.product;

  const deleteCartProduct = (userID, id) => {
    dispatch(deleteShoppingCart({ userID, id }));
  };

  return (
    <div className="flex gap-32 border-b pb-9 mb-9 border-gray">
      <div className="flex gap-10">
        <img src={product?.image?.responsiveImage?.src} />
        <div className="flex flex-col gap-3">
          <p className="heading3D max-w-[100px] "> {product?.title}</p>
          {product?.isDiscount ? (
            <div className="flex gap-4 mt-4 flex-col">
              <p className="text-errors line-through heading4D font-normal">
                $ {product?.price?.toFixed(2)}
              </p>
              <p className="text-accent heading4D font-normal">
                $ {product?.salePrice?.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-accent heading4D font-normal">
              $ {product?.price?.toFixed(2)}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-start gap-12">
        <Counter product={productInfo} userID={userID} id={id} />
        <button onClick={() => deleteCartProduct(userID, id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
