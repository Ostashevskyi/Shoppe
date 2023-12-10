import React from "react";
import { useForm } from "react-hook-form";
import { Input, InputSelect, SubmitInput } from "./Input";
import { EMAIL_PATTERN } from "../utils/constants";
import { NavLink } from "react-router-dom";

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
          {errors["First Name"] && (
            <p role="alert" className="text-errors">
              First name is required
            </p>
          )}
        </div>
        <div>
          <Input label={"Last Name"} register={register} required />
          {errors["Last Name"] && (
            <p role="alert" className="text-errors">
              Last name is required
            </p>
          )}
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
          {errors["Email"]?.type === "required" && (
            <p role="alert" className="text-errors">
              Email is required
            </p>
          )}
          {errors["Email"]?.type === "pattern" && (
            <p role="alert" className="text-errors">
              Email is not valid
            </p>
          )}
        </div>
        <div>
          <InputSelect label={"Subject"} register={register} />
        </div>
      </div>
      <div>
        <Input label={"Message"} register={register} required />
        {errors.Message && (
          <p role="alert" className="text-errors">
            Message is required
          </p>
        )}
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

  const onSubmit = (data) => console.log(data);

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
        {errors["Email"]?.type === "required" && (
          <p role="alert" className="text-errors">
            Email is required
          </p>
        )}
        {errors["Email"]?.type === "pattern" && (
          <p role="alert" className="text-errors">
            Email is not valid
          </p>
        )}
      </div>
      <div>
        <Input
          label={"Password"}
          register={register}
          required
          type={"password"}
        />
        {errors["Password"] && (
          <p role="alert" className="text-errors">
            Password is required
          </p>
        )}
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

  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input label={"First Name"} register={register} required />
        {errors["First Name"] && (
          <p role="alert" className="text-errors">
            First name is required
          </p>
        )}
      </div>
      <div>
        <Input label={"Last Name"} register={register} required />
        {errors["Last Name"] && (
          <p role="alert" className="text-errors">
            Last name is required
          </p>
        )}
      </div>
      <div>
        <Input label={"Email"} register={register} required />
        {errors["Email"] && (
          <p role="alert" className="text-errors">
            Email is required
          </p>
        )}
      </div>
      <div>
        <Input
          label={"Password"}
          register={register}
          required
          type={"password"}
        />
        {errors["Email"] && (
          <p role="alert" className="text-errors">
            Password is required
          </p>
        )}
      </div>
      <div>
        <SubmitInput label={"Register"} />
      </div>
    </form>
  );
};
