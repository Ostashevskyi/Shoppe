import React from "react";

export const SubmitInput = ({ label }) => {
  return (
    <input
      type="submit"
      value={label}
      className="bg-black w-full flex min-h-[53px] rounded-md text-white uppercase justify-center items-center"
    />
  );
};
