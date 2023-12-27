import React from "react";

import { useForm } from "react-hook-form";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-16">
      <div>
        <Input
          label={"Email"}
          register={register}
          pattern={EMAIL_PATTERN}
          required
        />
        {errors["Email"]?.type === "required" && <ErrorMessage required />}
        {errors["Email"]?.type === "pattern" && <ErrorMessage />}
      </div>
      <div className="min-w-[500px]">
        <SubmitInput label={"Reset Password"} />
      </div>
    </form>
  );
};
