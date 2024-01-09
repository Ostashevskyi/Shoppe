import React from "react";

import { useForm } from "react-hook-form";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { CountrySelect } from "@/components/Selects/CountrySelect";

import { supabase } from "@/database";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "@/hooks/useUserID";
import { useDispatch } from "react-redux";
import { getBillingAddresses } from "../../store/billingAddressesSlice";
import { setIsBilling } from "../../store/closeFormsSlice";

export const BillingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth0();
  const userID = useUserID(user);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await supabase.from("billing_addresses").insert({
        preset_name: data["Preset name"],
        first_name: data["First name"],
        last_name: data["Last name"],
        company_name: data["Company name"],
        country: data["Country"],
        street_address: data["Street Address"],
        postcode: data["Postcode / ZIP"],
        city: data["Town / City"],
        phone: data["Phone"],
        email: data["Email"],
        isDefault: false,
        user_id: userID,
      });

      if (response.status === 201) {
        console.log("Form added correctly");

        dispatch(getBillingAddresses(userID));
        dispatch(setIsBilling(false));
      } else {
        throw Error("Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
      <div>
        <Input label={"Preset name"} register={register} required />
        {errors["Presrt name"] && <ErrorMessage required />}
      </div>
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
