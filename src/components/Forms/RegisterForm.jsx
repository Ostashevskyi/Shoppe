import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { supabase } from "@/auth/client";

import {
  EMAIL_PATTERN,
  EMAIL_REDIRECT_DEV,
  EMAIL_REDIRECT_PROD,
} from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const emailRedirectTo =
    import.meta.env.VITE_STATUS === "development"
      ? EMAIL_REDIRECT_DEV
      : EMAIL_REDIRECT_PROD;

  const signUpSubmit = async (data) => {
    await supabase.auth.signUp({
      email: data.Email,
      password: data.Password,
      options: {
        data: {
          first_name: data["First Name"],
          last_name: data["Last Name"],
          display_name: data["Display Name"],
        },
        emailRedirectTo,
      },
    });

    navigate("/confirm_email");
  };

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit(signUpSubmit)}
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
