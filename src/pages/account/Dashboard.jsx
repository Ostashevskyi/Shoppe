import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  const { user_metadata } = user;

  const first_name = user_metadata?.first_name;
  const last_name = user_metadata?.last_name;

  return (
    <div>
      <p className="heading5D">
        Hello {first_name} {last_name}
      </p>
    </div>
  );
};

export default Dashboard;
