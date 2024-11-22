import React from "react";
import classes from "./spinner.module.css";

function Spinner() {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes.spinner}></div>
    </div>
  );
}

export default Spinner;
