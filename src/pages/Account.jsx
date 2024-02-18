import React, { useState, useMemo, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { calcScreenWidth } from "@/utils/calcScreenWidth";

import Wrapper from "@/components/Wrapper";
import NotAllowed from "@/components/shared/NotAllowed";

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

  const { isAuthenticated, isLoading } = useAuth0();

  const width = calcScreenWidth();

  const MobileButtons = () => {
    return (
      <div className="flex gap-12 border-b border-light_gray mb-10 xs:mx-4 sm:mx-4">
        <Swiper slidesPerView={width < 375 ? 2 : width > 767 ? 4 : 3}>
          <div className="flex">
            {buttons.map((btn) => {
              return (
                <SwiperSlide
                  key={btn.id}
                  className="text-center pb-4 text-text"
                >
                  <NavLink
                    to={btn.url}
                    className={`${
                      activeElement === btn.meta &&
                      "border-b border-text pb-4 text-text"
                    }`}
                  >
                    {btn.title}
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    );
  };

  return (
    <Wrapper>
      <main className="mt-24 mb-[35%] xs:mb-48 sm:mb-56  md:mb-48 xs:mt-14 sm:mt-14 md:mt-14">
        {isLoading && <p className="mx-4 text-text">Loading...</p>}
        {isAuthenticated && !isLoading && (
          <div>
            {activeElement === "account" && (
              <h1 className="text-center mb-16 text-3xl font-medium text-text">
                My Account
              </h1>
            )}
            <div>
              {width < 976 ? (
                <MobileButtons />
              ) : (
                <div className="flex gap-12 border-b border-light_gray mb-10 lg:mx-4 text-text">
                  {buttons.map((btn) => {
                    return (
                      <NavLink
                        to={btn.url}
                        key={btn.id}
                        className={`${
                          activeElement === btn.meta &&
                          "border-b border-text pb-8 translate-y-px"
                        }`}
                      >
                        {btn.title}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        )}
        {!isAuthenticated && !isLoading && (
          <div className="mx-4">
            <NotAllowed />
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default Account;
