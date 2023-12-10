import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTitle } from "../store/filterSlice";

export const Input = ({ label, register, required, pattern, type }) => {
  return (
    <div>
      <input
        {...register(label, { required, pattern })}
        placeholder={required ? `${label} *` : label}
        type={type ? type : "text"}
        className="border-b-2 border-gray pb-2 min-w-[400px] w-full
          placeholder:text-dark_gray
          focus:outline-none"
      />
    </div>
  );
};

export const InputSelect = ({ label, register, required }) => {
  return (
    <>
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
    </>
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

export const SubmitInput = ({ label }) => {
  return (
    <input
      type="submit"
      value={label}
      className="bg-black min-w-[500px] flex- min-h-[53px] rounded-md text-white uppercase"
    />
  );
};
