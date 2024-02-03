import React from "react";
import styles from "../styleSheet/Header.module.css";
import NetflixLogo from "../components/NetflixLogo";
import Button from "@mui/material/Button";
import Search from "./Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <nav className={`navbar ${styles.navbar}`}>
          <NetflixLogo />
          <div className={styles.navbarRightSide}>
            <select className={styles.selectOption}>
              <option className="bg-light text-dark">English</option>
              <option className="bg-light text-dark">हिन्दी</option>
            </select>
            <Button
              className={`fw-bold m-2`}
              style={{
                backgroundColor: "red",
              }}
            >
            <Link to={'/signup'} className="text-white text-decoration-none"> Sign In</Link>
             
            </Button>
          </div>
        </nav>
        <center className={styles.search}>
          <Search />
        </center>
      </div>
    </>
  );
}

export default Header;
