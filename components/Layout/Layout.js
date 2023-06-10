import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <NavBar userName="user@gmail.com" />
      {children}
    </main>
  );
};

export default Layout;
