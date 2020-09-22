import React, { useState } from "react";
import classes from "../../Styling/App.module.css";
import SideToolbarItem from "./sideToolbarItem";

const SideToolbar = () => {
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
      property: "saturation",
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
  const SelectedOptionIndex = Options[ActiveOptionIndex];

  return (
    <div className={classes.sideToolbar}>
      {Options.map((option, index) => {
        return (
          <SideToolbarItem key={index} name={option.name}></SideToolbarItem>
        );
      })}
    </div>
  );
};

export default SideToolbar;
