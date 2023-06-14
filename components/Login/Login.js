import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/router";
import { magic } from "@/lib/magicClient";

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
  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Validate Email
      if (
        !email ||
        !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
          email
        )
      ) {
        setError("Enter a valid email address");
        setIsLoading(false);
        return;
      }
      // Send Magic Link to Email
      // Log in a user by their email
      const didToken = await magic.auth.loginWithMagicLink({
        email,
      });
      // Redirect the user If Successfully Get Token
      if (didToken) {
        console.log({ didToken });
        router.push("/");
      }
    } catch (err) {
      console.log("Fail to login", err);
    }
  };

  //Listening for the route changed or error then loading to false
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  return (
    <div className={styles.main}>
      <form onSubmit={handleSignIn} className={styles.mainWrapper}>
        <h1 className={styles.signinHeader}>Sign In</h1>

        <input
          type="text"
          placeholder="Email address"
          className={styles.emailInput}
          onChange={handleEnteredEmail}
        />

        <p className={styles.error}>{error}</p>
        <button type="submit" className={styles.loginBtn}>
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
