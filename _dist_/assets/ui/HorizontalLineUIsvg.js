import * as React from "../../../web_modules/react.js";
const HorizontalLineUIsvg = (props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "58",
    height: "9",
    viewBox: "0 0 58 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: props?.clasName
  }, /* @__PURE__ */ React.createElement("line", {
    y1: "1.25",
    x2: "58",
    y2: "1.25",
    stroke: props?.isSelected ? "#43C2D1" : "#8B8B9C",
    strokeWidth: "1.5"
  }), /* @__PURE__ */ React.createElement("line", {
    y1: "8.25",
    x2: "58",
    y2: "8.25",
    stroke: props?.isSelected ? "#43C2D1" : "#8B8B9C",
    strokeWidth: "1.5"
  }));
};
export default HorizontalLineUIsvg;
