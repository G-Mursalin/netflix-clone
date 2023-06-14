import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { magic } from "@/lib/magicClient";
import useLogin from "@/hooks/useLogin";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading] = useLogin();
  const router = useRouter();

  console.log(isLoading);
  // Handle Home and My List
  const handleOnclickHome = () => {
    router.push("/");
  };

  const handleOnclickMyList = () => {
    router.push("/my-list");
  };
  // Handle Dropdown
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await magic.user.logout();
      setUserEmail(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Get user data from signin user
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { email } = await magic.user.getMetadata();
        console.log("From NavBar*********", email);
        setUserEmail(email);
      } catch (err) {}
    };

    getUserData();
  }, []);

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width={128}
              height={34}
            />
          </div>
        </Link>

        {isLoading && (
          <ul className={styles.navItems}>
            <li className={styles.navItem} onClick={handleOnclickHome}>
              Home
            </li>
            <li className={styles.navItem2} onClick={handleOnclickMyList}>
              My List
            </li>
          </ul>
        )}
        {isLoading && (
          <div className={styles.navContainer}>
            <div>
              <button
                className={styles.usernameBtn}
                onClick={handleShowDropdown}
              >
                <p className={styles.username}>{userEmail}</p>
                <Image
                  src={"/static/expand_more.svg"}
                  alt="Expand dropdown"
                  width={24}
                  height={24}
                />
              </button>
              {showDropdown && (
                <div className={styles.navDropdown}>
                  <div>
                    <Link
                      onClick={handleSignOut}
                      href="/login"
                      className={styles.linkName}
                    >
                      Sign out of Netflix
                    </Link>
                    <div className={styles.lineWrapper}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
