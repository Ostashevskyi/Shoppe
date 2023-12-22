import React from "react";
import { AccountDetailsForm } from "../../components/Form";

const AccountDetails = () => {
  return (
    <main className="max-w-[503px] m-auto mt-10 mb-40">
      <h1 className="text-3xl font-medium text-center mb-9">Account Details</h1>
      <AccountDetailsForm />
    </main>
  );
};

export default AccountDetails;
