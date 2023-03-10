import React, { createContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/authContext";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
