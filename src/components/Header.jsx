import React from "react";
import useLogo from "../hooks/useLogo";
import { NavLink } from "react-router-dom";
import { searchIcon, userIcon, cartIcon } from "@/utils/icon_imports";

const Header = () => {
  const data = useLogo();

  return (
    <div className="mt-12 flex justify-between items-center">
      <NavLink to="/">
        <img src={data?.url} alt="logo" />
      </NavLink>
      <div className="flex">
        <div className="pr-12 border-r-2">
          <ul className="flex gap-16 text-base">
            <li>
              <NavLink to="#">Shop</NavLink>
            </li>
            <li>
              <NavLink to="#">Blog</NavLink>
            </li>
            <li>
              <NavLink to="#">Our Story</NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-12">
          <ul className="flex gap-10 ">
            <li>
              <NavLink to="#">
                <img src={searchIcon} alt="search" />
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img src={cartIcon} alt="cart" />
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img src={userIcon} alt="user" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
