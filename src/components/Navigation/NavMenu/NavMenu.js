import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { NavMenuUl, NavMenuLinks } from "./NavMenuStyles";

const NavMenu = () => {
  return (
    <NavMenuUl>
      <li>
        <NavMenuLinks to={routes.addOrder}>Add Orders</NavMenuLinks>
      </li>
      <li>
        <NavMenuLinks to={routes.orders}>Orders</NavMenuLinks>
      </li>
    </NavMenuUl>
  );
};

export default NavMenu;
