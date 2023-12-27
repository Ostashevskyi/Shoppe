import React from "react";

export const ButtonM = ({ children, disabled }) => {
  return (
    <button
      className={`${
        disabled &&
        "bg-gray border-none text-dark_gray hover:bg-gray cursor-default"
      } w-[360px] h-[53px] justify-center items-center uppercase body_large border font-semibold border-black rounded-md 
      ${!disabled && "hover:bg-black hover:text-white  active:opacity-80"}
       `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
