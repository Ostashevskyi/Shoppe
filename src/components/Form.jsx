import React from "react";
import { useForm } from "react-hook-form";
import { Input, InputSelect, SubmitInput } from "@/components/Input";
import { EMAIL_PATTERN } from "@/utils/constants";
import { NavLink } from "react-router-dom";
import {
  InvalidValueMessage,
  RequiredMessage,
} from "@/components/AlertMessages";

const onSubmit = (data) => {
  console.log(data);
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-24 justify-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between flex-wrap">
        <div>
          <Input label={"First Name"} register={register} required />
          {errors["First Name"] && <RequiredMessage />}
        </div>
        <div>
          <Input label={"Last Name"} register={register} required />
          {errors["Last Name"] && <RequiredMessage />}
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
          {errors["Email"]?.type === "required" && <RequiredMessage />}
          {errors["Email"]?.type === "pattern" && <InvalidValueMessage />}
        </div>
        <div>
          <InputSelect label={"Subject"} register={register} />
        </div>
      </div>
      <div>
        <Input label={"Message"} register={register} required />
        {errors.Message && <RequiredMessage />}
      </div>
      <div className="flex justify-center">
        <SubmitInput label={"Send"} />
      </div>
    </form>
  );
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          label={"Email"}
          register={register}
          required
          pattern={EMAIL_PATTERN}
        />
        {errors["Email"]?.type === "required" && <RequiredMessage />}
        {errors["Email"]?.type === "pattern" && <InvalidValueMessage />}
      </div>
      <div>
        <Input
          label={"Password"}
          register={register}
          required
          type={"password"}
        />
        {errors["Password"] && <RequiredMessage />}
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <SubmitInput label={"Sign in"} />
        <NavLink className="heading5D" to={"/reset-password"}>
          Have you forgotten your password?
        </NavLink>
      </div>
    </form>
  );
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input label={"First Name"} register={register} required />
        {errors["First Name"] && <RequiredMessage />}
      </div>
      <div>
        <Input label={"Last Name"} register={register} required />
        {errors["Last Name"] && <RequiredMessage />}
      </div>
      <div>
        <Input
          label={"Email"}
          register={register}
          required
          pattern={EMAIL_PATTERN}
        />
        {errors["Email"]?.type === "required" && <RequiredMessage />}
        {errors["Email"]?.type === "pattern" && <InvalidValueMessage />}
      </div>
      <div>
        <Input
          label={"Password"}
          register={register}
          required
          type={"password"}
        />
        {errors["Email"] && <RequiredMessage />}
      </div>
      <div>
        <SubmitInput label={"Register"} />
      </div>
    </form>
  );
};

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-16">
      <div>
        <Input
          label={"Email"}
          register={register}
          pattern={EMAIL_PATTERN}
          required
        />
        {errors["Email"]?.type === "required" && <RequiredMessage />}
        {errors["Email"]?.type === "pattern" && <InvalidValueMessage />}
      </div>

      <SubmitInput label={"Reset Password"} />
    </form>
  );
};
