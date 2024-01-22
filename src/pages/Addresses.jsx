import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import { useUserID } from "@/hooks/useUserID";

import { setIsBilling, setIsShipping } from "@/store/closeFormsSlice";

import AddressesMain from "@/components/shared/AddressesMain";

import { getBillingAddresses } from "@/store/billingAddressesSlice";
import { getShippingAddresses } from "@/store/shippingAddressesSlice";

const Addresses = () => {
  const { isShipping, isBilling } = useSelector((state) => state.closeForm);

  const { billingAddresses } = useSelector((state) => state.billingAddresses);
  const { shippingAddresses } = useSelector((state) => state.shippingAddresses);

  const dispatch = useDispatch();

  const { user } = useAuth0();
  const userID = useUserID(user);

  useEffect(() => {
    dispatch(getBillingAddresses(userID));
    dispatch(getShippingAddresses(userID));
  }, [dispatch]);

  return (
    <div>
      <p className="mb-11">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex justify-between">
        <AddressesMain
          condition={isBilling}
          title="Billing Address"
          conditionSetter={setIsBilling}
          addresses={billingAddresses}
          formType={"billing"}
        />
        <AddressesMain
          condition={isShipping}
          title="Shipping Address"
          conditionSetter={setIsShipping}
          addresses={shippingAddresses}
          formType={"shipping"}
        />
      </div>
    </div>
  );
};

export default Addresses;
