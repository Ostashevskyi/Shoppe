import { NavLink } from "react-router-dom";

export const SVGLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className="uppercase body_large font-semibold text-dark_gray 
      hover:text-black hover:fill-current"
    >
      {children}
    </NavLink>
  );
};
