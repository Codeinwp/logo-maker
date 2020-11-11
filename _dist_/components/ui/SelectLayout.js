import * as React from "../../../web_modules/react.js";
import UIStore2 from "../../stores/UIStore.js";
const SelectLayout = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-gray-500 my-1"
  }, "LOGO OPTIONS"), /* @__PURE__ */ React.createElement("p", {
    className: "my-1"
  }, "Select a symbol for the logo"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center items lg:items-start"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "box-border h-24 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 hover:border-blue-600 rounded-lg",
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-top";
    })
  }, "Logo TOP"), /* @__PURE__ */ React.createElement("button", {
    className: "box-border h-24 w-4/5 p-2 my-4 border-2 hover:border-blue-600  rounded-lg",
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-left";
    })
  }, "Logo LEFT"), /* @__PURE__ */ React.createElement("button", {
    className: "box-border h-24 w-4/5 p-2 my-4 border-2 hover:border-blue-600 rounded-lg",
    onClick: () => UIStore2.update((s) => {
      s.container.align = "align-right";
    })
  }, "Logo RIGHT")));
};
export default SelectLayout;
