import React from "react";

export const ButtonXL = ({ children }) => {
  return (
    <button
      className="py-4 px-56 uppercase border border-black body_large font-semibold bg-black text-white rounded-md
      hover:bg-white hover:text-black
        active:bg-Light_gray "
    >
      {children}
    </button>
  );
};
