import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTitle } from "../store/filterSlice";

export const Input = ({ name }) => {
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
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  const someData = watch("searchFilter");

  useEffect(() => {
    dispatch(setTitle(someData));
  }, [someData]);

  return (
    <form
      className="mb-10 border-b pb-3 border-light_gray flex justify-between items-center"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        // dispatch(setTitle(data.searchFilter));
      })}
    >
      <input
        {...register("searchFilter", { required: true })}
        placeholder="Search..."
        type="text"
        className="min-w-[180px] focus:outline-none placeholder:text-dark_gray text-dark_gray"
      />
      <input
        type="submit"
        className="bg-search bg-center bg-no-repeat text-transparent cursor-pointer"
      />
    </form>
  );
};
