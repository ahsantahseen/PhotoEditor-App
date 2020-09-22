import React from "react";
import classes from "../Styling/App.module.css";
import Slider from "../Components/Slider/Slider";
import SideToolbar from "../Components/sideToolbar/sideToolbar";
import EditingImage from "../Components/editingImage/editingImage";

function App() {
  return (
    <div className={classes.mainContainer}>
      <EditingImage></EditingImage>
      <SideToolbar></SideToolbar>
      <Slider></Slider>
    </div>
  );
}

export default App;
