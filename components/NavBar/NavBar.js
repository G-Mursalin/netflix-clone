import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = ({ userName }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

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

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnclickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnclickMyList}>
            My List
          </li>
        </ul>
        <div className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{userName}</p>
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
                  <Link href="/login" className={styles.linkName}>
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
