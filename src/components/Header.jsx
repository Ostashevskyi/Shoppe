import React from "react";

import { NavLink } from "react-router-dom";

import useLogo from "../hooks/useLogo";

import { HeaderLink } from "./Link";

import { searchIcon, userIcon, cartIcon } from "@/utils/icon_imports";

const Header = () => {
  const data = useLogo();

  return (
    <header
      className="mt-12 pb-4 border-b-2 border-light_gray flex justify-between items-center
    "
    >
      <NavLink to="/">
        <img src={data?.url} alt="logo" />
      </NavLink>
      <div className="flex">
        <div className="pr-12 border-r-2 border-light_gray">
          <ul className="flex gap-16 text-base">
            <li>
              <HeaderLink to="/catalog">Shop</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/blog">Blog</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/about">Our Story</HeaderLink>
            </li>
          </ul>
        </div>
        <div className="ml-12">
          <ul className="flex gap-10 ">
            <li>
              <HeaderLink to="#">
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
      </div>
    </header>
  );
};

export default Header;
