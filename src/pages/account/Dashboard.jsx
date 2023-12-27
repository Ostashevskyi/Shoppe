import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { supabase } from "../../auth/client";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  const { id } = user;

  const { user_metadata } = user;

  const first_name = user_metadata?.first_name;
  const last_name = user_metadata?.last_name;

  return (
    <div>
      <p className="heading5D">
        Hello {first_name} {last_name} (not {first_name}?
        <NavLink className="text-accent ml-2" to="#">
          Log out
        </NavLink>
        )
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <NavLink className="text-accent" to="#">
          recent orders
        </NavLink>
        , manage your
        <NavLink className="text-accent" to="#">
          shipping and billing addresses
        </NavLink>
        , and edit your
        <NavLink className="text-accent" to="#">
          password and account details
        </NavLink>
        .
      </p>
    </div>
  );
};

export default Dashboard;
