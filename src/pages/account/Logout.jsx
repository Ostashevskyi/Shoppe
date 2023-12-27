import React from "react";
import { supabase } from "../../auth/client";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    await supabase.auth.signOut({});
    navigate("/login");
  };

  return <button onClick={() => logoutUser()}>Logout</button>;
};

export default Logout;
