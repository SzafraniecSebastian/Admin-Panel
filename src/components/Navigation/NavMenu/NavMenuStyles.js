import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenuUl = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavMenuLinks = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  margin: 10px;
`;
