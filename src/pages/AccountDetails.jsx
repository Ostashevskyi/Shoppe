import React from "react";

import { useSelector } from "react-redux";

import { AccountDetailsForm } from "@/components/Forms/AccountDetailsForm";

import { useAuth0 } from "@auth0/auth0-react";

const AccountDetails = () => {
  const { user } = useAuth0();

  return (
    <main className="max-w-[503px] m-auto mt-10 mb-40">
      <h1 className="text-3xl font-medium text-center mb-9">Account Details</h1>
      <div className="flex justify-center items-center gap-4 xs:flex-col sm:flex-col ">
        <img src={user.picture} className="rounded-full" />
        <div>
          <p>
            <span className="font-bold text-lg">Nickname: </span>
            {user.nickname}
          </p>
          <p>
            <span className="font-bold text-lg">Email: </span> {user.email}
          </p>
        </div>
      </div>
      {/* <AccountDetailsForm user={user} /> */}
    </main>
  );
};

export default AccountDetails;
