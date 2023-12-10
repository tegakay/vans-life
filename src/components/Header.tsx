import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};
