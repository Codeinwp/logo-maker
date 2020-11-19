import * as React from "../../../web_modules/react.js";
import {Link} from "../../../web_modules/react-router-dom.js";
const BackUI = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "back"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "",
    to: props.to || "/start"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("circle", {
    cx: "21",
    cy: "21",
    r: "20.5",
    fill: "white",
    stroke: "#E7E7E7"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M23 17L19 21L23 25",
    stroke: "#585858",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /* @__PURE__ */ React.createElement("p", null, "Back")));
};
export default BackUI;
