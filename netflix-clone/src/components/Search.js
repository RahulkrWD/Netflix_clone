import React from "react";
import TextField from "@mui/material/TextField";
import styles from "../styleSheet/Search.module.css";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <div>
        <h2 className={`text-white fs-2 fw-bolder m-2 ${styles.details}`}>
          Unlimited movies, TV Shows and more.
        </h2>
        <p className={`text-white fs-4 ${styles.details}`}>
          Watch anywhere. Cancel anytime.
        </p>
        <p className={`text-white fs-6 ${styles.details}`}>
          Read to watch? Enter your email to create or restart your membership
        </p>
        <br />
        <TextField
          className={`${styles.textField}`}
          InputProps={{
            style: {
              color: "white",
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          id="outlined-basic"
          label="Email address"
          variant="filled"
        />
        <button className={`text-white ${styles.searchBtn}`}>
        <Link to={'/netflix'} className="text-decoration-none text-white"> Get Started <i class="fa-solid fa-angle-right"></i></Link>
         
        </button>
      </div>
    </>
  );
}

export default Search;
