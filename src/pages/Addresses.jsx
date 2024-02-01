import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";

import { useUserID } from "@/hooks/useUserID";

import { getBillingAddresses } from "@/store/billingAddressesSlice";
import { setIsBilling, setIsShipping } from "@/store/closeFormsSlice";
import { getShippingAddresses } from "@/store/shippingAddressesSlice";

import AddressesMain from "@/components/shared/AddressesMain";

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
    <div className="xs:mx-4 sm:mx-4 md:mx-4 lg:mx-4 text-text">
      <p className="mb-11">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex justify-between xs:flex-col sm:flex-col xs:gap-12 sm:gap-12 md:flex-col md:gap-12 lg:gap-6">
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
