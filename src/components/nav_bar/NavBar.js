// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className={`${styles.rightItems} ${styles.hotChemieItems}`}>
          <li>
            <Link to="/dibate-list/hot">HOT🔥</Link>
          </li>
          <li>
            <Link to="/section2">케미확인</Link>
          </li>
        </div>
        <div className={styles.rightItems}>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
