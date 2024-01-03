import React from "react";

import { useSelector } from "react-redux";

import { AccountDetailsForm } from "@/components/Forms/AccountDetailsForm";

const AccountDetails = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <main className="max-w-[503px] m-auto mt-10 mb-40">
      <h1 className="text-3xl font-medium text-center mb-9">Account Details</h1>
      <AccountDetailsForm user={user} />
    </main>
  );
};

export default AccountDetails;
