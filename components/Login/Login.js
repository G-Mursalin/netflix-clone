import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userMsg, setUserMsg] = useState("");

  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.signinHeader}>Sign In</h1>

        <input
          type="text"
          placeholder="Email address"
          className={styles.emailInput}
        />

        <p className={styles.userMsg}>{userMsg}</p>
        <button className={styles.loginBtn}>
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Login;
