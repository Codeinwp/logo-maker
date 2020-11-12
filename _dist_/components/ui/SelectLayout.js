import * as React from "../../../web_modules/react.js";
import classnames2 from "../../../web_modules/classnames.js";
import HorizontalLineUIsvg2 from "../../assets/ui/HorizontalLineUIsvg.js";
import LogoUIsvg2 from "../../assets/ui/LogoUIsvg.js";
import UIStore2 from "../../stores/UIStore.js";
const SelectLayout = () => {
  const alignOption = UIStore2.useState((s) => s.container.align);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-gray-500 my-1"
  }, "LOGO OPTIONS"), /* @__PURE__ */ React.createElement("p", {
    className: "my-1"
  }, "Select a symbol for the logo"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center items lg:items-start"
  }, /* @__PURE__ */ React.createElement("button", {
    className: classnames2("box-border flex flex-col items-center justify-center  h-32 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 rounded-lg", {"color-ui-blue-inactive": alignOption !== "align-top"}, {"color-ui-blue-active": alignOption === "align-top"}),
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-top";
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center m-1"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-top"
  }), /* @__PURE__ */ React.createElement(HorizontalLineUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-top"
  })), "Logo TOP"), /* @__PURE__ */ React.createElement("button", {
    className: classnames2("box-border flex flex-col items-center justify-center  h-32 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 rounded-lg", {"color-ui-blue-inactive": alignOption !== "align-left"}, {"color-ui-blue-active": alignOption === "align-left"}),
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-left";
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center justify-center m-1"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-left"
  }), /* @__PURE__ */ React.createElement(HorizontalLineUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-left"
  })), "Logo LEFT"), /* @__PURE__ */ React.createElement("button", {
    className: classnames2("box-border flex flex-col items-center justify-center  h-32 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 rounded-lg", {"color-ui-blue-inactive": alignOption !== "align-right"}, {"color-ui-blue-active": alignOption === "align-right"}),
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-right";
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row-reverse items-center justify-center m-1"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-right"
  }), /* @__PURE__ */ React.createElement(HorizontalLineUIsvg2, {
    clasName: "m-1",
    isSelected: alignOption === "align-right"
  })), "Logo RIGHT")));
};
export default SelectLayout;
