import React, { useState, useCallback } from "react";
import { BillingForm } from "../../components/Form";

const Addresses = () => {
  const [isBilling, setIsBilling] = useState(false);
  const [isShipping, setIsShipping] = useState(false);

  const setter = (set, val) => {
    set(!val);
  };

  return (
    <div>
      <p className="mb-11">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex justify-between mr-64">
        <div>
          <p className="mb-6 heading3D">Billing Address</p>

          {isBilling ? (
            <div>
              <BillingForm />
              <button
                className="body_large text-accent uppercase font-medium mt-4"
                onClick={() => setter(setIsBilling, isBilling)}
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setter(setIsBilling, isBilling)}
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
        <div>
          <p className="mb-6 heading3D">Shipping Address</p>

          <button
            onClick={() => setter(setIsShipping, isShipping)}
            className="body_large text-accent uppercase font-medium mb-3"
          >
            Add
          </button>
          <p className="body_medium text-dark_gray">
            You have not set up this type of address yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
