import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import { supabase } from "../../database";
import { useUserID } from "../../hooks/useUserID";

const Dashboard = () => {
  const { user } = useAuth0();

  return (
    <div className="flex gap-4 ml-4 ">
      <p>Hello {user.nickname}</p>
    </div>
  );
};

export default Dashboard;
