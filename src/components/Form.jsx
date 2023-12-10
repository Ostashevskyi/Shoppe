import React from "react";
import { useForm } from "react-hook-form";
import { Input, InputSelect } from "./Input";

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
            pattern={
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<,>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
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
        <input
          type="submit"
          value="Send"
          className="bg-black max-w-[500px] flex-1 h-[53px] rounded-md text-white uppercase"
        />
      </div>
    </form>
  );
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  return <form></form>;
};
