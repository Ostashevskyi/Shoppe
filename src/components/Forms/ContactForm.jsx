import React from "react";

import { useForm } from "react-hook-form";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { InputSelect } from "@/components/Selects/InputSelect";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-24 justify-center xs:gap-11 sm:gap-11"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex lg:items-center justify-between gap-28 flex-wrap xs:gap-11 xs:flex-col sm:gap-11 sm:flex-col">
        <div className="flex-1">
          <Input label={"First Name"} register={register} required />
          {errors["First Name"] && <ErrorMessage required />}
        </div>
        <div className="flex-1">
          <Input label={"Last Name"} register={register} required />
          {errors["Last Name"] && <ErrorMessage required />}
        </div>
      </div>
      <div className="flex lg:items-center justify-between gap-28 flex-wrap xs:flex-col xs:gap-11 sm:gap-11 sm:flex-col ">
        <div className="xs:w-full flex-1">
          <Input
            label={"Email"}
            register={register}
            required
            pattern={EMAIL_PATTERN}
          />
          {errors["Email"]?.type === "required" && <ErrorMessage required />}
          {errors["Email"]?.type === "pattern" && <ErrorMessage />}
        </div>
        <div className="xs:w-full flex-1">
          <InputSelect label={"Subject"} register={register} />
        </div>
      </div>
      <div>
        <Input label={"Message"} register={register} required />
        {errors.Message && <ErrorMessage required />}
      </div>
      <div className="flex justify-center lg:min-w-[500px] w-full">
        <SubmitInput label={"Send"} />
      </div>
    </form>
  );
};
