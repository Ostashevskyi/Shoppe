import React from "react";

import { useForm } from "react-hook-form";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

export const AccountDetailsForm = ({ user }) => {
  const { user_metadata, email } = user;

  const { first_name, last_name, display_name } = user_metadata;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
      <div>
        <Input
          label={"First name"}
          register={register}
          required
          value={first_name}
        />
        {errors["First name"] && <ErrorMessage required />}
      </div>
      <div>
        <Input
          label={"Last name"}
          register={register}
          required
          value={last_name}
        />
        {errors["Last name"] && <ErrorMessage required />}
      </div>
      <div>
        <Input
          label={"Display name"}
          register={register}
          required
          value={display_name}
        />
        {errors["Display name"] && <ErrorMessage required />}
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
        {errors["Email"]?.type === "required" && <ErrorMessage required />}
        {errors["Email"]?.type === "pattern" && <ErrorMessage />}
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
