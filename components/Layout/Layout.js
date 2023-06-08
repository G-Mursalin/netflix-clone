import React from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <main>
      <NavBar userName="user@gmail.com" />
      {children}
    </main>
  );
};

export default Layout;
