import React from "react";

export const Input = ({
  label,
  register,
  required,
  pattern,
  type,
  small,
  value,
}) => {
  return (
    <div>
      <input
        {...register(label, { required, pattern })}
        placeholder={required ? `${label} *` : label}
        type={type ? type : "text"}
        value={value && value}
        minLength={type === "password" ? 6 : 1}
        className={`border-b-2 border-gray bg-transparent pb-2 text-text ${
          small && "max-w-[270px]"
        } w-full
         placeholder:text-dark_gray
         focus:outline-none`}
      />
    </div>
  );
};
