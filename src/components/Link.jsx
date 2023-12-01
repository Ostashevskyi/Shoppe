import { NavLink } from "react-router-dom";

export const HeaderLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className="body_large font-semibold
      active:underline active:underline-offset-8"
    >
      {children}
    </NavLink>
  );
};

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

export const BasicLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className="body_large font-semibold
    hover:text-dark_gray"
    >
      {children}
    </NavLink>
  );
};

export const AccentLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className="heading3D font-bold text-accent
    hover:text-black"
    >
      {children}
    </NavLink>
  );
};
