import React, { useState, useMemo, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Wrapper from "@/components/Wrapper";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Account = () => {
  const [activeElement, setActiveElement] = useState("Dashboard");

  const location = useLocation();

  useEffect(() => {
    const lastElement = location.pathname.split("/").length - 1;
    setActiveElement(location.pathname.split("/")[lastElement]);
  }, [location.pathname]);

  const buttons = [
    { id: 0, title: "Dashboard", meta: "account", url: "/account" },
    { id: 1, title: "Orders", meta: "orders", url: "orders" },
    { id: 2, title: "Addresses", meta: "addresses", url: "addresses" },
    { id: 3, title: "Account Details", meta: "details", url: "details" },
    { id: 4, title: "Logout", meta: "logout", url: "logout" },
  ];

  const { isAuthenticated, isLoading, loginWithPopup } = useAuth0();

  const noPermission = useMemo(() => {
    return (
      <div>
        <h1>You have no permission</h1>
        <button onClick={() => loginWithPopup()}>Log in</button>
      </div>
    );
  }, []);

  return (
    <Wrapper>
      <main className="mt-24 mb-52">
        {isLoading && <p>Loading...</p>}
        {isAuthenticated && !isLoading && (
          <div>
            {activeElement === "account" && (
              <h1 className="text-center mb-16 text-3xl font-medium">
                My Account
              </h1>
            )}
            <div>
              <div className="flex gap-12 border-b border-light_gray mb-10">
                {buttons.map((btn) => {
                  return (
                    <NavLink
                      to={btn.url}
                      key={btn.id}
                      className={`${
                        activeElement === btn.meta &&
                        "border-b border-black pb-8 translate-y-px"
                      }`}
                    >
                      {btn.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        )}
        {!isAuthenticated && !isLoading && noPermission}
      </main>
    </Wrapper>
  );
};

export default Account;
