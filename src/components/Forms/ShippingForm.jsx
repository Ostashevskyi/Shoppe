import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import { supabase } from "@/database";

import { useUserID } from "@/hooks/useUserID";

import { setIsShipping } from "@/store/closeFormsSlice";
import { getShippingAddresses } from "@/store/shippingAddressesSlice";

import { EMAIL_PATTERN } from "@/utils/constants";
import { calcScreenWidth } from "@/utils/calcScreenWidth";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { CountrySelect } from "@/components/Selects/CountrySelect";

export const ShippingForm = () => {
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
      const response = await supabase.from("shipping_addresses").insert({
        preset_name: data["Preset name"],
        first_name: data["First name"],
        last_name: data["Last name"],
        card_number: data["Card number"],
        expiration_date: data["Expiration date"],
        cvv: data["CVV"],
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

        dispatch(getShippingAddresses(userID));
        dispatch(setIsShipping(false));
      } else {
        throw Error("Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const width = calcScreenWidth();

  const [isSmall, setIsSmall] = useState();

  useEffect(() => {
    width < 976 ? setIsSmall(false) : setIsSmall(true);
  }, [width]);

  console.log(isSmall);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-9 lg:max-w-[450px]"
    >
      <div>
        <Input label={"Preset name"} register={register} required />
        {errors["Presrt name"] && <ErrorMessage required />}
      </div>
      <div className="flex justify-between  gap-10 xs:flex-col sm:flex-col md:flex-col">
        <div>
          <Input
            label={"First name"}
            register={register}
            required
            small={isSmall}
          />
          {errors["First name"] && <ErrorMessage required />}
        </div>
        <div>
          <Input
            label={"Last name"}
            register={register}
            required
            small={isSmall}
          />
          {errors["Last name"] && <ErrorMessage required />}
        </div>
      </div>
      <div>
        <Input label={"Card number"} register={register} required />
        {errors["Card number"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"Expiration date"} register={register} required />
        {errors["Expiration date"] && <ErrorMessage required />}
      </div>
      <div>
        <Input label={"CVV"} register={register} required />
        {errors["CVV"] && <ErrorMessage required />}
      </div>
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
