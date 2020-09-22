import React from "react";
import classes from "../../Styling/App.module.css";
import SideToolbarItem from "./sideToolbarItem";

const SideToolbar = () => {
  return (
    <div className={classes.sideToolbar}>
      <SideToolbarItem></SideToolbarItem>
      <SideToolbarItem></SideToolbarItem>
      <SideToolbarItem></SideToolbarItem>
    </div>
  );
};

export default SideToolbar;
