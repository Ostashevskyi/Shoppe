import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

export const RegisterForm = () => {
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
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-11 mb-60"
    >
      <div>
        <Input label={"First Name"} register={register} required />
        {errors["First Name"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Last Name"} register={register} required />
        {errors["Last Name"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Display Name"} register={register} required />
        {errors["Display Name"] && <ErrorMessage required />}
      </div>
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
        <Input
          label={"Password"}
          register={register}
          required
          type={"password"}
        />
        {errors["Password"] && <ErrorMessage required />}
      </div>
      <div className="min-w-[500px]">
        <SubmitInput label={"Register"} />
      </div>
    </form>
  );
};
