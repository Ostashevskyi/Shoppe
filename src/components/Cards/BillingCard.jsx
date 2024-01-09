import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserID } from "../../hooks/useUserID";
import { supabase } from "../../database";
import { useDispatch } from "react-redux";
import { deleteBillingAddress } from "../../store/billingAddressesSlice";

const BillingCard = ({ address }) => {
  const { preset_name, isDefault, id } = address;

  const { user } = useAuth0();
  const userID = useUserID(user);

  const handleChange = async (e) => {
    try {
      await supabase
        .from("billing_addresses")
        .update({ isDefault: false })
        .eq("user_id", userID);

      const { error } = await supabase
        .from("billing_addresses")
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
    <div className="border rounded-md p-2 flex gap-4">
      <div>
        <input
          type="radio"
          name="billing_presets"
          id={preset_name}
          onChange={(e) => handleChange(e)}
          defaultChecked={isDefault}
        />
      </div>
      <div>
        <p>{preset_name}</p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(deleteBillingAddress({ userID, id }));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BillingCard;
