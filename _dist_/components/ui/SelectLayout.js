import * as React from "../../../web_modules/react.js";
import classnames2 from "../../../web_modules/classnames.js";
import HorizontalLineUIsvg2 from "../../assets/ui/HorizontalLineUIsvg.js";
import LogoUIsvg2 from "../../assets/ui/LogoUIsvg.js";
import UIStore2 from "../../stores/UIStore.js";
const SelectLayout = () => {
  const alignOption = UIStore2.useState((s) => s.container.align);
  return /* @__PURE__ */ React.createElement("div", {
    className: "select-layout"
  }, /* @__PURE__ */ React.createElement("h1", null, "LOGO OPTIONS"), /* @__PURE__ */ React.createElement("p", null, "Select a symbol for the logo"), /* @__PURE__ */ React.createElement("div", {
    className: "options"
  }, /* @__PURE__ */ React.createElement("button", {
    className: classnames2("box-border", {active: alignOption === "align-top"}),
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-top";
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: "align-top"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-top"
  }), /* @__PURE__ */ React.createElement(HorizontalLineUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-top"
  })), "Logo TOP"), /* @__PURE__ */ React.createElement("button", {
    className: classnames2("box-border", {active: alignOption === "align-left"}),
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-left";
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: "align-left"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-left"
  }), /* @__PURE__ */ React.createElement(HorizontalLineUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-left"
  })), "Logo LEFT"), /* @__PURE__ */ React.createElement("button", {
    className: classnames2("align-right", {active: alignOption === "align-right"}),
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-right";
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: "align-right"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    isSelected: alignOption === "align-right"
  }), /* @__PURE__ */ React.createElement(HorizontalLineUIsvg2, {
    isSelected: alignOption === "align-right"
  })), "Logo RIGHT")));
};
export default SelectLayout;
