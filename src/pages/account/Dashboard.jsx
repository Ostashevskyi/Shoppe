import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p className="heading5D">
        Hello Vitatheme (not Vitatheme?{" "}
        <NavLink className="text-accent" to="#">
          Log out
        </NavLink>
        )
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <NavLink className="text-accent" to="#">
          recent orders
        </NavLink>
        , manage your{" "}
        <NavLink className="text-accent" to="#">
          shipping and billing addresses
        </NavLink>
        , and edit your{" "}
        <NavLink className="text-accent" to="#">
          password and account details
        </NavLink>{" "}
        .
      </p>
    </div>
  );
};

export default Dashboard;
