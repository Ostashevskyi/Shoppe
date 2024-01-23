import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import useLogo from "@/hooks/useLogo";

import { HeaderLink } from "@/components/Links/HeaderLink";

import { searchIcon, userIcon, cartIcon } from "@/utils/icon_imports";

const Header = () => {
  const data = useLogo();

  const links = [
    { id: 0, title: "Shop", link: "/catalog" },
    { id: 1, title: "Blog", link: "/blog" },
    { id: 2, title: "Our Story", link: "/about" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="mt-12 pb-4 border-b-2 border-light_gray flex justify-between items-center px-4 ">
      <NavLink to="/">
        <img src={data?.url} alt="logo" />
      </NavLink>

      <nav className="flex">
        {/* HEADER MOBILE */}
        <section className="flex lg:hidden xl:hidden xxl:hidden">
          <HeaderLink to="/cart">
            <img src={cartIcon} alt="cart" />
          </HeaderLink>
          <div
            className="HAMBURGER-ICON space-y-2 ml-4"
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              document.querySelector("body").classList.add("fixed");
            }}
          >
            <span className="block rounded-md h-0.5 w-8 animate-pulse bg-gray-600 border"></span>
            <span className="block rounded-md h-0.5 w-8 animate-pulse bg-gray-600 border"></span>
            <span className="block rounded-md h-0.5 w-6 text-right animate-pulse bg-gray-600 border"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => {
                setIsNavOpen(false);
                document.querySelector("body").classList.remove("fixed");
              }}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col gap-8  text-base ">
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="heading5D font-medium"
                    onClick={() =>
                      document.querySelector("body").classList.remove("fixed")
                    }
                  >
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-10 ">
              <li
                onClick={() =>
                  document.querySelector("body").classList.remove("fixed")
                }
              >
                <HeaderLink to="/search">
                  <img src={searchIcon} alt="search" />
                </HeaderLink>
              </li>

              <li
                onClick={() =>
                  document.querySelector("body").classList.remove("fixed")
                }
              >
                <HeaderLink to="/account">
                  <img src={userIcon} alt="user" />
                </HeaderLink>
              </li>
            </ul>
          </div>
        </section>

        {/* HEADER DESKTOP */}
        <section className="hidden lg:flex xl:flex xxl:flex mx-4">
          <ul className="gap-16 flex text-base border-r-2 border-light_gray pr-12 ">
            {links.map((link) => {
              return (
                <li key={link.id} className="heading5D font-medium">
                  <NavLink to={link.link}>{link.title}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className="ml-12">
            <ul className="flex gap-10 ">
              <li>
                <HeaderLink to="/search">
                  <img src={searchIcon} alt="search" />
                </HeaderLink>
              </li>
              <li>
                <HeaderLink to="/cart">
                  <img src={cartIcon} alt="cart" />
                </HeaderLink>
              </li>
              <li>
                <HeaderLink to="/account">
                  <img src={userIcon} alt="user" />
                </HeaderLink>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
