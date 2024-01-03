import React from "react";

import { useForm } from "react-hook-form";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { CountrySelect } from "@/components/Selects/CountrySelect";

export const BillingForm = () => {
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
      <div className="flex justify-between items-center gap-10">
        <div>
          <Input label={"First name"} register={register} required small />
          {errors["First name"] && <ErrorMessage required />}
        </div>
        <div>
          <Input label={"Last name"} register={register} required small />
          {errors["Last name"] && <ErrorMessage required />}
        </div>
      </div>
      <Input label={"Company name"} register={register} />
      <div>
        <CountrySelect label={"Country"} register={register} required />
        {errors["County"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Street Address"} register={register} required />
        {errors["Street Address"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Postcode / ZIP"} register={register} required />
        {errors["Postcode / ZIP"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Town / City"} register={register} required />
        {errors["Town / City"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Phone"} register={register} required type="tel" />
        {errors["Phone"] && <ErrorMessage required />}
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
      <div className="max-w-[244px]">
        <SubmitInput label={"Save addresss"} />
      </div>
    </form>
  );
};
