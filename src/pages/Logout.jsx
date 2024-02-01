import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="mb-[10%] xs:mb-40 sm:mb-40 md:mb-[20%]">
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="mx-4 text-text"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
