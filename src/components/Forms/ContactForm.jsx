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
      className="flex flex-col gap-24 justify-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between flex-wrap">
        <div>
          <Input label={"First Name"} register={register} required />
          {errors["First Name"] && <ErrorMessage required />}
        </div>
        <div>
          <Input label={"Last Name"} register={register} required />
          {errors["Last Name"] && <ErrorMessage required />}
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        <div>
          <Input
            label={"Email"}
            register={register}
            required
            pattern={EMAIL_PATTERN}
          />
          {errors["Email"]?.type === "required" && <ErrorMessage required />}
          {errors["Email"]?.type === "pattern" && <ErrorMessage />}
        </div>
        <div>
          <InputSelect label={"Subject"} register={register} />
        </div>
      </div>
      <div>
        <Input label={"Message"} register={register} required />
        {errors.Message && <ErrorMessage required />}
      </div>
      <div className="flex justify-center min-w-[500px]">
        <SubmitInput label={"Send"} />
      </div>
    </form>
  );
};
