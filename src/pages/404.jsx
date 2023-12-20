import React from "react";
import Wrapper from "@/components/Wrapper";
import { ButtonM, ButtonXS } from "../components/Button";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Wrapper>
      <main className="my-60 text-center">
        <h1 className="uppercase text-3xl font-medium mb-6">404 Error</h1>
        <p className="heading3D text-dark_gray mb-16">
          This page not found; <br /> back to home and start again
        </p>
        <NavLink to="/">
          <ButtonXS>HOMEPAGE</ButtonXS>
        </NavLink>
      </main>
    </Wrapper>
  );
};

export default PageNotFound;
