import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import BillingCard from "@/components/Cards/BillingCard";

import { useUserID } from "@/hooks/useUserID";

import { getBillingAddresses } from "@/store/billingAddressesSlice";

import { BillingForm } from "@/components/Forms/BillingForm";

import { setIsBilling, setIsShipping } from "@/store/closeFormsSlice";

const Addresses = () => {
  const { user } = useAuth0();
  const userID = useUserID(user);

  const dispatch = useDispatch();

  const { billingAddresses } = useSelector((state) => state.billingAddresses);
  const { isShipping, isBilling } = useSelector((state) => state.closeForm);

  useEffect(() => {
    dispatch(getBillingAddresses(userID));
  }, [dispatch]);

  const toggleForm = (form, isOpen) => {
    dispatch(form(isOpen));
  };

  return (
    <div>
      <p className="mb-11">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex justify-between">
        <div>
          <p className="mb-6 heading3D">Billing Address</p>

          {isBilling ? (
            <div>
              <BillingForm />
              <button
                className="body_large text-accent uppercase font-medium mt-4"
                onClick={() => toggleForm(setIsBilling, false)}
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => toggleForm(setIsBilling, true)}
                className="body_large text-accent uppercase font-medium mb-3"
              >
                Add
              </button>
              {!billingAddresses ? (
                <p className="body_medium text-dark_gray">
                  You have not set up this type of address yet.
                </p>
              ) : (
                <fieldset className="flex flex-col gap-3 items-center justify-center">
                  {billingAddresses.map((el) => (
                    <BillingCard key={el.id} address={el} />
                  ))}
                </fieldset>
              )}
            </div>
          )}
        </div>
        <div>
          <p className="mb-6 heading3D">Shipping Address</p>

          {isShipping ? (
            <div>
              <BillingForm />
              <button
                className="body_large text-accent uppercase font-medium mt-4"
                onClick={() => toggleForm(setIsShipping, false)}
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => toggleForm(setIsShipping, true)}
                className="body_large text-accent uppercase font-medium mb-3"
              >
                Add
              </button>
              <p className="body_medium text-dark_gray">
                You have not set up this type of address yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
