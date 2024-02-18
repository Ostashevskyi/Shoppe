import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="flex flex-col gap-4 ml-4 text-text">
      <p>
        Hello {user.nickname} (not {user.nickname}?{" "}
        <button
          className="text-accent hover:opacity-75"
          onClick={() => logout()}
        >
          {" "}
          Log out
        </button>
        )
      </p>
      <p className="child-a:text-accent ">
        From your account dashboard you can view your{" "}
        <NavLink to={"orders"} className="hover:opacity-75">
          recent orders
        </NavLink>
        , manage your{" "}
        <NavLink to={"addresses"} className="hover:opacity-75">
          shipping and billing addresses
        </NavLink>
        , and look at your{" "}
        <NavLink to={"details"} className="hover:opacity-75">
          account details
        </NavLink>
        .
      </p>
    </div>
  );
};

export default Dashboard;
