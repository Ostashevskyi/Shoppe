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
        placeholder={name}
        required
        className="border-b-2 border-gray pb-2 min-w-[243px]
          placeholder:text-dark_gray
          focus:outline-none"
        re
      />
      <ErrorMessage errors={errors} name="email" />
    </div>
  );
};

export const NewsletterInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center gap-32 border-b-2 pb-3"
    >
      <input
        placeholder="Give an email, get the newsletter."
        type="email"
        required
        className="min-w-[243px] focus:outline-none placeholder:text-dark_gray text-dark_gray"
      />
      <input
        type="submit"
        className="bg-arrow bg-center bg-no-repeat text-transparent"
      />
    </form>
  );
};

export const SearchInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center gap-5 border-b-2 border-light_gray pb-3 mb-10"
    >
      <input
        placeholder="Search..."
        type="text"
        required
        className="min-w-[180px] focus:outline-none placeholder:text-dark_gray text-dark_gray"
      />
      <input
        type="submit"
        className="bg-search bg-center bg-no-repeat text-transparent"
      />
    </form>
  );
};
