import classes from "../../Styling/App.module.css";
import React from "react";

const SideToolbarItem = (props) => {
  return <button className={classes.sideToolbarItem}>{props.name}</button>;
};

export default SideToolbarItem;
