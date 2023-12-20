import React from "react";
import { NavLink } from "react-router-dom";

const Downloads = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 bg-light_gray border-t-2 border-accent">
      <p className="heading5D">No downloads available yet</p>
      <NavLink to="/catalog" className="uppercase body_large text-accent">
        Browse product
      </NavLink>
    </div>
  );
};

export default Downloads;
