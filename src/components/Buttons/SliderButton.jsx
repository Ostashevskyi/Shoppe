import React from "react";

export const SliderButton = ({ children }) => {
  return (
    <button
      className="py-3 px-8 border-2 border-white heading4D font-semibold bg-transparent text-white rounded-md
      hover:bg-black hover:text-white hover:border-black
      active:opacity-80"
    >
      {children}
    </button>
  );
};
