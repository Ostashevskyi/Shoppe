import React from "react";

const CheckoutButton = () => {
  return (
    <button
      className={`w-full py-4 uppercase border border-black body_large font-semibold bg-black text-white rounded-md focus:scale-95
          hover:bg-white hover:text-black
            active:bg-Light_gray`}
      onClick={() => handlePutOrders()}
    >
      {children}
    </button>
  );
};

export default CheckoutButton;