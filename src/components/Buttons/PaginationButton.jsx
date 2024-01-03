import React from "react";

export const PaginationButton = ({ children, func }) => {
  return (
    <button
      className="w-[40px] h-[40px] bg-white text-black rounded-md border-light_gray border"
      onClick={func}
    >
      {children}
    </button>
  );
};
