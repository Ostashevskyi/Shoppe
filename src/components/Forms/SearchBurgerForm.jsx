import React from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchBurgerForm = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`/search?search=${data["searchBurger"]}`);
    document.querySelector("body").classList.remove("fixed");
  };

  return (
    <form
      className="flex gap-2 items-center p-[10px] bg-light_gray rounded-md mb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SearchIcon />
      <input
        {...register("searchBurger")}
        type="text"
        placeholder="Search"
        className="w-full bg-transparent focus:outline-none text-dark_gray"
      />
    </form>
  );
};

export default SearchBurgerForm;
