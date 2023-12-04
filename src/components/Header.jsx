import React from "react";
import useLogo from "../hooks/useLogo";
import { NavLink } from "react-router-dom";
import { searchIcon, userIcon, cartIcon } from "@/utils/icon_imports";
import { HeaderLink } from "./Link";

const Header = () => {
  const data = useLogo();

  return (
    <div
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
              <HeaderLink to="#">Shop</HeaderLink>
            </li>
            <li>
              <HeaderLink to="blog">Blog</HeaderLink>
            </li>
            <li>
              <HeaderLink className="textDesktop[heading1]" to="#">
                Our Story
              </HeaderLink>
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
              <HeaderLink to="cart">
                <img src={cartIcon} alt="cart" />
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="#">
                <img src={userIcon} alt="user" />
              </HeaderLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
