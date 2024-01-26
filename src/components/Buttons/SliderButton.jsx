import React from "react";
import { NavLink } from "react-router-dom";

export const SliderButton = ({ children }) => {
  return (
    <NavLink to="/catalog">
      <button
        className="py-3 px-8 xs:py-1 xs:px-2 sm:py-1 sm:px-2 border-2  border-white heading4D font-semibold bg-transparent text-white rounded-md
      hover:bg-black hover:text-white hover:border-black
      active:opacity-80"
      >
        {children}
      </button>
    </NavLink>
  );
};
