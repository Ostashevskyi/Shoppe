import React from "react";

export const ButtonXL = ({ children, onClick }) => {
  return (
    <button
      className={`w-full py-4 uppercase border border-button bg-white_to_black  body_large font-semibold text-text rounded-md focus:scale-95
      hover:bg-button hover:text-white_to_black
        active:bg-Light_gray`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
