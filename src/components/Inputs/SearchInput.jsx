import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCatalogTitle } from "@/store/filterSlice";
import { useSearchParams } from "react-router-dom";
import { setBlogTitle } from "../../store/filterSlice";

export const SearchInput = ({ type }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (inputValue !== undefined) {
      searchParams.set("title", inputValue);
    }

    if (!inputValue?.length) {
      searchParams.delete("title");
    }

    setSearchParams(searchParams);

    type
      ? dispatch(setCatalogTitle(inputValue))
      : dispatch(setBlogTitle(inputValue));
  }, [inputValue]);

  const onSubmit = (e) => {
    e.preventDefaul();
  };

  return (
    <form
      className="mb-10 border-b pb-3 border-light_gray flex justify-between items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("searchFilter", { required: true })}
        placeholder="Search..."
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="min-w-[180px] focus:outline-none placeholder:text-dark_gray text-dark_gray"
      />
      <input
        type="submit"
        className="bg-search bg-center bg-no-repeat text-transparent cursor-pointer"
      />
    </form>
  );
};
