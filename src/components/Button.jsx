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

export const ButtonM = ({ children }) => {
  return (
    <button
      className="py-4 px-32 uppercase body_large border font-semibold border-black rounded-md 
    hover:bg-black hover:text-white
      active:opacity-90"
    >
      {children}
    </button>
  );
};

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
