import React from "react";
import classes from "../../Styling/App.module.css";

const Slider = () => {
  return (
    <div className={classes.SliderContainer}>
      <input type="range" className={classes.Slider}></input>
    </div>
  );
};

export default Slider;
