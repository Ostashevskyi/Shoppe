import { NavLink } from "react-router-dom";

export const HeaderLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className="body_large font-semibold
      active:underline active:underline-offset-8 xs:flex md:flex sm:flex gap-2"
    >
      {children}
    </NavLink>
  );
};
