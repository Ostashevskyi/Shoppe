import React, { useState, useMemo } from "react";
import Wrapper from "@/components/Wrapper";
import Dashboard from "@/pages/account/Dashboard";

const Account = () => {
  const [activeElement, setActiveElement] = useState("Dashboard");

  const handleClick = (e) => {
    setActiveElement(e.target.innerHTML);
  };

  const displayElems = useMemo(() => {
    switch (activeElement) {
      case "Dashboard":
        return <Dashboard />;
      default:
        return;
    }
  }, [activeElement]);

  return (
    <Wrapper>
      <main className="mt-24 mb-52">
        <h1 className="text-center mb-16">My Account</h1>
        <div>
          <ul className="flex gap-12 border-b pb-8 border-light_gray mb-10">
            <li>
              <button onClick={(e) => handleClick(e)}>Dashboard</button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e)}>Orders</button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e)}>Downloads</button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e)}>Addresses</button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e)}>Account Details</button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e)}>Logout</button>
            </li>
          </ul>
        </div>
        <div>{displayElems}</div>
      </main>
    </Wrapper>
  );
};

export default Account;
