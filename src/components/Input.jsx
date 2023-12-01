import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";

export const Input = ({ type, name, pattern, errorMsg }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <input
        type={`${type}`}
        {...register(`${name}`, {
          pattern: {
            value: pattern,
            message: errorMsg,
          },
        })}
        placeholder={name}
        required
        className="border-b-2 border-gray pb-2
          placeholder:text-dark_gray
          focus:outline-none"
        re
      />
      <ErrorMessage errors={errors} name="email" />
    </div>
  );
};
