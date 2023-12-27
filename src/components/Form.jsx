import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, InputSelect, SubmitInput } from "@/components/Input";
import { EMAIL_PATTERN } from "@/utils/constants";
import { NavLink } from "react-router-dom";
import {
  InvalidValueMessage,
  RequiredMessage,
} from "@/components/AlertMessages";
import { CountrySelect } from "./Select";
import { signUpUser } from "../pages/Login";
import { useNavigate } from "react-router-dom";
import { supabase } from "../auth/client";
import { useDispatch } from "react-redux";

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
      <div className="flex justify-center min-w-[500px]">
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

  const [error, setError] = useState();

  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error);
        // Handle error appropriately
      } else {
        console.log("Login successful");
        navigate("/");
        // Redirect or perform actions after successful login
      }
    } catch (error) {
      setError(error);
      // Handle error appropriately
    }
  };

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit((data) => {
        loginUser(data.Email, data.Password);
      })}
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
      {error ? <p>{error.message}</p> : ""}
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="min-w-[500px]">
          <SubmitInput label={"Sign in"} />
        </div>
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

  const navigate = useNavigate();

  const signUpSubmit = (data) => {
    const userInfo = {
      email: data.Email,
      password: data.Password,
      firstName: data["First Name"],
      lastName: data["Last Name"],
      displayName: data["Display Name"],
    };

    signUpUser({ userInfo });
    navigate("/confirm_email");
  };

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit(signUpSubmit)}
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
        <Input label={"Display Name"} register={register} required />
        {errors["Display Name"] && <RequiredMessage />}
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
        {errors["Password"] && <RequiredMessage />}
      </div>
      <div className="min-w-[500px]">
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
      <div className="min-w-[500px]">
        <SubmitInput label={"Reset Password"} />
      </div>
    </form>
  );
};

export const BillingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
      <div className="flex justify-between items-center gap-10">
        <div>
          <Input label={"First name"} register={register} required small />
          {errors["First name"] && <RequiredMessage />}
        </div>
        <div>
          <Input label={"Last name"} register={register} required small />
          {errors["Last name"] && <RequiredMessage />}
        </div>
      </div>
      <Input label={"Company name"} register={register} />
      <div>
        <CountrySelect label={"Country"} register={register} required />
        {errors["County"] && <RequiredMessage />}
      </div>
      <div>
        <Input label={"Street Address"} register={register} required />
        {errors["Street Address"] && <RequiredMessage />}
      </div>
      <div>
        <Input label={"Postcode / ZIP"} register={register} required />
        {errors["Postcode / ZIP"] && <RequiredMessage />}
      </div>
      <div>
        <Input label={"Town / City"} register={register} required />
        {errors["Town / City"] && <RequiredMessage />}
      </div>
      <div>
        <Input label={"Phone"} register={register} required type="tel" />
        {errors["Phone"] && <RequiredMessage />}
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
      <div className="max-w-[244px]">
        <SubmitInput label={"Save addresss"} />
      </div>
    </form>
  );
};

export const AccountDetailsForm = ({ user }) => {
  const { user_metadata, email } = user;

  const { first_name, last_name, display_name } = user_metadata;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
      <div>
        <Input
          label={"First name"}
          register={register}
          required
          value={first_name}
        />
        {errors["First name"] && <RequiredMessage />}
      </div>
      <div>
        <Input
          label={"Last name"}
          register={register}
          required
          value={last_name}
        />
        {errors["Last name"] && <RequiredMessage />}
      </div>
      <div>
        <Input
          label={"Display name"}
          register={register}
          required
          value={display_name}
        />
        {errors["Display name"] && <RequiredMessage />}
        <p className="body_smallD mt-2 text-dark_gray">
          This will be how your name will be displayed in the account section
          and in reviews.
        </p>
      </div>
      <div className="mb-4">
        <Input
          label={"Email"}
          register={register}
          required
          pattern={EMAIL_PATTERN}
          value={email}
        />
        {errors["Email"]?.type === "required" && <RequiredMessage />}
        {errors["Email"]?.type === "pattern" && <InvalidValueMessage />}
      </div>

      <h3 className="heading5D font-medium">Password Change</h3>

      <Input
        label={"Current password (leave blank to leave unchanged)"}
        register={register}
      />
      <Input
        label={"New password (leave blank to leave unchanged)"}
        register={register}
      />
      <Input label={"Confirm new password"} register={register} />

      <SubmitInput label={"Save changes"} />
    </form>
  );
};
