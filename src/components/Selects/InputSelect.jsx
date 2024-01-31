import React from "react";

export const InputSelect = ({ label, register, required }) => {
  return (
    <select
      {...register(label, { required })}
      className="border-b-2 border-gray pb-2 w-full text-dark_gray placeholder:text-dark_gray focus:outline-none bg-transparent"
      defaultValue="Subject"
    >
      <option value="Subject" hidden>
        Subject
      </option>
      <option value={"Option 1"} className="text-text bg-backgroud">
        Option 1
      </option>
      <option value={"Option 2"} className="text-text bg-backgroud">
        Option 2
      </option>
      <option value={"Option 3"} className="text-text bg-backgroud">
        Option 3
      </option>
    </select>
  );
};
