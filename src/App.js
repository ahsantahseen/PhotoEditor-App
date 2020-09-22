import React from "react";
import classes from "./Styling/App.module.css";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.editingImage}>Image</div>

      <div className={classes.sideToolbar}>Side Toolbar </div>
      <Slider></Slider>
    </div>
  );
}

export default App;
