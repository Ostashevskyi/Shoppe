import React from "react";

export const ButtonXS = ({ children }) => {
  return (
    <button
      className="py-4 px-8 text-white font-semibold border border-black bg-black rounded-md body_large 
      hover:bg-white hover:text-black 
      active:bg-Light_gray "
    >
      {children}
    </button>
  );
};
