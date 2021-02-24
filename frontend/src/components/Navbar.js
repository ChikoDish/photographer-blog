import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          New Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          best Stories
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
