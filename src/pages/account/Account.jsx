import React, { useState, useMemo, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import Dashboard from "@/pages/account/Dashboard";
import Orders from "@/pages/account/Orders";
import Downloads from "@/pages/account/Downloads";
import Addresses from "@/pages/account/Addresses";
import AccountDetails from "@/pages/account/AccountDetails";
import Logout from "./Logout";
import { supabase } from "../../auth/client";
import { useNavigate, useNavigation } from "react-router-dom";
import { getSession } from "../../auth/getSession";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/userSlice";

const Account = () => {
  const [activeElement, setActiveElement] = useState("Dashboard");

  const buttons = [
    { id: 0, title: "Dashboard" },
    { id: 1, title: "Orders" },
    { id: 2, title: "Downloads" },
    { id: 3, title: "Addresses" },
    { id: 4, title: "Account Details" },
    { id: 5, title: "Logout" },
  ];

  const handleClick = (e) => {
    setActiveElement(e.target.innerHTML);
  };

  const displayElems = useMemo(() => {
    switch (activeElement) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <Orders />;
      case "Downloads":
        return <Downloads />;
      case "Addresses":
        return <Addresses />;
      case "Account Details":
        return <AccountDetails />;
      case "Logout":
        return <Logout />;
      default:
        return;
    }
  }, [activeElement]);

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      dispatch(setUser(user));
    });
  }, []);

  const display = useMemo(() => {
    return (
      <div>
        <h1>You have no permission</h1>
        <button onClick={() => navigate("/login")}>Log in</button>
      </div>
    );
  }, []);

  return (
    <Wrapper>
      <main className="mt-24 mb-52">
        {user ? (
          <div>
            {activeElement === "Dashboard" && (
              <h1 className="text-center mb-16 text-3xl font-medium">
                My Account
              </h1>
            )}
            <div>
              <ul className="flex gap-12 border-b border-light_gray mb-10">
                {buttons.map((btn) => {
                  return (
                    <li
                      key={btn.id}
                      className={`${
                        activeElement === btn.title &&
                        "border-b border-black pb-8 translate-y-px"
                      }`}
                    >
                      <button onClick={(e) => handleClick(e)}>
                        {btn.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>{displayElems}</div>
          </div>
        ) : (
          display
        )}
        {/* <div> */}
        {/* {activeElement === "Dashboard" && (
          <h1 className="text-center mb-16 text-3xl font-medium">My Account</h1>
        )}
        </div>
        <div>
          <ul className="flex gap-12 border-b border-light_gray mb-10">
            {buttons.map((btn) => {
              return (
                <li
                  key={btn.id}
                  className={`${
                    activeElement === btn.title &&
                    "border-b border-black pb-8 translate-y-px"
                  }`}
                >
                  <button onClick={(e) => handleClick(e)}>{btn.title}</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>{displayElems}</div> */}
      </main>
    </Wrapper>
  );
};

export default Account;
