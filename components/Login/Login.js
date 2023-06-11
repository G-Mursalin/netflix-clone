import React, { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Read Email from Input Field
  const handleEnteredEmail = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  //Handle SignIn
  const handleSignIn = (e) => {
    e.preventDefault();

    // Validate Email
    if (
      !email ||
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
        email
      )
    ) {
      setError("Enter a valid email address");
      return;
    }

    router.push("/");
  };
  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.signinHeader}>Sign In</h1>

        <input
          type="text"
          placeholder="Email address"
          className={styles.emailInput}
          onChange={handleEnteredEmail}
        />

        <p className={styles.error}>{error}</p>
        <button onClick={handleSignIn} className={styles.loginBtn}>
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Login;
