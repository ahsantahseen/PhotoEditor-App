import React, { Fragment } from "react";
import classes from "../../Styling/App.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  console.log("Modal Rendered");
  return (
    <Fragment>
      <Backdrop clicked={props.clicked} show={props.show}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

const CheckingFunction = (prevProps, nextProps) => {
  return (
    prevProps.show === nextProps.show ||
    prevProps.children === nextProps.children
  );
};
export default React.memo(Modal, CheckingFunction);
