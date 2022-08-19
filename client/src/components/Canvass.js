import React from "react";
import { createPortal } from "react-dom";

const Canvass = (props) => {
  return createPortal(
    <canvass className="canvass">{props.children}</canvass>,
    document.querySelector("#portal")
  );
};

export default Canvass;
