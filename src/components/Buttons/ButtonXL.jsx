import React from "react";

export const ButtonXL = ({ children, onClick }) => {
  return (
    <button
      className={`w-full py-4 uppercase border border-black body_large font-semibold bg-black text-white rounded-md
      hover:bg-white hover:text-black
        active:bg-Light_gray`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
