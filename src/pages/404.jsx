import React from "react";

import { NavLink } from "react-router-dom";

import Wrapper from "@/components/Wrapper";
import { ButtonXS } from "@/components/Buttons/ButtonXS";

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
