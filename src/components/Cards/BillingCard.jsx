import React from "react";

import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import { supabase } from "@/database";

import { useUserID } from "@/hooks/useUserID";

import { deleteBillingAddress } from "@/store/billingAddressesSlice";
import { deleteShippingAddress } from "@/store/shippingAddressesSlice";

import DeleteIcon from "@/components/icons/Delete";

const FormCard = ({ address, formType }) => {
  const { preset_name, isDefault, id } = address;

  const { user } = useAuth0();
  const userID = useUserID(user);

  const handleChange = async (e) => {
    try {
      await supabase
        .from(
          `${
            formType === "billing" ? "billing_addresses" : "shipping_addresses"
          }`
        )
        .update({ isDefault: false })
        .eq("user_id", userID);

      const { error } = await supabase
        .from(
          `${
            formType === "billing" ? "billing_addresses" : "shipping_addresses"
          }`
        )
        .update({ isDefault: true })
        .eq("preset_name", e.target.id, "user_id", userID);

      if (error) {
        throw Error(error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="border rounded-md p-2 flex justify-between items-center min-w-[155px]">
      <div>
        <input
          type="radio"
          name={`${
            formType === "billing" ? "billing_presets" : "shipping_presets"
          }`}
          id={preset_name}
          onChange={(e) => handleChange(e)}
          defaultChecked={isDefault}
        />
      </div>
      <div>
        <p>{preset_name}</p>
      </div>
      <button
        onClick={() => {
          dispatch(
            formType === "billing"
              ? deleteBillingAddress({ userID, id })
              : deleteShippingAddress({ userID, id })
          );
        }}
      >
        <DeleteIcon fillColor={"none"} w={10} h={10} />
      </button>
    </div>
  );
};

export default FormCard;
