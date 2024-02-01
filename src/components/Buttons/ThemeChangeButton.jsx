import React from "react";

import { useDispatch } from "react-redux";

import { setTheme } from "@/store/themeSlice";

import getTheme from "@/utils/getTheme";

const ThemeChangeButton = () => {
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dispatch = useDispatch();

  const theme = getTheme();

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
    }
  };

  themeCheck();

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
      return;
    }

    document.documentElement.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    dispatch(setTheme("dark"));
  };

  return (
    <button
      className="text-text max-w-[21px] max-h-[21px]"
      onClick={() => themeSwitch()}
    >
      {theme === "dark" ? <img src="/moon.png" /> : <img src="/sun.png" />}
    </button>
  );
};

export default ThemeChangeButton;
