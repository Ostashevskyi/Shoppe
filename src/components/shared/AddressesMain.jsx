import React from "react";

import { useDispatch } from "react-redux";

import FormCard from "@/components/Cards/BillingCard";
import { BillingForm } from "@/components/Forms/BillingForm";
import { ShippingForm } from "../Forms/ShippingForm";

const AddressesMain = ({
  condition,
  title,
  conditionSetter,
  addresses,
  formType,
}) => {
  const dispatch = useDispatch();

  const toggleForm = (form, isOpen) => {
    dispatch(form(isOpen));
  };

  return (
    <div>
      <p className="mb-6 heading3D">{title}</p>

      {condition ? (
        <div>
          {formType === "billing" ? <BillingForm /> : <ShippingForm />}
          <button
            className="body_large text-accent uppercase font-medium mt-4"
            onClick={() => toggleForm(conditionSetter, false)}
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => toggleForm(conditionSetter, true)}
            className="body_large text-accent uppercase font-medium mb-3"
          >
            Add
          </button>
          {!addresses ? (
            <p className="body_medium text-dark_gray">
              You have not set up this type of address yet.
            </p>
          ) : (
            <fieldset className="flex flex-col gap-3 items-center justify-center">
              {addresses.map((el) => (
                <FormCard key={el.id} address={el} formType={formType} />
              ))}
            </fieldset>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressesMain;
