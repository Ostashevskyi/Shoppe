import { NavLink } from "react-router-dom";

export const AccentLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className="heading4D font-normal text-accent
    hover:text-black"
    >
      {children}
    </NavLink>
  );
};
