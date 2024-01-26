import { NavLink } from "react-router-dom";

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
