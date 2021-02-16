import React from "react";
import NavMenu from "../components/Navigation/NavMenu/NavMenu";

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
};

export default MainTemplate;
