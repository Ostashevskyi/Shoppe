import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTitle } from "@/store/filterSlice";

export const SearchInput = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const someData = watch("searchFilter");

  useEffect(() => {
    dispatch(setTitle(someData));
  }, [someData]);
  return (
    <form className="mb-10 border-b pb-3 border-light_gray flex justify-between items-center">
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
