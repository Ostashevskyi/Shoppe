import React from "react";

export const InputSelect = ({ label, register, required }) => {
  return (
    <select
      {...register(label, { required })}
      className="border-b-2 border-gray pb-2 min-w-[400px] text-dark_gray placeholder:text-dark_gray focus:outline-none"
      defaultValue="Subject"
    >
      <option value="Subject" hidden>
        Subject
      </option>
      <option value={"Option 1"}>Option 1</option>
      <option value={"Option 2"}>Option 2</option>
      <option value={"Option 3"}>Option 3</option>
    </select>
  );
};
