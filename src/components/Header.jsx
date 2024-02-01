import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import SearchBurgerForm from "./Forms/SearchBurgerForm";

import useLogo from "@/hooks/useLogo";

import CartIcon from "@/components/icons/CartIcon";
import UserIcon from "@/components/icons/UserIcon";
import LoginIcon from "@/components/icons/LoginIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import { HeaderLink } from "@/components/Links/HeaderLink";
import ThemeChangeButton from "@/components/Buttons/ThemeChangeButton";
import SearchIcon from "@/components/icons/SearchIcon";
import getTheme from "@/utils/getTheme";

const Header = () => {
  const theme = getTheme();
  const logo = theme === "dark" ? useLogo("MainLogoDark") : useLogo("MainLogo");

  const links = [
    { id: 0, title: "Shop", link: "/catalog" },
    { id: 1, title: "Blog", link: "/blog" },
    { id: 2, title: "Our Story", link: "/about" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const { logout, isAuthenticated, loginWithPopup } = useAuth0();

  return (
    <header>
      <div className="pt-12 pb-4 lg:mx-4 xl:border-b-2 xl:border-light_gray lg:border-b-2 lg:border-light_gray xxl:border-b-2 xxl:border-light_gray flex justify-between items-center px-4 ">
        <NavLink to="/">
          <img src={logo?.url} alt="logo" />
        </NavLink>

        <nav className="flex text-text">
          {/* HEADER MOBILE */}
          <section className="flex lg:hidden xl:hidden xxl:hidden bg-backgroud">
            <div className="flex gap-4 items-center">
              <ThemeChangeButton />
              <HeaderLink to="/cart">
                <CartIcon />
              </HeaderLink>
              <div
                className="HAMBURGER-ICON space-y-1.5 "
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                  document.querySelector("body").classList.add("fixed");
                }}
              >
                <span className="block rounded-md h-0.5 w-8 bg-gray-600 border"></span>
                <span className="block rounded-md h-0.5 w-8 bg-gray-600 border"></span>
                <span className="block rounded-md h-0.5 w-6 text-right bg-gray-600 border"></span>
              </div>
            </div>

            <div
              className={
                isNavOpen ? "showMenuNav px-4 bg-black" : "hideMenuNav"
              }
            >
              <div className="flex mt-4 justify-between">
                <NavLink
                  to="/"
                  onClick={() => {
                    setIsNavOpen(false);
                    document.querySelector("body").classList.remove("fixed");
                  }}
                >
                  <img src={logo?.url} alt="logo" />
                </NavLink>

                <div
                  className="flex items-center gap-5 mb-2"
                  onClick={() => {
                    document.querySelector("body").classList.remove("fixed");
                  }}
                >
                  <HeaderLink to="/cart">
                    <CartIcon />
                  </HeaderLink>
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
              </div>
              <SearchBurgerForm />
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => {
                  setIsNavOpen(false);
                  document.querySelector("body").classList.remove("fixed");
                }}
              ></div>
              <ul className="flex flex-col gap-8 text-base mb-16">
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
                <ThemeChangeButton />
              </ul>
              <ul className="flex flex-col gap-5">
                <li
                  className="flex border-b border-gray"
                  onClick={() =>
                    document.querySelector("body").classList.remove("fixed")
                  }
                >
                  <HeaderLink to="/account">
                    <UserIcon />
                    <p className="heading5D font-normal">My account</p>
                  </HeaderLink>
                </li>
                <li
                  className="flex items-center "
                  onClick={() => {
                    document.querySelector("body").classList.remove("fixed");
                  }}
                >
                  {isAuthenticated ? (
                    <button onClick={() => logout()} className="flex gap-2">
                      <LogoutIcon />
                      <p className="heading5D font-normal">Logout</p>
                    </button>
                  ) : (
                    <button
                      onClick={() => loginWithPopup()}
                      className="flex gap-2"
                    >
                      <LoginIcon />
                      <p className="heading5D font-normal">Login</p>
                    </button>
                  )}
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
                  <ThemeChangeButton />
                </li>
                <li>
                  <HeaderLink to="/search">
                    <SearchIcon />
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink to="/cart">
                    <CartIcon />
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink to="/account">
                    <UserIcon />
                  </HeaderLink>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </div>
      <div className="mx-4 hidden xs:block sm:block md:block">
        <SearchBurgerForm />
      </div>
    </header>
  );
};

export default Header;
