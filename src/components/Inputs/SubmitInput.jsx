import React from "react";

export const SubmitInput = ({ label }) => {
  return (
    <input
      type="submit"
      value={label}
      className="bg-white_to_black w-full flex min-h-[53px] border border-button rounded-md text-text uppercase justify-center items-center hover:bg-button hover:text-white_to_black "
    />
  );
};
