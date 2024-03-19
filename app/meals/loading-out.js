import React from "react";
import classes from "./loading.module.css";

function loading() {
  return <p className={classes.loading}>Fetching Meals...</p>;
}

export default loading;
