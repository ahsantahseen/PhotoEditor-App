import React, { useState } from "react";
import classes from "../Styling/App.module.css";
import Slider from "../Components/Slider/Slider";
import SideToolbar from "../Components/sideToolbar/sideToolbar";
import EditingImage from "../Components/editingImage/editingImage";

function App() {
  const DefaultOptions = [
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      units: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      units: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      units: "%",
    },
    {
      name: "Grayscale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      units: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      units: "%",
    },
    {
      name: "Hue Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      units: "deg",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 20,
      },
      units: "px",
    },
  ];

  const [ActiveOptionIndex, setActiveOptionIndex] = useState(0);
  const [Options, setOptions] = useState(DefaultOptions);
  const SelectedOption = Options[ActiveOptionIndex];
  const SliderChangeHandler = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== ActiveOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  };
  const getImageStyle = () => {
    const filters = Options.map((option) => {
      return `${option.property}(${option.value}${option.units})`;
    });
    return { filter: filters.join(" ") };
  };
  return (
    <div className={classes.mainContainer}>
      <EditingImage style={getImageStyle()}></EditingImage>
      <SideToolbar
        ActiveOptionIndex={ActiveOptionIndex}
        options={Options}
        onChange={setActiveOptionIndex}
      ></SideToolbar>
      <Slider
        min={SelectedOption.range.min}
        max={SelectedOption.range.max}
        value={SelectedOption.value}
        handlerChange={SliderChangeHandler}
      ></Slider>
    </div>
  );
}

export default App;
