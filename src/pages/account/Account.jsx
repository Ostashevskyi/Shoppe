import React, { useState, useMemo } from "react";
import Wrapper from "@/components/Wrapper";
import Dashboard from "@/pages/account/Dashboard";
import Orders from "@/pages/account/Orders";
import Downloads from "@/pages/account/Downloads";
import Addresses from "@/pages/account/Addresses";
import AccountDetails from "@/pages/account/AccountDetails";

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
      default:
        return;
    }
  }, [activeElement]);

  return (
    <Wrapper>
      <main className="mt-24 mb-52">
        {activeElement === "Dashboard" && (
          <h1 className="text-center mb-16 text-3xl font-medium">My Account</h1>
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
                  <button onClick={(e) => handleClick(e)}>{btn.title}</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>{displayElems}</div>
      </main>
    </Wrapper>
  );
};

export default Account;
